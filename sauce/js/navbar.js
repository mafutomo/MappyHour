$( document ).ready(function(){

  const userId = localStorage.getItem("user");

  console.log(userId);


  $('body').ready(function(event){

    $.ajax({
      url: `/user/${userId}`,
      type: 'GET',
      success: function(response){
    
        $('#nameText').html(`Hello, ${response}`)
      }
    })
  })

})
