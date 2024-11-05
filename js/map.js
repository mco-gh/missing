// Initialize the map centered on Cyprus
const map = L.map('map').setView([35.1264, 33.4299], 10);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const markers = [
    { lat: 35.0, lng: 33.0, id: 1 },
    { lat: 35.2, lng: 33.5, id: 2 },
    // Add more markers as needed
];

markers.forEach((markerData) => {
    const marker = L.marker([markerData.lat, markerData.lng]).addTo(map);
    marker.on('mouseover', () => {
        htmx.ajax('GET', `/details/${markerData.id}`, { target: "#infoPopup" });
        document.getElementById('infoPopup').classList.remove('hidden');
    });
    marker.on('mouseout', () => {
        document.getElementById('infoPopup').classList.add('hidden');
    });
});
