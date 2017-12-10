$(document).ready(function() {

const baseURL = 'http://localhost:8062'

$(".signin").submit(function(event) {
  event.preventDefault();
  console.log('clicked');
  const username = $("input#user").val();
  const password = $("input#pass").val();
  $.ajax({
  url:   `${baseURL}/user/`,
    data: {
    email: username,
    //password: password
  },
  success: function (data) {
  if(data === "ok"){
window.location.href = "map.html"  }
}
})

  });
})
