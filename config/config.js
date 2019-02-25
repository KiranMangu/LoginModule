import * as config from './config.json'

var env = process.env.NODE_ENV || 'dev';
var envConfig = config[env];
Object.keys(envConfig).forEach(key => process.env[key] = envConfig[key]);
// console.log('env:' + env);