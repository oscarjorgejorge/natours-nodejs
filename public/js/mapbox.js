/* eslint-disable */

export const displayMap = locations => {
    mapboxgl.accessToken =
        'pk.eyJ1Ijoib3NjYXJqb3JnZSIsImEiOiJjazh2bGUyaTgwMjViM21xamF4YzM2Y3RoIn0.-YPMlsW37txSJ3J01UQU9w';

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/oscarjorge/ck8vlk33u24uv1iub1h7rss6g',
        scrollZoom: false
            // center: [-118.113, 34.111],
            // zoom: 6,
            // interactive: false
    });

    const bounds = new mapboxgl.LngLatBounds();

    locations.forEach(loc => {
        // Create marker
        const el = document.createElement('div');
        el.className = 'marker';

        // Add marker
        new mapboxgl.Marker({
                element: el,
                anchor: 'bottom'
            })
            .setLngLat(loc.coordinates)
            .addTo(map);

        // Add popup
        new mapboxgl.Popup({
                offset: 30
            })
            .setLngLat(loc.coordinates)
            .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
            .addTo(map);

        // Extend map bounds to include current location
        bounds.extend(loc.coordinates);
    });

    map.fitBounds(bounds, {
        padding: {
            top: 200,
            bottom: 150,
            left: 100,
            right: 100
        }
    });
};