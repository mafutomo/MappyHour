$(document).ready(function() {


  $(".signin").submit(function(event) {
    event.preventDefault();
    console.log('clicked');
    const username = $("input#user").val().toLowerCase();
    const password = $("input#pass").val();
    $.ajax({
      url: `/user`,
      type: 'POST',
      data: {
        email: username,
        password: password
      },
      success: function(data) {
        console.log(data);
        localStorage.setItem("user", data.id)
        window.location.href = "map.html"
      },
      error: function(data) {
        console.log(data);
        if(data .responseText === "Not Found"){
          console.log(404);
          Materialize.toast('We don\'t see your email.  Please register.', 6000)
        }
        else if(data.responseText === "Unauthorized")
        Materialize.toast('Please check your user name and / or password and try again', 6000)
      },
    })
  });
})
