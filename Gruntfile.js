module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    


    //MINIFY CSS
    cssmin: {
      minify: {
        options: {
          banner: '/* CSS for <%= pkg.name %> v<%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        expand: true,
        cwd: 'build/css/',
        src: ['*.css','!*.min.css'],
        dest: 'build/css/',
        ext: '.min.css'
      }
    },

    
    //COMPILE SASS FILES INTO CSS FOR TESTING
    sass: {
      dist: {
        options: {
          lineNumbers: true,
          sourcemap: true,
          noCache: true,
          banner: '/* CSS for <%= pkg.name %> v<%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        files: [
          {
            src: ['sass/app.sass','!src/sass/_*.sass'],
            dest: 'build/css/<%= pkg.name %>.css'
          },
          {
            src: ['sass/icons.sass','!src/sass/_*.sass'],
            dest: 'build/css/icons.css'
          }
        ]
      }
    },



    //MINIFY ALL JS FILES INTO A SINGLE COMPRESSED MIN FILE
    uglify: {
      options: {
        sourceMap: true,
            banner: '/*! <%= pkg.name %> v<%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'js/*.js',
        dest: 'build/js/<%= pkg.name %>.min.js'
      }
    },

    
    //CONCAT ALL JS FILES INTO A SINGLE PUBLISHABLE FILE
    concat: {
      options: {
        stripBanners: true,
        banner: '/*! <%= pkg.name %> v<%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n' + "'use strict';\n",
        process: function(src, filepath) {
          return '\n// Source: ' + filepath + '\n' + src.replace(/(|\n)[ \t]('use strict'|"use strict");?\s/g, '$1');
        },
      },
      dist: {
        src: 'js/*.js',
        dest: 'build/js/<%= pkg.name %>.js',
      },
    },


    
    
    //WATCH FOR CHANGES TO FILES AND PERFORM PROPER ACTIONS
    watch: {
      css: {  //if sass changes, compile and minify
        files: 'sass/*.sass',
        tasks: ['sass','cssmin']
      },
      js: {  //if javascript changes, compile, minify, and run unit tests
        files: 'js/*.js',
        tasks: ['concat','uglify']
      },
    }
  });

  //LOAD GRUNT MODULES
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  //LAUNCHING "grunt" BY ITSELF WILL TRIGGER AUTO-COMPILE WATCH FUNCTIONALITY
  grunt.registerTask('default', ['watch']);
};
