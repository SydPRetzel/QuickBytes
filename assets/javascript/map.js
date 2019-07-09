function mapInit() {

    // Instantiate the map at the <div> with id "map".
    map = L.map('map', { center: latlon, zoom: 17 });

    // Put a green marker at the user specified lat/lon.
    //code from https://github.com/pointhi/leaflet-color-markers
    var greenIcon = new L.Icon({
        iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });
    L.marker(latlon, { icon: greenIcon }).addTo(map);
    console.log(map);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap' }).addTo(map);
    MQ.trafficLayer().addTo(map);
};
function renderMap() {


    // Creater marker object for all the restaurants.
    var markers = [];
    console.log(markers);

    for (var i = 0; i < restaurantData.results.length; i++) {

        var lat = restaurantData.results[i].latitude;
        var lon = restaurantData.results[i].longitude;
        var name = restaurantData.results[i].name;

        var temp = [lat, lon, name];
        markers.push(temp)
    }
    console.log(markers);

    // Create push pin markers for restaurants.
    var markarr = [];
    //code from https://harrywood.co.uk/maps/examples/leaflet/marker-array.view.html
    for (var i = 0; i < markers.length; i++) {

        var lat = markers[i][0];
        var lon = markers[i][1];
        var popupText = markers[i][2];

        // Add a marker and popup text for each restaurant.
        var markerLocation = new L.LatLng(lat, lon);
        var marker = new L.Marker(markerLocation);
        map.addLayer(marker);
        markarr.push(marker)
        marker.bindPopup(popupText);

    }

    // Adjust map bounds to contain the furthest restaurant.
    var group = new L.featureGroup(markarr);
    map.fitBounds(group.getBounds().pad(0.25));

    // Display the map at the <div>
    $("#map").append(map)
}
mapInit()



