var boulderLocations = [
    {
      name:'West End',
      lat: 40.016256, 
      lng: -105.283216
    },
    {
      name:'Enzo',
      lat: 40.018719, 
      lng: -105.279125
    },
];
const name = boulderLocations.find(ele =>{
    return {lat: ele.lat, lng: ele.lng}
})
function initMap() {
    var uluru = {lat: 40.016256, lng: -105.283216};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: name
    });
    var marker = undefined;
    var infowindow = new google.maps.InfoWindow();

    if(boulderLocations.length > 0){
        for(var i = 0; i<boulderLocations.length;i++){
            var obj = {
                lat: boulderLocations[i].lat,
                lng: boulderLocations[i].lng,
                name: boulderLocations[i].name,
            };
            console.log('New Object ',obj);
            var contentString = boulderLocations[i].name;
            
            // var map = new google.maps.Map(document.getElementById('map'), {
            //     zoom: 15,
            //     center: obj
            // });
            // var infowindow = new google.maps.InfoWindow({
            //     content: contentString
            // });
            marker = new google.maps.Marker({
                position: boulderLocations[i],
                map: map,
                title: boulderLocations[i].name
            });
            // marker.addListener('click', function() {
            //     infowindow.setContent('test');
            //     infowindow.open(map, marker);
            // });
            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                  infowindow.setContent(boulderLocations[i].name);
                  infowindow.open(map, marker);
                }
              })(marker, i));
            
        }
    }
}
$("#map").addClass("map");


