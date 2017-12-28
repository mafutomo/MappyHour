$( document ).ready(function(){
  const userId = localStorage.getItem("user");
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
