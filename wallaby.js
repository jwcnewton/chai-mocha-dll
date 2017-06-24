module.exports = function (wallaby) {
  return {
    files: [
      'src/**/*.js',
      'api/**/*.js'
    ],

    tests: [
      'specs/**/*.spec.js'
    ],

    env: {
      type: 'node'
    },

    compilers: {
      '**/*.js': wallaby.compilers.babel()
    },
    debug: true,
    workers: {
      initial: 1,
      regular: 1,
      recycle: true
    }
  };
};
