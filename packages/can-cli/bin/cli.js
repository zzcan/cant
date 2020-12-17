#!/usr/bin/env node

const { Command } = require('commander');
const package = require('../package.json');
const CreateApp = require('./CreateApp');

const program = new Command();

program
  .version(package.version, '-v, --version', 'ouput the current version')
  .usage('<command> [options]')
  .command('create <app-name>')
  .description('create react app')
  .option('-f, --force', '忽略文件夹检查，如果已存在则直接覆盖')
  // source表示当前定义的name参数
  // destination则是终端的cmd对象，可以从中解析到我们需要的内容
  .action((source, destination) => {
    new CreateApp(source, destination);
  });

try {
  program.parse(process.argv);
} catch (error) {
  console.log('parse argv error %o', error);
}
