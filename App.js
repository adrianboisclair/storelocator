var app = angular.module("gentrysApp", ["firebase"]);

app.controller("gentrysCtrl",
function($scope, $firebaseObject) {
var ref = new Firebase("https://sizzling-heat-1204.firebaseio.com");

// download the data into a local object
var syncObject = $firebaseObject(ref);

// synchronize the object with a three-way data binding
// click on `index.html` above to see it used in the DOM!
syncObject.$bindTo($scope, "data");

$scope.saveData = function() {
$scope.ref.push({name: $scope})
}

});

// REGISTER DOM ELEMENTS
  var fieldZip = $('#fieldZip');
  var fieldCity = $('#fieldCity');
  var fieldState = $('#fieldState');


//do something
 //$scope.clickAction = function(){ 

 //};

console.log(fieldState);