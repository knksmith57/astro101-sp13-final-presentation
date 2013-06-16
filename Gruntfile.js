/* global module:false */
module.exports = function(grunt) {

	// Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		meta: {
			banner:
				'/*!\n' +
				' * reveal.js <%= pkg.version %> (<%= grunt.template.today("yyyy-mm-dd, HH:MM") %>)\n' +
				' * http://lab.hakim.se/reveal-js\n' +
				' * MIT licensed\n' +
				' *\n' +
				' * Copyright (C) 2013 Hakim El Hattab, http://hakim.se\n' +
				' */'
		},

		uglify: {
			options: {
				banner: '<%= meta.banner %>\n',
        separator: ';\n'
			},
      files: {
        src: [ 'lib/js/head.min.js', 'js/reveal.js', 'js/ender.min.js', 'lib/js/classList.js', 'plugin/markdown/marked.js', 'plugin/markdown/markdown.js', 'js/main.js'],
        dest: 'js/reveal.min.js'
      }
		},

		cssmin: {
			compress: {
				files: {
					'css/reveal.min.css': [ 'css/reveal.css', 'css/theme/mars.css' ]
				}
			}
		},

		sass: {
			main: {
				files: {
					'css/theme/mars.css': 'css/theme/source/mars.scss'
				}
			}
		},
    
    imageEmbed: {
      all: {
        options: {
          deleteAfterEncoding: false,
          baseDir: process.cwd(),
          maxImageSize: 0 // remove default IE8 limit
        },
        files: {
          'css/reveal.spa.css': 'css/reveal.min.css',
          'slides.md': 'astro101-sp13-mars-past-final-presentation.md'
        }
      }
    }
	});

	// Dependencies
	grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	grunt.loadNpmTasks( 'grunt-contrib-sass' );
	grunt.loadNpmTasks( 'grunt-image-embed' );

  // Pack everything into a SPA
	grunt.registerTask( 'default', [ 'sass', 'cssmin', 'uglify', 'imageEmbed' ] );
};
