define(['app'], function (app) {
    app.register.controller('AboutController', AboutController);

    AboutController.$inject = ['$scope'];

    function AboutController($scope) {
        console.log("AboutController created successfully!!!");
    }
})
