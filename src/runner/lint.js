// @flow

import eslint from 'eslint'
import extensions from 'extensions'

export default (neatoConfig: NeatoConfigType): Promise<*> => new Promise((resolve: Function, reject: Function) => {
  const lint = new eslint.CLIEngine({
    extensions: extensions.list.javascript
  })

  const report = lint.executeOnFiles([neatoConfig.projectPath])
  const formatter = lint.getFormatter()
  if (report.errorCount > 0) {
    console.log('Lint failed:')
    console.log(formatter(report.results))
    reject()
  } else if (report.warningCount > 0) {
    console.log('Lint contained warnings:')
    console.log(formatter(report.results))
    resolve()
  } else {
    console.log('Lint completed without errors.')
    resolve()
  }
})
