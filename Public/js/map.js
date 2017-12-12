function initMap() {
    var $xhr = $.getJSON('http://localhost:3001/restaurants');
    $xhr.done(function(data) {
        if ($xhr.status !== 200) {
            return;
        }
        placeCenter ={lat:40.016705,lng: -105.281401}
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 16,
            center: placeCenter,
            styles: styles,
        });
        var marker = undefined;
        var infowindow = new google.maps.InfoWindow();
        if(data.length > 0){
            for(var i = 0; i<data.length;i++){
                var obj = {
                lat:  parseFloat(data[i].lat),
                lng:  parseFloat(data[i].lng),
                name: data[i].name,
            };
            var markerObj = {lat: parseFloat(data[i].lat), lng: parseFloat(data[i].lng)};
            marker = new google.maps.Marker({
                position: markerObj,
                map: map,
                title: data[i].name,
            });
            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                const userId = localStorage.getItem("user");
                    $( document ).ready(function() {
                        $(".mapButton").click(function() {
                            $.ajax({
                                url: `/favorites/`,
                                type: "POST",
                                data: {
                                    restId: data[i].id,
                                    userId: userId,
                                  },
                                success: function(response){
                                    // console.log(response);
                                    $(event.target).closest('.card').remove()
                                },
                            });
                        });
                    });
                    infowindow.setContent('<div id="content">'+
                        '<div id="siteNotice">'+
                        '</div>'+
                        `<img id="mapPopUpImage" class="mapPopUpImage" style="width:250px;"src="${data[i].picture}">`+
                        `<h4 id="firstHeading" class="firstHeading">${data[i].name}</h4>`+
                        '<div id="bodyContent">'+
                        `<p><b>${data[i].name}</b>,${data[i].description} </p>`+
                        `<h5>Happy Hour Menu</h5><p>${data[i].happyHourMenu}</p>`+
                        `<a href="${data[i].url}"><h5>Website</h5></a>`+
                        `<a href="${data[i].phonenumber}">${data[i].phonenumber}</a>`+
                        `</br></br><a href="${data[i].address}">${data[i].address}</a>`+
                        `<button id="mapButton" class="mapButton">Save location</button>`+
                        // `<p class='noshowRestaurant'>${data[i].id}<p>`+
                        '</div>'+
                        '</div>'
                    );
                    infowindow.open(map, marker);
                }
            })(marker, i));

            }
        }
    })
}
