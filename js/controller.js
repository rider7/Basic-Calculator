angular.module('myApp')
.controller('mainCtrl', function($scope){

//Functional
  $scope.output = ''
  $scope.click = function(btn){
          $scope.output += String(btn);
  }
  $scope.clickAdd = function(btn){
        $scope.output += String(btn);
  }
  $scope.clickSub = function(btn){
        $scope.output += String(btn);
  }
  $scope.clickMult = function(btn){
        $scope.output += String(btn);
  }
  $scope.clickDiv = function(btn){
        $scope.output += String(btn);
  }
  $scope.clickDecimal = function(btn){
        $scope.output += String(btn);
  }
  $scope.clickCalc = function(){
    $scope.output = eval($scope.output)
  }
  $scope.clear = function(){
    $scope.output = '';
  }
  $scope.clickPercent = function(){
    $scope.output = Number($scope.output)/100;
  }
  $scope.clickNeg = function(){
    $scope.output = Number($scope.output)*-1;
  }

  //TEST
  //   var expression = [];
  //   // if(expression === []){
  //   //
  //   // }
  //   $scope.output = expression;
  //
  //
  // $scope.click = function(btn){
  //     expression.push(btn)
  // }
  // console.log(expression)
  //
  // $scope.clickAdd = function(btn){
  //       expression.push(btn);
  // }
  // $scope.clickSub = function(btn){
  //       expression.push(btn);
  // }
  // $scope.clickMult = function(btn){
  //       expression.push(btn);
  // }
  // $scope.clickDiv = function(btn){
  //       expression.push(btn);
  // }
  // $scope.clear = function(){
  //   expression = []
  // }
  // $scope.clickCalc = function(){
  //   var a = expression[0];
  //   var b = expression[2];
  //   var operator = expression[1];
  // if(operator === ' + '){
  //   $scope.output = a + b;
  //   return $scope.output
  // }
  // if(operator === ' - '){
  //   $scope.output = a - b;
  //   return $scope.output
  // }
  // if(operator === ' / '){
  //   $scope.output = a / b;
  //   return $scope.output
  // }
  // if(operator === ' * '){
  //   $scope.output = a * b;
  //   return $scope.output
  // }
  // }
})
