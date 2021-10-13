/*
 * @Author: DuCongcong
 * @Date: 2021-09-22 22:34:39
 * @Description: 
 */
const webpackDemoConfig = require('./build/webpack.demo.js');

module.exports = function(grunt) {

    grunt.initConfig({
        webpack: {
            demo: webpackDemoConfig,
        }  
    });

    grunt.loadNpmTasks('grunt-webpack');

    grunt.registerTask('dev', 'run examples', ['webpack:demo']);
}

