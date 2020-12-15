const path = require('path')
const fs = require('fs-extra')
const exec = require('child_process').exec

function isFunction(func) {
  return Object.prototype.toString.call(func) === '[object Function]'
}

function parseArgs (cmd) {
  if (!cmd) return {}
  const resOps = {}
  cmd.options.forEach(option => {
    const key = option.long.replace(/^--/, '');
    if (cmd[key] && !isFunction(cmd[key])) {
      resOps[key] = cmd[key]
    }
  })
  return resOps
}

function getPath(sorce) {
  console.log(path.resolve(sorce))
  return path.resolve(sorce)
}

async function copyFiles(tempPath, targetPath) {
  await fs.copy(tempPath, targetPath)
}

const inquirerConfig = {
  // 文件夹已存在的名称的询问参数
  folderExist: [{
    type: 'list',
    name: 'recover',
    message: '当前文件夹已存在，请选择操作：',
    choices: [
      { name: '创建一个新的文件夹', value: 'newFolder' },
      { name: '覆盖', value: 'cover' },
      { name: '退出', value: 'exit' },
    ]
  }],
  // 重命名的询问参数
  rename: [{
    name: 'name',
    type: 'input',
    message: '请输入新的项目名称: ',
    validate: (val) => {
      return val !== ''
    }
  }]
}

const repos = {
  'github': 'github:zzcan/template'
}

module.exports = {
  parseArgs,
  getPath,
  copyFiles,
  inquirerConfig,
  repos,
}