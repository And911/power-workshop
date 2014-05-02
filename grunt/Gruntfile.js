
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    uglify: {
      build: {
        src: 'index.js',
        dest: 'index.min.js'
      }
    },

    jshint: {
      index: 'index.js'
    },

    cssmin: {
      prod: {
        files: {
          'css/out.min.css': ['css/input_one.css', 'css/input_two.css']
        }
      }
    },

    connect: {
      server: {
        options: {
          keepalive: true,
        }
      }
    }


  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-connect');


  // Default task(s).
  grunt.registerTask('hint', ['jshint']);
  grunt.registerTask('min', ['cssmin']);
  grunt.registerTask('server', ['connect']);
  grunt.registerTask('default', ['uglify', 'cssmin', 'jshint']);

};
