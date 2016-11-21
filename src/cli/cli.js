// @flow

import program from 'commander'
import { version } from '../../package.json'

program
  .version(version)

program
  .command('init')
  .description('Install Neato in the current folder')
  .action(() => { console.log('Did the thing!') })

program
  .command('dev')
  .description('Runs the Neato dev suite')
  .action(() => { console.log('Running dev suite!') })

program
  .command('build')
  .description('Compiles your project')
  .option('-O, --optimize', 'Optimize the build')
  .action(() => { console.log('Building app!') })

export default (argv: string[] = ['-h']) => {
  try {
    program.parse(argv)
  } catch (e) {
    throw new Error(e)
  }

  if (!argv.slice(2).length) program.outputHelp()
}
