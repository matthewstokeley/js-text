module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: [
                    'src/init.js',
                    'src/camel-case-to-hyphen.js',
                    'src/hyphen-to-camel-case.js',
                    'src/hyphen-to-space.js',
                    'src/is-character-upper-case.js',
                    'src/lower-case-words.js',
                    'src/remove-double-space.js',
                    'src/remove-space.js',
                    'src/space-to-hyphen.js',
                    'src/upper-case-words.js'
                ],
                dest: 'dist/<%= pkg.name %>.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },
        jshint: {
            options: {
              curly: true,
              eqeqeq: true, 
              eqnull: true,
              browser: true,
              reporter: 'jslint',
              reporterOutput: 'reports/jshint.xml',
              globals: {
                  jQuery: true
              },
            },
            all: ['src/**/*.js']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    
    grunt.registerTask('build-js', ['jshint', 'concat', 'uglify']);
    grunt.registerTask('build', ['build-js']);
};