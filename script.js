window.onload = function(){

    L.mapquest.key = 'API_KEY'; 

    const map = L.mapquest.map('map', {
    center: [37.7749, -122.4194],
    layers: L.mapquest.tileLayer('map'),
    zoom: 12
    });

    map.addControl(L.mapquest.control({ position: "bottomright" }));

    // //map.addControl(L.mapquest.control());


     L.marker([53.480759, -2.242631], {
            icon: L.mapquest.icons.marker({
            primaryColor: '#22407F',
            secondaryColor: '#3B5998',
            shadow: true,
            size: 'md',
            symbol: 'A'
            })
    })
    .bindPopup('This is Manchester!')
    .addTo(map);
    L.mapquest.geocodingControl().addTo(map);

}

