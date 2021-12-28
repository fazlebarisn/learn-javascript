$(document).ready(function(){

  $('.box').on('mousedown mouseover mouseout' , function(event){
    $('h2').html(event.type + ' : ' + event.which);
  })

  $('#inputBox').on('keydown' , function(event){
    $('h2').html(event.type + ' : ' + event.which);
  })

});