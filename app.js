$(document).ready(function(){

  $('#appendToBtn').click(function(){

    $('<h3>Append To : Hello There!</h3>').appendTo('#box');

    // sama thing we can do with 'append' 
    //$('#box').append('<h3>Append To : Hello There!</h3>');
  })

  $('#prependToBtn').click(function(){

    $('<h3>Prepend To : Hy There!</h3>').prependTo('#box');

    // sama thing we can do with 'prepend' 
    //$('#box').prepend('<h3>Append To : Hello There!</h3>');

  })

});