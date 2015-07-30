function initialize() {
        var mapOptions = {
          center: { lat: 49.1, lng: -122.969129},
          zoom: 10
        };
        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
      }
      google.maps.event.addDomListener(window, 'load', initialize);