// describe("Airport", function() {
//   let airport = null
//   let weather = null
//   let plane = null
//   beforeEach(function() {
//   airport = new Airport(weather);
//   // weather = new Weather();
//   plane = jasmine.createSpyObj('plane', ["8457"]);
//   airport.plane_storage.push(plane);
//   weather = jasmine.createSpyObj('weather', ['good']);
// });
//   it('instructs a plane to land at an airport.', function() {
//     airport.land(plane);
//     expect(airport.plane_storage).toContain(plane);
//   });
//     //weather = double(:weather, :condition => 'good')
//   it('intructs plane to take off from an airport.', function() {
//     airport.plane_storage.push(plane);
//     airport.take_off(plane);
//     expect(airport.plane_storage).not.toContain(plane);
//   });
//
//   it('confirm a plane that has taken off is no longer at the airport.', function() {
//     airport.take_off(plane);
//     expect(airport.plane_status(plane)).toEqual(false)
//   });
  /*
  it('prevents the landing of a plane when the airport is full.', function() {
    airport.capacity.times { airport.plane_storage << plane }
  })

    expect { airport.land(plane) }.to raise_error("Airport is at max capacity!!!ABORT!")
  end
*/
  // it('prevents takeoff when weather is stormy', function() {
  //   weather = jasmine.createSpyObj("weather", ['stormy']);
  //   airport = new Airport(weather);
  //   expect(function(){ airport.take_off(plane); }).toThrowError("BAD WEATHER, ALL PLANES GROUNDED");
  // });
  // it('prevents landing when weather is stormy', function() {
  //   weather = jasmine.createSpyObj("weather", ['stormy']);
  //   airport = new Airport(weather);
  //   expect(function(){ airport.land(plane); }).toThrowError("BAD WEATHER, NO LANDING");
  // });
  /*
  it('default airport capacity that can be overridden as appropriate', function() {
    airport = new Airport(50, weather);
  })
    airport.capacity.times { airport.plane_storage << plane }
    expect { airport.land(plane) }.to raise_error("Airport is at max capacity!!!ABORT!")
  end
end
*/
// });
'use strict';

describe('Airport', function(){
  var airport;
  var plane;
  var weather;

  beforeEach(function(){
    plane = jasmine.createSpy('plane');
    weather = jasmine.createSpyObj('weather', ['isStormy']);
    airport = new Airport(weather);
  });

  it('has no planes by default', function(){
    expect(airport.planes()).toEqual([]);
  });

  describe('under normal conditions',function(){
    beforeEach(function(){
      weather.isStormy.and.returnValue(false);
    });
    it('can clear planes for landing', function(){
      airport.clearForLanding(plane);
      expect(airport.planes()).toEqual([plane]);
    });
    it('can clear planes for takeoff', function(){
      airport.clearForLanding(plane);
      airport.clearForTakeOff(plane);
      expect(airport.planes()).toEqual([]);
    });
  });

  describe('under stormy conditions',function(){
    beforeEach(function(){
      weather.isStormy.and.returnValue(true);
    });
    it('does not clear planes for landing', function(){
      expect(function(){ airport.clearForLanding(plane); }).toThrowError('cannot land during storm');
    });
    it('does not clear planes for takeoff', function(){
      expect(function(){ airport.clearForTakeOff(plane); }).toThrowError('cannot takeoff during storm');
    });
  });
});
