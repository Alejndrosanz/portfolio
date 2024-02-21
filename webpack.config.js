const path = require('path');

module.exports = {
  // other webpack configurations...
  resolve: {
    fallback: {
      process: require.resolve('process/browser'),
    },
  },
};
