$(document).ready(function() {
  const username = $("input#user").val();
  const password = $("input#pass").val();
  const baseURL = 'http://localhost:3000'

$('.btn-primary').click(function(event) {
  event.preventDefault();
  console.log('clicked');
  axios.get('https://api.github.com/users/' + username)
    .then(function(response){
      console.log(response.data); // ex.: { user: 'Your User'}
      console.log(response.status); // ex.: 200
});
console.log(data);
}

//   const username = $("input#user").val();
//   const password = $("input#pass").val();
//   const baseURL = 'http://localhost:5432'
// axios.get('https://api.github.com/users/' + username)
//   .then(function(response){
//     console.log(response.data); // ex.: { user: 'Your User'}
//     console.log(response.status); // ex.: 200
//   });
