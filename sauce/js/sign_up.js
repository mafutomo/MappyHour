$(document).ready(function() {
  $(".signup").submit(function(event) {
    event.preventDefault();
    const firstName = $("input#firstName").val();
    const lastName = $("input#lastName").val();
    const email = $("input#email").val().toLowerCase();
    const password = $("input#password").val();
    const passwordConfirm = $("input#passwordConfirm").val();
    if (password !== passwordConfirm) {
      Materialize.toast('Passwords must match, please try again', 4000)
    } else {
      $.ajax({
        url: `/users`,
        type: 'POST',
        data: {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        },
        success: function(data) {
          window.location.href = '/index.html'
        }
      })
    }
  })
})
