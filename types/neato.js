// @flow

export type NeatoOptionsType = {
  port: number,
  webpack?: Object,
  pages?: string[]
}

export type NeatoConfigType = {
  options: NeatoOptionsType,
  neatoPath: string,
  projectPath: string
}
