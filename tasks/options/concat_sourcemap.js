module.exports = {
  app: {
    src: ['tmp/javascript/app/**/*.js'],
    dest: 'tmp/result/assets/app.js',
    options: {
      sourcesContent: true
    },
  },

  config: {
    src: ['tmp/result/config/**/*.js'],
    dest: 'tmp/result/assets/config.js',
    options: {
      sourcesContent: true
    },
  },

  test: {
    src: 'tmp/javascript/tests/**/*.js',
    dest: 'tmp/result/tests/tests.js',
    options: {
      sourcesContent: true
    }
  }
};
