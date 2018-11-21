module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      uglify: {
        options: {
          banner: '/*! <%= pkg.name %> <%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> by <%= pkg.author %>*/\n'
        },
        build: {
          src: 'src/<%= pkg.name %>.js',
          dest: 'build/<%= pkg.name %>.min.js'
        }
      }
    });
  
    // Plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
    // Tasks
    grunt.registerTask('default', 'build');
    grunt.registerTask('build', ['uglify']);
  
  };