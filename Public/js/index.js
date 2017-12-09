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
  console.log(data)
 }
})
  //console.log(data);
  console.log(username);
  console.log(password);
})

//   const username = $("input#user").val();
//   const password = $("input#pass").val();
//   const baseURL = 'http://localhost:5432'
// axios.get('https://api.github.com/users/' + username)
//   .then(function(response){
//     console.log(response.data); // ex.: { user: 'Your User'}
//     console.log(response.status); // ex.: 200
  });
