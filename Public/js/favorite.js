$( document ).ready(function(){
  console.log('doc loaded');
  const userId = localStorage.getItem("user");
  $('#test').click(function(event){
    console.log('clicked');
    $.ajax({
      url: `/favorite/${userId}`,
      type: 'GET',
      success: function(response) {
        console.log(response);
        $('#test2').text(response[0].name + response[0].address + response[0].happyHourMenu)
      },
      error: function(response) {
        console.log('error');
        Materialize.toast('Please check your user name and / or password and try again', 6000)
      },
      //console.log(data);
  })
})
})
