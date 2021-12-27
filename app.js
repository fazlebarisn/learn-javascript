$(document).ready(function(){

  // Animation   
  $('#animateBtn').click(function(){

    $('#box').animate({left : '250px'}, 3000);
    $('#box').animate({fontSize : '25px'} , 2000);

  });

  // Stop Animation   
  $('#stopBtn').click(function(){

    //$('#box').stop(); 

    //$('#box').stop( true ); // If want to stop all animation

    $('#box').stop( true , true ); // If want to stop all animation and jump at the end 

  });


});