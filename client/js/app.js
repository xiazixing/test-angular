define('app',["angular","ui_router"],function(angular){
  var app = angular.module("myApp",['ui.router'])
  .config(['$controllerProvider', '$provide',
   function ($controllerProvider, $provide){
     app.register = {
                controller: $controllerProvider.register,//动态注册controller
                factory: $provide.factory//动态注册服务
             }
   }])
   .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
             //默认指向
             $urlRouterProvider.otherwise('/home');

             $stateProvider.state('home', {
                 url: '/home',
                 templateUrl: '../component/home/home.tpl.html',
                 controller: 'HomeController',
                 controllerAs: 'vm',
                 // resolve: {
                 //     deps: loadCtrl(['../component/home/home.ctrl'])
                 // },
                 resolve: {
                        loadCtrl: ['$q',
                            function ($q) {
                                var deferred = $q.defer();
                                //异步加载controller／directive/filter/service
                                require([
                                    '../component/home/home.ctrl'
                                ], function () {
                                    deferred.resolve();
                                });
                                return deferred.promise;
                            }]
                    }


             })
             .state('about', {
                 url: '/about',
                 templateUrl: '../component/about/about.tpl.html',
                 controller: 'AboutController',
                 controllerAs: 'vm',
                 // resolve: {
                 //     deps: loadCtrl(['../component/about/about.ctrl'])
                 // },
                 resolve: {
                        loadCtrl: ['$q',
                            function ($q) {
                                var deferred = $q.defer();
                                //异步加载controller／directive/filter/service
                                require([
                                    '../component/about/about.ctrl'
                                ], function () {
                                    deferred.resolve();
                                });
                                return deferred.promise;
                            }]
                    }
             })
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


  function loadCtrl(path_arr) {
           return ['$q','$rootScope', function ($q,$rootScope) {
               var defered = $q.defer();
               require(path_arr, function () {
                  var defered = $q.defer();
  　　　　　　　　　　　　$rootScope.$apply(function(){
  　　　　　　　　　　　　
  　　　　　　　　　　　　　　deffered.resolve();
  　　　　　　　　　　　　})
               });
               return defered.promise;
           }]
       };
})
