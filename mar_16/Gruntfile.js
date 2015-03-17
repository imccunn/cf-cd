'use strict';

module.exports = function(grunt) {
  
  // Server Tasks
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-jscs');

  //Client/Build Tasks
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.initConfig({

  	jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      dev: {
        src: ['Gruntfile.js', 'test/drones_api_test.js', 'server.js', 'models/**/*.js', 'routes/**/*.js']
      }
    },

    jscs: {
      // src: ['test/drones_api_test.js', 'test/karma_tests/drones_controller_test.js', 'server.js', 'models/**/*.js', 'routes/**/*.js'],
      src: [],
      options: {
        config: '.jscsrc'
      }
    },

    simplemocha: {
      all: {
        src: ['test/drones_api_test.js']
      }
    },

    clean: {
    	build: {
    		src: ['build/']
    	}
    },

    copy: {
    	build: {
    		expand: true,
    		cwd: 'app/',
    		src: '**/*.html',
    		dest: 'build/',
    		flatten: false,
    		filter: 'isFile'
    	}
    },
    browserify: {
    	dev: {
    		src: ['app/js/**/*.js'],
    		dest: 'build/bundle.js'
    	},
	    options: {
	    	transform: ['reactify', 'debowerify']
	    }
	},

	karma: {
		unit: {
			configFile: 'karma.conf.js'
		}
	}
  });
  grunt.registerTask('test', ['jshint', 'jscs', 'simplemocha']);
  grunt.registerTask('default', ['test']);

  grunt.registerTask('build', ['clean', 'browserify', 'copy']);
  grunt.registerTask('build:test', ['browserify:test']);
};
