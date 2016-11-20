// @flow

import program from 'commander'
import { version } from '../../package.json'

program
  .version(version)
  .parse(process.argv)

program
  .command('init')
  .description('Install Neato in the current folder')
  .option('-O, --optimize', 'Optimize the build')
  .action(() => { console.log('Did the thing!') })

export default (argv: string[] = ['-h']) => {
  try {
    program.parse(argv)
  } catch (e) {
    throw new Error(e)
  }

  if (!argv.slice(2).length) program.outputHelp()
}
