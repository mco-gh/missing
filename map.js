// Initialize the map centered on Cyprus
const map = L.map('map').setView([35.1264, 33.4299], 10);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const markers = [
    { id: 1, lat: 35.0, lng: 33.0, content: 'foo' },
    { id: 2, lat: 35.2, lng: 33.5, content: 'bar' },
    // Add more markers as needed
];

content = document.createElement('div');
content.id = 'infoPopup';

markers.forEach((markerData) => {
    const marker = L.marker([markerData.lat, markerData.lng]).addTo(map);
    marker.on('click', () => {
        htmx.ajax('GET', `/details/${markerData.id}`, { target: "#infoPopup" });
        marker.bindPopup(content.innerHTML).openPopup();
    });
});
