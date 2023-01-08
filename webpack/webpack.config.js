const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common.js')

/**
 *
 * @param {*} envVars : these will be passed from package.json file ("start": "webpack serve --config webpack/webpack.config.js --env env=dev",)
 * @returns : will return merged webpack-config i.e either common+dev or common+prod
 */
module.exports = (envVars) => {
  const { env } = envVars // env will be either dev or prod(it's being passed from package.json `start/build` script)
  const envConfig = require(`./webpack.${env}.js`)
  const config = merge(commonConfig, envConfig)
  return config
}
