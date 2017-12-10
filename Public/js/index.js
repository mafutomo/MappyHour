$(document).ready(function() {

const baseURL = 'http://localhost:8062'

$(".signin").submit(function(event) {
  event.preventDefault();
  console.log('clicked');
  const username = $("input#user").val();
  const password = $("input#pass").val();
  $.ajax({
  url:   `${baseURL}/user/${username}`,
    data: {
    user: username,
    password: password
  },
  success: function (data) {
  //console.log(data);
  console.log(username);
  console.log(password);
})


  });
