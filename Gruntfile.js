module.exports = function(grunt) {

  var config = {
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'build/geocharter.js',
        dest: 'build/geocharter.min.js'
      }
    }
  };

  // Project configuration.
  grunt.initConfig(config);

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

  // Set the build destination to the example folder
  config.uglify.build.dest = 'example/js/geocharter.min.js'

  // Register the task to build into the example folder
  grunt.registerTask('default', ['uglify']);

};