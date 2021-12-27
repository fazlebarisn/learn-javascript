$(document).ready(function(){

  // Slide  
  $('#animate').click(function(){

    /*
    $('#box').animate({

      left : '150px',
      width : '+=300px', // or '300px' or 'toggle' or 'hide' or 'show'
      fontSize : '25px',
      borderWidth : '5px'

    });
    */

    $('#box').animate({left : '150px'});
    $('#box').animate({top : '150px' , fontSize : '25px'});

    $('#box').animate({width : '350px'} , 3000, function(){
      console.log('done');
    });

  });


});