const path = require('path')
const ora = require('ora')
const fs = require('fs-extra')
const inquirer = require('inquirer')
const download = require('download-git-repo')
const chalk = require('chalk')
const execa = require('execa')

const { 
  parseArgs,
  getPath,
  copyFiles,
  inquirerConfig,
  repos,
} = require('./util')

/**
 * 
 * @param {*} source 用户提供的文件夹名称
 * @param {*} destination 用户输入的create命令
 */
class CreateCommand {
  constructor(source, destination) {
    this.source = source
    this.args = parseArgs(destination)
    this.spinner = ora()
    this.repoMaps = {
      repos,
      temp: path.join(__dirname, '../__temp__'),
      target: getPath(source)
    }
    this.init()
  }

  async init() {
    try {
      // 检查文件目录是否存在
      await this.checkFolderExist()
      // 拉取远程模板
      await this.downloadRepo()
      // 将模板拷贝到工作目录
      await this.copyRepoFiles()
      // 更新package.json文件
      await this.updatePkgFile()
      // 初始化git文件
      await this.initGit()
      // 安装依赖
      await this.runApp()
    } catch (error) {
      console.log('init error %o', error)
    } finally {
      this.spinner.stop()
    }
  }

  async checkFolderExist() {
    const target = this.repoMaps.target
    // 强制覆盖
    if(this.args.force) return await fs.remove(target)

    try {
      // 文件夹存在
      const isExist = await fs.pathExists(target)
      if(!isExist) return

      const { recover } = await inquirer.prompt(inquirerConfig.folderExist)
      if(recover === 'newFolder') {
        //创建新的文件夹
        const { name } = await inquirer.prompt(inquirerConfig.rename)
        this.source = name
        this.repoMaps.target = getPath(name)
      } else if(recover === 'cover') {
        // 覆盖
        return await fs.remove(target)
      } else if(recover === 'exit') {
        // 退出
        process.exit(1)
      }
    } catch (error) {
      console.log('checkFolderExist error %o', error)
      process.exit(1)
    }
  }

  async downloadRepo() {
    this.spinner.start('download repo...')
    const { repos, temp } = this.repoMaps
    // 删除临时文件
    await fs.remove(temp)
    await new Promise((resolve, reject) => {
      download(repos.github, temp, err => {
        if(err) {
          this.spinner.fail('repo download fail!')
          return reject(err)
        }
        this.spinner.succeed('repo download successed!')
        resolve()
      })
    })
  }

  async copyRepoFiles() {
    const { temp, target } = this.repoMaps
    this.spinner.start()
    await copyFiles(temp, target)
    this.spinner.stop()
  }

  async updatePkgFile() {
    const { target } = this.repoMaps
    this.spinner.start('updating package.json...')
    const pkgPath = path.resolve(target, 'package.json')
    const pkgData = await fs.readJSON(pkgPath)

    const newPkgData = {
      ...pkgData,
      name: this.source,
      version: '1.0.0'
    }

    await fs.writeJSON(pkgPath, newPkgData, { spaces: '\t' })

    this.spinner.succeed('package.json updated')
  }

  async initGit() {
    const { target } = this.repoMaps
    this.spinner.start('init git...')

    await execa.command('git init', { cwd: target })

    this.spinner.succeed('git inited！')
  }

  async runApp() {
    const { target } = this.repoMaps
    this.spinner.start('installing package...');
    await execa.command('npm install --registry=https://registry.npm.taobao.org', { cwd: target })
    this.spinner.succeed('package installed!');
    console.log()
    console.log(chalk.yellowBright('please do that'))
    console.log(chalk.yellowBright(`cd ./${this.source}`))
    console.log(chalk.yellowBright('npm start'))
  }
}

module.exports = CreateCommand