//Register a Fixtures service using the Factory recipe

(function() {
     function Fixtures() {
         var Fixtures = {};
         return Fixtures;
     }
 
     angular
         .module('blocJams')
         .factory('Fixtures', Fixtures);
 })();