$(document).ready(function(){

  $('#append').click(function(){
    $('ol').append('<li>New Item</li>');
  })

  $('#prepend').click(function(){
    $('ol').prepend('<li> Brand New Item</li>');
  })

});