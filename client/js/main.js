// var requirejs = require('requirejs');

require.config({
  baseUrl: "js",
  waitSeconds: 15,
  map: {
    '*': {
      'css': '../libs/r-css'
    }
  },
        paths: {
            'angular': '../libs/angular/angular',
            'angular-route': '../libs/angular-route/angular-route',
            'ui_router':'../libs/angular-ui-router/release/angular-ui-router.min',
            'jquery':'../libs/jquery.min',
            'flat-ui':'../libs/flat-ui',
            'popper':'../libs/popper.js/dist/umd/popper.min',
            'codemirror':'../libs/codemirror/lib/codemirror',
            'code-active-line':'../libs/codemirror/addon/selection/active-line'
        },
        shim:{
          'angular':{
            exports:'angular'
          },
          'angular-route':{
            exports:'angular-route',
            deps:['angular']
          },
          'jquery':{
            exports:'jquery'
          },
          'popper':{
            exports:'popper.js'
          },
          'flat-ui':{
            exports:'flat-ui',
            deps:['jquery','popper']
          },
          // 'code-active-line':{
          //   // exports:'code-active-line',
          //   deps:['codemirror']
          // },
          // 'codemirror':{
          //   exports:'codemirror',
          //
          // },

        },
    urlArgs: "bust=" +  (new Date()).getTime(),
    nodeRequire: require
});

require(['app','css!../css/bootstrap.min','css!../css/flat-ui.min','css!../css/style','flat-ui'],function(app){
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
