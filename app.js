$(document).ready(function(){

  //console.log( $(window).scrollTop() );
  //console.log( $(window).scrollLeft() );

  $(window).scroll(function(){

    //console.log( $(window).scrollTop() );
    //console.log( $(window).scrollLeft() );

    $('#box').html('');
    $('#box').append('Top: ' + $(window).scrollTop() + '<br> Left: ' + $(window).scrollLeft() );

  })

  // Set value on button click
  $('#scrollTopBtn').click(function(){
    $(window).scrollTop(200);
  });

});