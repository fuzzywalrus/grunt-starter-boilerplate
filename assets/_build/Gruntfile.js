module.exports = function(grunt) {

	require("load-grunt-tasks")(grunt);

	var config = {
		localProxy : "project.lvh.me", //your local url
		baseDir : ".", // working dir
	}

	// Project configuration.
	grunt.initConfig({

		//Read the package.json (optional)
		pkg: grunt.file.readJSON('package.json'),


		//triggered on saves
		watch: {
			sass : {
				files: ['../scss/**/*'],
				tasks: ["sass","autoprefixer","cssmin"]
			},
			gruntfile: {
					files: ["Gruntfile.js"]
			},
			js : {
				files: ['../js/vendor/**/*', '../js/components/**/*'],
				tasks : ["jshint","jscs","uglify"]
			}
		},
		uglify: {
			dist: {
				files: [{
					src: ['../js/components/**/*'],
					dest: '../js/app.js'
				}]
			},
			options: {
				mangle: false,
				beautify: true
			}
		},
		// docs http://jshint.com/docs/options/
		jshint: {
			dev : {
				files : {
					src : ["../js/components/application.js"]
				},
				options : {
					strict: true
				}
			}
		},

		// docs http://jscs.info/rules.html
		jscs: {
			src: "../js/components/application.js",
			options: {
				config: ".jscs.json",
				requireCurlyBraces: [ "if" ]
			}
		},

		sass: {
			dist: {
				files: {
					'../css/app.css' : '../scss/app.scss'
				}
			}
		},
		//docs https://github.com/nDmitry/grunt-autoprefixer
		autoprefixer: {
			options: {
				browsers: ["last 2 version", "ie 8", "ie 9", "FireFox > 4", "Safari > 3"]
			},
			dist: {
				files: [{
					src: "../css/app.css",
					dest: "../css/app.prefixed.css"
				}]
			}
		},
		// take autoprefixer css and minify
		cssmin: {
			options: {
				sourceMap: true
			},
			minify: {
				src: "../css/app.prefixed.css",
				dest: "../css/app.min.css"
			}
		},

		//docs http://www.browsersync.io/docs/grunt/
		browserSync: {
			dev: {
				// Options passed to Chokidar
				watchOptions: {
				    ignoreInitial: true,
				    ignored: '*.map'
				},

				// options for chokidar with custom callback
				// since 2.6.0
				files: [
				    {
				        match: ["**/*.map"],
				        fn: function (event, file) {
				            /** Custom event handler **/
				        },
				        options: {
				            ignored: '*.map'
				        }
				    }
				],
				bsFiles: {
					src : [
						"../css/**/*.css",
						"../css/**/*.map",
						"../images/**/*.jpg",
						"../images/**/**/*.png",
						"../js/**/*.js",
						"**/*.php",
						"**/*.html"
					]
				},
				options: {
					watchTask: true,
					proxy: config.localProxy, // uncomment me if using local environment/server
					/* uncomment me if using static/local
					server: {
						baseDir: config.baseDir
					}
					*/
				}
			}
		} // browserSync

	});
	require('time-grunt')(grunt);
	grunt.loadNpmTasks('grunt-newer');
	// Default tasks (runs them all at start to catch any updates from version control)
	grunt.registerTask("default", ["browserSync","watch"]);
	
};