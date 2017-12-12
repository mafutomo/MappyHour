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
              "</div>" +
              "<div class='card-action'>"+
              "<button class='removal'>Remove</button>" +
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
  var deleteMe = $(event.target).closest('.card').find('.card-title').text()
  console.log(deleteMe);
  $.ajax({
    url: `/favorite/${deleteMe}`,
    type: 'DELETE',
    success: function(response){
      console.log(response);
    },

  })
})
})
