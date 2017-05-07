// The "LandingCtrl" controller is defined
(function() {
// object contructor function for LandingCtrl controller      
  function LandingCtrl() {
    this.heroTitle = "Turn the Music Up!";   
  }
 
     angular
         .module('blocJams')
//2 args are passed in: (1)controller name (2) callback function
         .controller('LandingCtrl', LandingCtrl);
 })();