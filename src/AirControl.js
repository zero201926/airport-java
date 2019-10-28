function Airport() {
  Airport.prototype.initialize = function(weather = new Weather){
    var weather = weather
    let plane_storage = []
  };
  Airport.prototype.take_off = function(plane_id){
    if(stormy? == true){
      throw new Error('BAD WEATHER, ALL PLANES GROUNDED');
    }
    plane_storage = []
  }
  Airport.prototype.land = function(plane_id){
    if(stormy? == true){
      throw new Error('BAD WEATHER, NO LANDING');
    }
    plane_storage.push(plane_id)
  }
  Airport.prototype.plane_status = function(plane_id){
    plane_storage.includes(plane_id);
  }
  Airport.prototype.stormy? = function(){
    weather.condition == 'stormy';
  }
}


Player.prototype.makeFavorite = function() {
  this.currentlyPlayingSong.persistFavoriteStatus(true);
};
