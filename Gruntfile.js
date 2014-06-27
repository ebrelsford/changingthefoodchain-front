module.exports = function(grunt) {
    grunt.initConfig({
        browserify: {
            standalone: {
                src: ['js/main.js'],
                dest: 'js/bundle.js'
            }
        },

        cssmin: {
            minify: {
                src: 'css/style.css',
                dest: 'css/style.min.css'
            }
        },

        less: {
            development: {
                options: {
                    paths: ["css"],
                    yuicompress: true
                },
                files: {
                    "css/style.css": "css/style.less"
                }
            }
        },

        emberTemplates: {
            compile: {
                files: {
                    "templates/templates.js" : "templates/*.hbs"
                },
                options: {
                    templateBasePath: /templates\//
                }
            }
        },

        watch: {
            browserify: {
                files: ["js/*.js", '!js/bundle.js'],
                tasks: ["browserify"]
            },

            less: {
                files: ["css/*.less", "css/*/*.less"],
                tasks: ["less", "cssmin"]
            },

            emberTemplates: {
                files: ["templates/*.hbs"],
                tasks: ['emberTemplates']
            }

        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-ember-templates');
};
