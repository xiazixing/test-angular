define(['app'], function (app) {

  app.register.controller('myCtrl',['$scope',function($scope){
    $scope.value='你好';
    console.log("myCtrl created successfully!!!");
  }]);


  myCtrl.$inject = ['$scope'];

  function myCtrl($scope) {
      $scope.value='你好';
      console.log("myCtrl created successfully!!!");
  }


app.register.directive('myDirective', function(){
  return{
        restrict:"E",
        template: '<h3>Hello World</h3>' ,
        scope : false,
    };
});

});
