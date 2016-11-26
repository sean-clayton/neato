// @flow

import program from 'commander'
import neato, { neatoConfig } from '../index'
import { version } from '../../package.json'
import { debug } from 'helpers/log'
import actions from '../actions'

program
  .version(version)

const actionGenerator = (action: 'BUILD' | 'DEV' | 'INIT' | 'LINT', cliOptions): Function => () => {
  const options = {
    ...neatoConfig,
    action,
    optimize: cliOptions !== undefined && cliOptions.optimize
  }

  debug(neatoConfig, options.projectPath)

  neato.run(options).then(() => process.exit(0), () => process.exit(1))
}

program
  .command('init')
  .description('Install Neato in the current folder')
  .action(actionGenerator(actions.init))

program
  .command('dev')
  .description('Runs the Neato dev suite')
  .action(actionGenerator(actions.dev))

program
  .command('lint')
  .description('Runs a linter on your project')
  .action(actionGenerator(actions.lint))

program
  .command('build')
  .description('Compiles your project')
  .option('-O, --optimize', 'Optimize the build')
  .action(actionGenerator(actions.build))

export default (argv: string[] = ['-h']) => {
  try {
    program.parse(argv)
  } catch (e) {
    throw new Error(e)
  }

  if (!argv.slice(2).length) program.outputHelp()
}
