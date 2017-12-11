var boulderLocations = [
    {
      name:'West End',
      description: 'The Town of Carbondale is a Home Rule Municipality in Garfield County, Colorado, United States. The town population was 6427 at the 2010 United States Census. The town is located in the Roaring Fork Valley, downstream from Aspen',
      lat: 40.016256, 
      lng: -105.283216
    },
    {
      name:'Enzo',
      description: 'Roaring Fork River at Glenwood Springs. The town proper sits on the south bank of the river, at the confluence of the Crystal River. Carbondales horizon is dominated by the 12,953 ft (3,952 m) tall Mount Sopris several miles to the south of town.',
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
                title: boulderLocations[i].name,
            });
            // marker.addListener('click', function() {
            //     infowindow.setContent('test');
            //     infowindow.open(map, marker);
            // });
            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                  infowindow.setContent(`${boulderLocations[i].name}
                <button>Save location</button>`);
                  infowindow.open(map, marker);
                }
            })(marker, i));
            
        }
    }
}



$( document ).ready(function() {
    $( "#marker" ).click(function() {
        //$("#card").addClass("card");
        console.log(clicked)
      });
});
