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
console.log('name log ',name)

function initMap() {
    var uluru = {lat: 40.016256, lng: -105.283216};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: name
    });
    

    
    

    
    if(boulderLocations.length > 0){
        for(var i = 0; i<boulderLocations.length;i++){
            var contentString = boulderLocations[i].name;
            
            // var map = new google.maps.Map(document.getElementById('map'), {
            //     zoom: 15,
            //     center: boulderLocations[i].name
            // });
            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });
            var marker = new google.maps.Marker({
                position: boulderLocations[i],
                map: map,
                title: boulderLocations[i].name
            });
            marker.addListener('click', function() {
                infowindow.open(map, marker);
            });
            
        }
      }
  }
$("#map").addClass("map");


