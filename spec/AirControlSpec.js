describe("Airport", function() {

  var airport;
  var weather;
  beforeEach(function() {
  airport = new Airport(20, weather);
  // weather = new Weather();
  plane = jasmine.createSpyObj('plane', ["8457"]);
  airport.plane_storage.push(plane);
  weather = jasmine.createSpyObj('weather', ["condition": 'good']);
});
  it('instructs a plane to land at an airport.', function() {
    airport.land(plane);
    expect(airport.plane_storage).toContain(plane);
  });
    //weather = double(:weather, :condition => 'good')
  it('intructs plane to take off from an airport.', function() {
    airport.plane_storage.push(plane);
    airport.take_off(plane);
    expect(airport.plane_storage).not.toContain(plane);
  });

  it('confirm a plane that has taken off is no longer at the airport.', function() {
    airport.take_off(plane);
    expect(airport.plane_status(plane);).toEqual(false)
  });
  /*
  it('prevents the landing of a plane when the airport is full.', function() {
    airport.capacity.times { airport.plane_storage << plane }
  })

    expect { airport.land(plane) }.to raise_error("Airport is at max capacity!!!ABORT!")
  end
*/
  it('prevents takeoff when weather is stormy', function() {
    weather = jasmine.createSpyObj("weather", ["condition": 'stormy']);
    airport = new Airport(20, weather);
    expect(function(){ airport.take_off(plane); }).toThrowError("BAD WEATHER, ALL PLANES GROUNDED");
  });
  it('prevents landing when weather is stormy', function() {
    weather = jasmine.createSpyObj("weather", ["condition": 'stormy']);
    airport = new Airport(20, weather);
    expect(function(){ airport.land(plane); }).toThrowError("BAD WEATHER, NO LANDING");
  });
  /*
  it('default airport capacity that can be overridden as appropriate', function() {
    airport = new Airport(50, weather);
  })
    airport.capacity.times { airport.plane_storage << plane }
    expect { airport.land(plane) }.to raise_error("Airport is at max capacity!!!ABORT!")
  end
end
*/
});
