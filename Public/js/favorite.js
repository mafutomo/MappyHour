$( document ).ready(function(){
    $(".button-collapse").sideNav();


  console.log('doc loaded');
  const userId = localStorage.getItem("user");
  $('#test').click(function(event){
    console.log('clicked');
    $.ajax({
      url: `/favorite/${userId}`,
      type: 'GET',
      success: function(response) {
        console.log(response);
        // $('#test2').text(response[0].name + response[0].address  + response[0].happyHourMenu)
        for(let i = 0; i < response.length; i++){
        $('#test').append(" <div class='col s12 m7'>"+
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
              "<a class='remove' href='#'>Remove</a>" +
              "</div>"+
            "</div>" +
          "</div>" +
        "</div>") }
      },






      error: function(response) {
        console.log('error');
        Materialize.toast('Please check your user name and / or password and try again', 6000)
      },
      //console.log(data);
  })
})
})
