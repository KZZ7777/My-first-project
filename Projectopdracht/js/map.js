// map script
let map = L.map('map').setView([51.23011, 4.41621], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


let logoIcon = L.icon({
    iconUrl: 'assets/images/logo.png    ',

    iconSize: [90, 20], // size of the icon
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});

L.marker([51.23011, 4.41621], { icon: logoIcon }).addTo(map);






