$( document ).ready(function(){
$('.logout').click(function(event){
  console.log('clicked');
  localStorage.clear();
})
$('.brand-logo').on('click', '.mapButton', function(){
  var restaurant = $(event.target).closest('.content').find('.firstHeading').text()
  console.log(restaurant);
   Materialize.toast( `${restaurant} saved to favorites` , 4000)
})
})
