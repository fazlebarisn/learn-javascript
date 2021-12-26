$(document).ready(function(){

  $('#beforeBtn').click(function(){
    $('#box').before('<h2>New Item</h2>');
  })

  $('#afterBtn').click(function(){
    $('#box').after('<h3> Brand New Item</h3>');
  })

});