const rewirePreact = require('react-app-rewire-preact');
const rewireUglifyjs = require('react-app-rewire-uglifyjs');

module.exports = function override(config, env) {
  config = rewirePreact(config, env);
  config = rewireUglifyjs(config);
  return config;
};
