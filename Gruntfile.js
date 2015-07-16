module.exports = function(grunt) {

grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
		dist:{
			src:[
				'js/libs/*.js',
				'js/*.js'
			],
			dest: 'js/build/prod.js'
		}
    },
	uglify: {
		build: {
			src: 'js/build/production.js',
			dest: 'js/build/production.min.js'
		}
	},
	imagemin: {
		dynamic: {
			files: [{
				expand: true,
				cwd: 'tofs/',
				src: ['**/*.{png,jpg,gif}'],
				dest: 'tofs/build/'
			}]
		}
	},
	sass: {
		dist: {
			options: {
				style: 'compressed'
			},
			files: {
				'css/build/main.css': 'css/main.scss'
			}
		} 
	},
	compass: {
		dev: {
			src: 'sass/',
			dest: 'stylesheets/',
			linecomments: true,
			forcecompile: true,
			require: [
			  'animate-sass',
			  'mylib'
			],
			debugsass: true,
			images: 'img/',
			relativeassets: true
		},
		prod: {
			src: 'sass/',
			dest: 'stylesheets/',
			outputstyle: 'compressed',
			linecomments: false,
			forcecompile: true,
			require: [
			  'animate-sass',
			  'mylib'
			],
			debugsass: false,
			images: 'img/',
			relativeassets: true
		}
	},
	watch: {
		options: {
			livereload: true,
		},
		scripts: {
			files: ['js/*.js'],
			tasks: ['concat'],
			options: {
				spawn: false
			}
		},
		css: {
			files: ['sass/*.scss'],
			tasks: ['compass'],
			options: {
				spawn: false,
			}
		}
	}
});

grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-compass');
	
grunt.loadNpmTasks('grunt-contrib-watch');

grunt.registerTask('default', ['watch']);
grunt.registerTask('dev', ['concat']);
grunt.registerTask('prod', ['concat', 'uglify','imagemin']);

};