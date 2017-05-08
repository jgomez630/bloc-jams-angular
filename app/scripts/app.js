/*Providers: are services used by Angular modules to configure behavior*/     
(function() {
     function config($stateProvider, $locationProvider) {
/*$locationProvider: configure the URLs in the browser*/
       $locationProvider
         .html5Mode({
             enabled: true,
             requireBase: false
         });

/*$stateProvider: configures state behavior*/       
      $stateProvider
         .state('landing', {
             url: '/',
            controller: 'LandingCtrl as landing',  
            templateUrl: '/templates/landing.html'
      })
      .state('collection', {
             url: '/collection',
            controller: 'CollectionCtrl as collection',
             templateUrl: '/templates/collection.html'
      })
         .state('album', {
             url: '/album',
            controller: 'AlbumCtrl as album',
             templateUrl: '/templates/album.html'
     });     
    }

/* 'blocJams' is the main Angular root module. The ui-router is an external module injected as a dependency */
  angular
    .module('blocJams',['ui.router'])
/* the config() function makes sure providers(services) are accessible thru out the ng-app*/    
    .config(config);

})();
/*  ui.router is used to display templates "states" when a user navigates 
 to a specific route  */