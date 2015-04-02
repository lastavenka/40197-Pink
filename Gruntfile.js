module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
      
      less: {
          style: {
              files: {
                  "build/css/style.css": ["source/less/style.less"]
              }
          }
      },
      
      autoprefixer: {
        options: {
            browsers: ["last 2 version", "ie 10"]
        },
        style: {
            src: "build/css/style.css"
        }
      },
      
      cmq: {
        style: {
            files: {
                "build/css/style.css": ["build/css/style.css"]
            }
        }
      },
      
      cssmin: {
          style: {
              options: {
                  keepSpecialComments: 0,
                  report: "gzip"
              },
            files: {
                "build/css/style.min.css": ["build/css/style.css"]
                }
          }
      },
      
      csscomb: {
          style: {
              expand: true,
              src: ["less/**/*.less"]
          }
      },
      
      svgstore: {
          options: {
            prefix: "icon-",
            includeTitleElement: false,
            cleanup: [
              "fill",
              "stroke",
              "color",
              "overflow",
              "stroke-width",
              "enable-background"
            ],
            svg: {
              style: "display:none"
            }
          },
          default: {
            files: {
              "img/_all-svg-icons.svg": ["img/icons/*.svg"],
            },
          },
        },
      
      imagemin: {
        images: {
          options: {
            optimizationLevel: 3,
          },
          files: [{ 
            expand: true,
              src: ["build/img/**/*.{png,jpg,gif,svg}"]
          }]
        }
      },
      
      htmlmin: {
        options: {
            removeComments: true,
            collapseWhitespace: true,
            collapseBooleanAttributes: true,
            caseSensitive: true,
            keepClosingSlash: true
      },
          html: {
              files: { 
                "build/index.min.html": "build/index.html",
              }
          }
    },
      
      svgmin: {
        options: {
            plugins: [
                {
                    removeViewBox: false
                }, {
                    removeUselessStrokeAndFill: false
                }
            ]
        },
        files: {
            expand: true,
            src: ["build/img/**/*.svg"]
        }
    },
      
      copy: {
        build: {
          files: [{
              expand: true,
              cwd: "source",
              src: [
                  "img/**",
                  "js/**",
                  "index.html",
                  "bower_components"
              ],
              dest: "build"
          }]
        }
    },
      
      clean: {
        build: ["build"]
      }
  });
    
    require('load-grunt-tasks')(grunt);
    grunt.registerTask("build", [
        "clean",
        "copy",
        "less",
        "autoprefixer",
        "cmq",
        "cssmin",
        "imagemin",
        "htmlmin",
        "svgstore",
        "svgmin"
    ]);
};
