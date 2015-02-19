var grunt = require('grunt');

module.exports = {
  options: {
    templateBasePath: /app\/templates\//,
    templateFileExtensions: /\.(hbs|hjs|handlebars)/,
    precompile: true,
    handlebarsPath: "node_modules/handlebars/dist/handlebars.js",
    templateCompilerPath: "vendor/ember/ember-template-compiler.js"

  },
  debug: {
    options: {
      precompile: true
    },
    src: "app/**/*.{hbs,hjs,handlebars}",
    dest: "tmp/result/assets/templates.js"
  },
  dist: {
    src: "<%= emberTemplates.debug.src %>",
    dest: "<%= emberTemplates.debug.dest %>"
  }
};
