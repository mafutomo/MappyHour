$( document ).ready(function(){
    $(".button-collapse").sideNav();
  console.log('doc loaded');
  const userId = localStorage.getItem("user");

  $('#test').click(function(event){
  //  console.log('clicked');
    $.ajax({
      url: `/favorite/${userId}`,
      type: 'GET',
      success: function(response) {
        console.log(response);
        // $('#test2').text(response[0].name + response[0].address  + response[0].happyHourMenu)
        for(let i = 0; i < response.length; i++){
        $('#attach').append(" <div class='col s12 m7'>"+
          "<div class='card'>"+
            "<div class='card-stacked'>" +
              "<h5 class='card-title'>"+response[i].name+"</h5>" +
            "<div class='card-image'>"+
            "<img src='"+response[i].picture+"'>" +
            "</div>"+
            "<div class='card-content'>" +
              "<p class='flow-text'>"+response[i].description+"<p>"+
              "<p>"+response[i].address+"</p>"+
              "<p>"+response[i].phonenumber+"</p>"+
              "<p>"+response[i].happyHourMenu+"<p>"+
              "<p class='noshowUser'>"+response[i].user_id+"<p>"+
              "<p class='noshowRestaurant'>"+response[i].restaurant_id+"<p>"+
              "</div>" +
              "<div class='card-action'>"+
              "<button class='removal'>REMOVE</button>" +
              "</div>"+
            "</div>" +
          "</div>" +
        "</div>") }
      },
      error: function(response) {
        console.log('error');
        Materialize.toast('Something went wrong, please refresh the page and try again', 6000)
      },
      //console.log(data);
  })
})
$('#attach').on("click", ".removal", function(event){
  event.preventDefault();
  //console.log('clicked');
  var deleteMe = $(event.target).closest('.card').find('.noshowRestaurant').text()
  var userId = $(event.target).closest('.card').find('.user_id').text()
  console.log(deleteMe);
  $.ajax({
    url: `/favorite/${deleteMe}`,
    type: 'DELETE',
    data: {
      userId: userId
    },
    success: function(response){
      console.log(response);
    },

  })
})
})
