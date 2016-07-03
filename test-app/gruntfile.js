module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    paths: ["./client/less/"],
                    yuicompress: true
                },
                files: {
                    "./client/css/all.css": "./client/less/*.less"
                }
            }
        },
		autoprefixer: {
            dist: {
                files: {
                    './client/build/css/style.css': './client/css/all.css'
                }
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: './client/css',
                    src: ['*.css', '!*.min.css'],
                    dest: './client/css/min',
                    ext: '.min.css'
                }]
            }
        },
        watch: {
            files: "./client/less/*",
            tasks: ["less"]
        },
		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: './public/images/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'client/images/build/'
				}]
			}
		}
    });
	
	grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.registerTask('default', ['watch','imagemin']);
    grunt.registerTask('compile', [
        'less',
        'autoprefixer',
        'cssmin',
        'imagemin'

    ]);
};