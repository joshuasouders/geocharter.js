module.exports = function(grunt) {
  var config = {
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: ['Gruntfile.js', 'js/*.js', 'js/views/*.js']
    },
    concat: {
      dist: {
        src: ['js/panel.js', 'js/chart.js', 'js/piechart.js', 'js/barchart.js'],
        dest: 'build/geocharter.js',
      },
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'build/geocharter.js',
        dest: 'build/geocharter.min.js'
      }
    },
    copy: {
      main: {
        flatten: true,
        expand: true,
        src: 'build/*.js',
        dest: 'example/scripts/'
      },
    },
  };

  grunt.initConfig(config);

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'copy']);

};