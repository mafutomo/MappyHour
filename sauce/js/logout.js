$( document ).ready(function(){
$('.logout').click(function(event){
  console.log('clicked');
  localStorage.clear();
})
})
