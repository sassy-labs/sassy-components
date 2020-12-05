import url from '@rollup/plugin-url';

module.exports = {
  // This function will run for each entry/format/env combination
  rollup(config, options) {
    config.plugins.unshift(url());
    return config; // always return a config.
  },
};
