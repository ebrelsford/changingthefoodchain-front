module.exports = function(grunt) {
    grunt.initConfig({
        browserify: {
            standalone: {
                options: {
                    watch: true
                },
                src: ['js/main.js'],
                dest: 'js/bundle.js'
            },
            embed: {
                options: {
                    watch: true
                },
                src: 'js/embed.js',
                dest: 'js/embedbundle.js'
            }
        },

        connect: {
            server: {
                options: {
                    port: 8080
                }
            }
        },

        copy: {
            development: {
                files: [{
                    src: 'config/development.js',
                    dest: 'config/config.js'
                }]
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

        ember_i18n_precompile: {
            english: {
                files: {
                    'translations/en.js': 'translations/en/*.js'
                }
            },
            spanish: {
                files: {
                    'translations/es.js': 'translations/es/*.js'
                }
            }
        },

        emberTemplates: {
            compile: {
                files: {
                    "templates/templates.js": "templates/**/*.hbs"
                },
                options: {
                    templateBasePath: /templates\//
                }
            }
        },

        watch: {
            copy: {
                files: ['config/development.js'],
                tasks: ['copy:development']
            },

            less: {
                files: ["css/*.less", "css/*/*.less"],
                tasks: ["less", "cssmin"]
            },

            ember_i18n_precompile: {
                files: ["translations/*/*.js"],
                tasks: ['ember_i18n_precompile']
            },

            emberTemplates: {
                files: ["templates/**/*.hbs"],
                tasks: ['emberTemplates']
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-ember-i18n-precompile');
    grunt.loadNpmTasks('grunt-ember-templates');

    grunt.registerTask("dev", ["browserify", "connect", "watch"]);
};
