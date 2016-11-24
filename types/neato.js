// @flow

export type NeatoOptionsType = {
  port: number,
  webpack?: Object,
  pages?: string[],
  vendor?: string[]
}

export type NeatoConfigType = {
  options: NeatoOptionsType,
  neatoPath: string,
  projectPath: string,
  optimize: boolean,
  action?: 'BUILD' | 'DEV' | 'LINT' | 'INSTALL'
}
