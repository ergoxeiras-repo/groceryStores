const button = document.getElementById("button");

button.addEventListener("click", function() {
    navigator.geolocation.getCurrentPosition(function(position) {
        map.jumpTo({ 'center': [position.coords.longitude, position.coords.latitude], 'zoom': 12 });
    });
})

mapboxgl.accessToken = 'pk.eyJ1IjoiY2hyaXN0b3NtaXRvIiwiYSI6ImNra3o1NGliMjBtcngycXAwZXhtbG9vd3IifQ.uLcmxEoU3r9_bSpoPEvG8Q';

let monument = [23.3954645, 38.3107136];

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: monument,
    zoom: 5
});

async function getStores() {
    const res = await fetch("/api/stores");
    const data = await res.json();
    data.stores.forEach(element => {
    
    let popup = new mapboxgl.Popup({ offset: 25 }).setText(element.address);

    let el = document.createElement('div');
    el.id = 'marker';

    new mapboxgl.Marker(el)
        .setLngLat([element.location.coordinates[0], element.location.coordinates[1]])
        .setPopup(popup) // sets a popup on this marker
        .addTo(map);
    });
}
        
getStores();