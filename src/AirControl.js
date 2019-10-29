// function Airport() {
//   Airport.prototype.initialize = function(weather = new Weather){
//     var weather = weather
//     let plane_storage = []
//   };
//   Airport.prototype.take_off = function(plane_id){
//     if(stormy()){
//       throw new Error('BAD WEATHER, ALL PLANES GROUNDED');
//     }
//     plane_storage = []
//   }
//   Airport.prototype.land = function(plane_id){
//     if(stormy()){
//       throw new Error('BAD WEATHER, NO LANDING');
//     }
//     plane_storage.push(plane_id)
//   }
//   Airport.prototype.plane_status = function(plane_id){
//     plane_storage.includes(plane_id);
//   }
//   Airport.prototype.stormy = function(){
//     weather == 'stormy';
//   }
// }
'use strict';

function Airport(weather){
  this._weather = typeof weather !== 'undefined' ? weather : new Weather();
  this._hangar = [];
//   this.planes = function(){
//     return hanger;
//   }
//   this.clearForLanding = function(plane) {
//     if(this.isStormy()) {
//       throw new Error('cannot land during storm');
//     }
//     hanger.push(plane);
//   };
//   this.clearForTakeOff = function(plane){
//     if(this.isStormy()) {
//       throw new Error('cannot takeoff during storm');
//     }
//     hanger = [];
//   };
//   this.isStormy = function(){
//     return false;
//   };
}

Airport.prototype.planes = function(){ return this._hangar; };
Airport.prototype.clearForLanding = function(plane) {
  if(this._weather.isStormy()) {
    throw new Error('cannot land during storm');
  }
  this._hangar.push(plane);
};
Airport.prototype.clearForTakeOff = function(plane) {
  if(this._weather.isStormy()) {
    throw new Error('cannot takeoff during storm');
  }
  this._hangar = [];
};
