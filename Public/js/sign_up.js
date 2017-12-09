$(document).ready(function() {

const baseURL = 'http://localhost:3000'

$(".signup").submit(function(event) {
    event.preventDefault();
    console.log('clicked');

    const firstName = $("input#firstName").val();
    const lastName = $("input#lastName").val();
    const email = $("input#email").val();
    const password = $("input#password").val();
    const passwordConfirm = $("input#passwordConfirm").val();

    $.ajax({
    url:   `${baseURL}/users/${email}`,
    data: {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password
    },
    success: function (data) {
          console.log(data);
                          }
  })
    //console.log(data);

    console.log(firstName, lastName, email, password, passwordConfirm);
  })

})
