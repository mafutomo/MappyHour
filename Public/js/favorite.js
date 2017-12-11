$( document ).ready(function(){
  console.log('doc loaded');
  const user = localStorage.getItem("user");
  $( "body" ).load( "/favorites.html", function() {
  console.log('OK');;
});
})
