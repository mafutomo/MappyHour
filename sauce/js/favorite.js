$( document ).ready(function(){
    $(".button-collapse").sideNav();
  // console.log('doc loaded');
  const userId = localStorage.getItem("user");

  $('body').ready(function(event){
  //  console.log('clicked');
    $.ajax({
      url: `/favorites/${userId}`,
      type: 'GET',
      success: function(response) {
        // console.log(response);
        // $('#test2').text(response[0].name + response[0].address  + response[0].happyHourMenu)
        for(let i = 0; i < response.length; i++){
        $('#attach').append(" <div class='col s12 m6 l4'>"+
          "<div class='card'>"+
            "<div class='card-stacked'>" +
              "<h5 class='card-title truncate'>"+response[i].name+"</h5>" +
            "<div class='card-image'>"+
            "<img src='"+response[i].picture+"'>" +
            "</div>"+
            "<div class='card-content'>" +
              "<p class='flow-text'>"+response[i].description+"<p>"+
              "<p>"+response[i].address+"</p>"+
              "<p>"+response[i].phonenumber+"</p>"+
              "<p><span class='bold'>Average rating: </span>" + response[i].averageRating +"</p>"+"</br>"+
              "<p class='smaller'>"+response[i].happyHourMenu+"<p><br>"+
              "<p class='noshowUser'>"+response[i].user_id+"<p>"+
              "<p class='noshowRestaurant'>"+response[i].restaurant_id+"<p>"+
              `<form id="addRate"><fieldset class="rating">
              <input type="radio" id="star5" name="rating" value="5" /><label for="star5" title="Rocks!"></label>
              <input type="radio" id="star4" name="rating" value="4" /><label for="star4" title="Pretty good"></label>
              <input type="radio" id="star3" name="rating" value="3" /><label for="star3" title="Meh"></label>
              <input type="radio" id="star2" name="rating" value="2" /><label for="star2" title="Kinda bad"></label>
              <input type="radio" id="star1" name="rating" value="1" /><label for="star1" title="Sucks big time"></label>
              <button class="btn-floating btn-small waves-effect waves-light red">rate</button>
              </fieldset></form>`+
              "</div>" +"</br>" +
              "<div class='card-action'>"+
              "<button class='removal'><i class='small material-icons'>delete</i></button>" +
              "</div>"+
            "</div>" +
          "</div>" +
        "</div>") }

      },
      error: function(response) {
        // console.log('error');
        Materialize.toast('Something went wrong, please refresh the page and try again', 6000)
      },
      //console.log(data);
  })
})
$('#attach').on("click", ".removal", function(event){
  event.preventDefault();
  //console.log('clicked');
  var deleteMe = $(event.target).closest('.card').find('.noshowRestaurant').text()
  var userId = $(event.target).closest('.card').find('.noshowUser').text()
  // console.log(userId);
  $.ajax({
    url: `/favorites/${deleteMe}/${userId}`,
    type: 'DELETE',
    success: function(response){
      // console.log(response);
      $(event.target).closest('.card').remove()
       Materialize.toast('Favorite Removed!', 3500)
    },
  })
})
var rating = 0
$(document).on('click','#star1',function(event){
  rating = 1
  console.log(rating);
  })
$(document).on('click','#star2',function(event){
  rating = 2
  console.log(rating)
  })
$(document).on('click','#star3',function(event){
    rating = 3
    console.log(rating)
  })
$(document).on('click','#star4',function(event){
    rating = 4
    console.log(rating)
  })
$(document).on('click','#star5',function(event){
    rating = 5
    console.log(rating)
  })
$(document).on('submit','#addRate',function(event){
  event.preventDefault();
  var restId = $(event.target).closest('.card').find('.noshowRestaurant').text()
  console.log(rating)
  //console.log(userId)
  //console.log(restId)
  $.ajax({
    url: `/favorites/`,
    type: 'PUT',
    data: {
      rating,
      userId,
      restId
    },
    success: function(response){
      Materialize.toast('Your rating was added!', 4000)
       console.log(response);
    },
  })
  })
})
