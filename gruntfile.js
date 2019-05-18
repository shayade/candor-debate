module.exports = function (grunt) {
	grunt.initConfig({
		htmlmin: {
			dist: {
				options: {
					removeComments: true,
					collapseWhitespace: true,
					minifyJS: true, 
					minifyCSS: true,
					removeRedundantAttributes: true,
					removeScriptTypeAttributes: true, 
					decodeEntities: true
				},
				files: [{ 
					src: "routes/**/*.html",
					dest: "dist/",
					expand: true,
					flatten: false, 
					ext: ".html"
				}]
			}
		},
		uglify: {
			files: { 
				src: "routes/**/*.js",
				dest: "dist/",
				expand: true,
				flatten: false, 
				ext: ".min.js"
			}
		},
		cssmin: {
			dist: {
				options: {
					removeComments: true,
					collapseWhitespace: true
				},
				files: [{ 
					src: "routes/**/*.css",
					dest: "dist/",
					expand: true,
					flatten: false,
					ext: ".css"
				}]
			}
		},
		copy: {
			main: {
				files: [{expand: true, src: ["routes/**/static/**"], dest: "dist/"}]
			}
		},
		watch: {
			js:  { files: "routes/**/*.js", tasks: [ "uglify" ] },
			html: { files: "routes/**/*.html", tasks: [ "htmlmin" ]},
			css: { files: "routes/**/*.css", tasks: [ "cssmin" ]},
			img: { files: "routes/**/static/**", tasks: ["copy"]}
		}
	});
	
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-htmlmin");
	grunt.loadNpmTasks("grunt-contrib-cssmin");
	grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.registerTask("default", [ "uglify", "htmlmin", "cssmin", "copy" ]);
};