const map = L.map('map', {
    crs: L.CRS.Simple
});

const bounds = [[0, 0], [1000, 1000]];
const image = L.imageOverlay('../src/img/galaxyspiral.jpg', bounds).addTo(map);

map.fitBounds(bounds);

function onMapClick(e){
    console.log(e.latlng)
}
map.on('click', onMapClick);