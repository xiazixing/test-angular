define(['app'], function (app) {
    app.register.controller('HomeController', HomeController);

    HomeController.$inject = ['$scope'];

    function HomeController($scope) {
        console.log("HomeController created successfully!!!");
    }
});
