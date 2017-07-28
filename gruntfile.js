module.exports = function(grunt){
  grunt.initConfig({
    	watch:{
        sass:{
          files: ['css/*.scss'],
          tasks: ['sass']
        },
        options:{
          livereload:true
        }
      },
      sass: {
          // options: {
          //   title:'jakis tytul',
          //   message: 'jakas wiadomosc'
          // },
          dist: {
            files: [{
              expand: true,
              cwd: 'css/', //gdzie szukac
              src: ['*.scss'],//co szukac
              dest: 'css/',//gdzie zapisac
              ext: '.css'//z jakim skrotem
            }]
          }
        },
  });
  
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-sass');
  
  
}