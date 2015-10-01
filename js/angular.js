// sample angular code

var app = angular.module('myApp', []);

app.controller('myController', function($scope) {
  $scope.generatePassword = function(){
    $scope.show = true;
    var passwordLength = $scope.passwordLength;
    var password = [];
    for (var i = 0; i < passwordLength; i++) {
      var index = Math.ceil(Math.random() * options.length);
      password.push(options[index]);
    }
    $scope.password = password.join().replace(/,/g , "");
  };
});



var options = ['a','b','c','d', 'e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', 'A','B','C','D', 'E', 'F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',0,1,2,3,4,5,6,7,8,9,'!','@','#','$','%','&','*','+','=','~'];
