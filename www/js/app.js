angular.module('app', ['ionic'])

.controller('SignController', function ($scope) {
  // get the signature area
  var canvas = document.getElementById('signatureCanvas');
  // make instance
  var signaturePad = new SignaturePad(canvas);

  // to clear the canvas
  $scope.clearCanvas = function () {
    signaturePad.clear();
  };

  // save the last state of canvas
  $scope.saveCanvas = function () {
    var sign = signaturePad.toDataURL();
    $scope.savedSignature = sign;
  };
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
