// var requirejs = require('requirejs');

require.config({
  baseUrl: "js",
  waitSeconds: 15,
  map: {
    '*': {
      'css': '../js/r-css'
    }
  },
        paths: {
            'angular': '../libs/angular/angular',
            'angular-route': '../libs/angular-route/angular-route',
            'ui_router':'../libs/angular-ui-router/release/angular-ui-router.min'
        },
        shim:{
          'angular':{
            exports:'angular'
          },
          'angular-route':{
            exports:'angular-route',
            deps:['angular']
          },

        },
    urlArgs: "bust=" +  (new Date()).getTime(),
    nodeRequire: require
});

require(['app','css!../css/style.css'],function(app){
  // angular.element(document).ready(function(){
  //   angular.bootstrap(document,[app.name]);
  // });
});

// define(["app"],function(app){
//   app.controller('myCtrl',function(){
//       console.log('sfsdf') ;
//     });
// });

// require(['app'],function(app){
//   app.controller('myCtrl',function(){
//     console.log('sfsdf') ;
//   })
// });
