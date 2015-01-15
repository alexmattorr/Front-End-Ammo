module.exports = function(grunt) {
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		compass: {
			dist: {
				options: {
					sassDir: 'sass',
					cssDir: 'css',
					outputStyle: 'compressed'
				}
			}
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['compass']
			}
		},
		concat: {
			options: {
				separator: ';',
			},
			dist: {
				src: ['js/scripts/*.js'],
				dest: 'js/built.js',
			},
		},
		uglify: {
			options: {
				mangle: false
			},
			my_target: {
				files: {
					'js/built.min.js': ['js/built.js']
				}
			}
		}

	});
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['compass','concat','watch']);
}