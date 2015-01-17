module.exports = function(grunt) {
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		compass: {
			dist: {
				options: {
					sassDir: 'assets/sass',
					cssDir: 'dist/css',
					outputStyle: 'compressed'
				}
			}
		},
		watch: {
			css: {
				files: 'assets/sass/*.scss',
				tasks: ['compass']
			}
		},
		concat: {
			options: {
				separator: ';',
			},
			dist: {
				src: ['assets/scripts/*.js'],
				dest: 'dist/js/built.js',
			},
		},
		uglify: {
			options: {
				mangle: false
			},
			my_target: {
				files: {
					'dist/js/built.min.js': ['js/built.js']
				}
			}
		},
		stencil: {
			main: {
				options: {
					env: {
						title: "Stencil",
					},
					partials: "assets/templates/base",
					templates: "assets/templates"
				},
				files: [{
					expand: true,
					src: 'assets/templates/pages/**/*.dot.html',
                     				dest: 'dist/html',
                     				ext: ".html",
                     				flatten: true
				}]
			}
		}


	});
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-stencil');
	grunt.registerTask('default',['compass','concat','watch']);
}