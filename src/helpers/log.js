// @flow

import c from 'chalk'

const errorStyle = c.bold.red
const warningStyle = c.bold.yellow
const debugStyle = c.green
const infoStyle = c.blue
const prepend = c.bgBlack(`${c.green('N')}${c.cyan('e')}${c.blue('a')}${c.magenta('t')}${c.red('o')}`)

const logger = (...entries: any[]) => entries.forEach((entry: any) => console.log(entry))

export const error = (...entries: any[]) => logger(prepend, errorStyle('ERROR'), errorStyle(...entries))
export const warning = (...entries: any[]) => logger(prepend, warningStyle.inverse('WARNING'), warningStyle(...entries))
export const debug = (...entries: any[]) => logger(prepend, debugStyle.inverse('DEBUG'), debugStyle(...entries))
export const info = (...entries: any[]) => logger(prepend, infoStyle.inverse('INFO'), infoStyle(...entries))
export default (...entries: any) => logger(prepend, ...entries)
