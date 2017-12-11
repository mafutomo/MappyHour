var boulderLocations = [
    {
        "id": 1,
        "name": "Amante Coffee",
        "address": "1035 Walnut St Boulder, CO 80302",
        "phonenumber": "303-546-9999",
        "lat": 40.016705,
        "lng": -105.281401,
        "description": "Coffee / Tea / Juice / Treats",
        "url": "http://www.amantecoffee.com/",
        "picture": "https://s3-media3.fl.yelpcdn.com/bphoto/s_nTWYPK6wuumlO7HSodCQ/ls.jpg",
        "happyHourMenu": "Daily 3 - 6pm | Food: $3.5 Affogato & Gelato | Drinks: $3 Carlsberg Beer, $5 Coffee Cocktails, $3 Wells, $1 off Wine, $5 Shottino",
        "averageRating": 3,
        "created_at": "2017-12-10T19:56:21.543Z",
        "updated_at": "2017-12-10T19:56:21.543Z"
    },
    {
        "id": 2,
        "name": "Arcana Restaurant",
        "address": "909 Walnut St Boulder, CO 80302",
        "phonenumber": "303-444-3885",
        "lat": 40.016256,
        "lng": -105.283216,
        "description": "Contemporary / Fine Dining",
        "url": "http://arcanarestaurant.com/",
        "picture": "http://lifestylepubs.wordpress.s3-us-west-2.amazonaws.com/app/uploads/prod/2016/03/2G7A8475.jpg",
        "happyHourMenu": "Daily 5 - 6pm | $3 Beer, $4 Cider, $5 Wine, $7 West Side Daiquiri, American 75 and BBQ Old Fashioned. $6 Shot & a Beer, $7 Crispy Pork Rinds, Arcana Wings, Bon Bon and Macaron Plate, $8 Grilled Head Cheese",
        "averageRating": 3,
        "created_at": "2017-12-10T19:56:21.543Z",
        "updated_at": "2017-12-10T19:56:21.543Z"
    },
    {
        "id": 3,
        "name": "The Attic Bar & Bistro",
        "address": "949 Walnut St Boulder, CO 80302",
        "phonenumber": "303-415-1300",
        "lat": 40.016564,
        "lng": -105.282408,
        "description": "Casual / Late Night Eats",
        "url": "http://www.atticbistro.com/",
        "picture": "https://res.cloudinary.com/simpleview/image/fetch/f_auto,q_75/http://Boulder.simpleviewcrm.com/images/listings/original_attic-bar-3.jpg",
        "happyHourMenu": "Monday - Saturday 3 - 6pm, Sunday 9pm - Close | Food: Appetizer Specials | Drinks: $3 Wells, Drafts, and Fat Alberts, $3.75 Wines",
        "averageRating": 3,
        "created_at": "2017-12-10T19:56:21.543Z",
        "updated_at": "2017-12-10T19:56:21.543Z"
    },
];

// var $xhr = $.getJSON('http://localhost:3001/restaurants');
// $xhr.done(function(data) {
//     if ($xhr.status !== 200) {
//         return;
//     }
//     console.log(data)
// })

const name = boulderLocations.find(ele =>{
    return {lat: ele.lat, lng: ele.lng}
})

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: name,
      styles: styles,
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
            console.log(obj);
            //console.log('New Object ',obj);
            var contentString = boulderLocations[i].name;
            
            // var map = new google.maps.Map(document.getElementById('map'), {
            //     zoom: 15,
            //     center: obj
            // });
            
            marker = new google.maps.Marker({
                position: boulderLocations[i],
                map: map,
                title: boulderLocations[i].name,
            });

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




