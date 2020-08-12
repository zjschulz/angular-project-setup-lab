function MainController($scope) {
    $scope.name = 'Zachary Schulz';
  }

angular
.module('app')
.controller('MainController', MainController);  