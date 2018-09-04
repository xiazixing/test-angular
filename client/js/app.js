define('app',["angular","ui_router"],function(angular){
  var app = angular.module("myApp",['ui.router'])
  .config(['$controllerProvider','$compileProvider','$filterProvider','$provide',
   function ($controllerProvider,$compileProvider,$filterProvider,$provide){
     app.register = {
                controller: $controllerProvider.register,//动态注册controller
                directive:$compileProvider.directive,//动态注册指令
                filter: $filterProvider.register,//动态注册过滤器
                factory: $provide.factory,//动态注册服务
                service:$provide.service//动态注册服务
             };
             app.asyncjs = function (js) {
               return ["$q", "$rootScope", function ($q, $rootScope) {
                   var deferred = $q.defer();
                   var dependencies = js;
                   if (Array.isArray(dependencies)) {
                       for (var i = 0; i < dependencies.length; i++) {
                           dependencies[i]=dependencies[i];
                       }
                   } else {
                       dependencies = dependencies;//v是版本号
                   }
                   // $script(dependencies, function () {
                   require(dependencies, function () {
                       $rootScope.$apply(function () {
                           deferred.resolve();
                       });
                   });
                   return deferred.promise;
               }];
           };
   }])
   .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
             //默认指向
             $urlRouterProvider.otherwise('/home');

             $stateProvider.state('home', {
                 url: '/home',
                 templateUrl: '../component/home/home.tpl.html',
                 controller: 'HomeController',
                 controllerAs: 'vm',
                 resolve:{
                   load:app.asyncjs(['../component/home/home.ctrl','../../component/home/a'])
                 }
             })
             .state('edit', {
                 url: '/edit',
                 templateUrl: '../component/edit/edit.tpl.html',
                 controller: 'EditController',
                 controllerAs: 'vm',
                 resolve:{
                   load:app.asyncjs(['../component/edit/edit.ctrl'])
                 }
             })
             .state('about', {
                 url: '/about',
                 templateUrl: '../component/about/about.tpl.html',
                 controller: 'AboutController',
                 controllerAs: 'vm',
                 resolve:{
                   load:app.asyncjs(['../component/about/about.ctrl'])
                 }
             });
             // .state('contact', {
             //     url: '/contact',
             //     templateUrl: './components/contact/contact.tpl.html',
             //     controller: 'ContactController',
             //     controllerAs: 'vm',
             //     resolve: {
             //         deps: loadCtrl(['./components/contact/contact.controller'])
             //     }
             // })

         }]);
  return app;


//   function loadCtrl(path_arr) {
//            return ['$q','$rootScope', function ($q,$rootScope) {
//                var defered = $q.defer();
//                require(path_arr, function () {
//                   var defered = $q.defer();
//   　　　　　　　　　　　　$rootScope.$apply(function(){
//
//   　　　　　　　　　　　　　　deffered.resolve();
//                   });
//                });
//                return defered.promise;
//            }];
//        }
//        
});
