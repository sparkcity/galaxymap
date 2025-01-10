const map = L.map('map', {
    crs: L.CRS.Simple
});

const bounds = [[0, 0], [1000, 1000]];
const image = L.imageOverlay('../src/img/galaxy1.webp', bounds).addTo(map);

map.fitBounds(bounds);