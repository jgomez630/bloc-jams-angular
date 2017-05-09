 (function() {
    function SongPlayer() {
     var SongPlayer = {};
// var currentSong is used to check if current song playing is != song user clicks on 
     var currentSong = null;
 /**
 * @desc Buzz object audio file
 * @type {Object}
 */       
     var currentBuzzObject = null;
 /**
 * @function setSong
 * @desc Stops currently playing song and loads new audio file as currentBuzzObject
 * @param {Object} song
 */   
  var setSong = function(song) {
    if (currentBuzzObject) {
        currentBuzzObject.stop();
        currentSong.playing = null;
    }
 
    currentBuzzObject = new buzz.sound(song.audioUrl, {
        formats: ['mp3'],
        preload: true
    });
 
    currentSong = song;
 };
      // playSong
  var playSong = function(){
     currentBuzzObject.play();
      song.playing = true;
   }
      
      SongPlayer.play = function(song) {
        if (currentSong !== song) {
          setSong(song);
          /* currentBuzzObject.play(); */
          playSong();
          song.playing = true;      
            
       } else if (currentSong === song) {
         if (currentBuzzObject.isPaused()) {
              /*currentBuzzObject.play(); */
           playSong();
         }
     }        
  
  };
 
   SongPlayer.pause = function(song) {
     currentBuzzObject.pause();
     song.playing = false;
 };      
       return SongPlayer;
}

   
     angular
         .module('blocJams')
         .factory('SongPlayer', SongPlayer);
 })();