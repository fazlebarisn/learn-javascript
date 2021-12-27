$(document).ready(function(){

  // Slide  
  $('#slideUpBtn').click(function(){

    //$('#box').slideUp();
    //$('#box').slideUp('slow');
    //$('#box').slideUp(2000);

    $('#box').slideUp(2000 , function(){
      console.log('slide Up');
    });

  });

  // FadeOut 
  $('#slideDownBtn').click(function(){

    $('#box').slideDown();
    //$('#box h1').slideDown('slow');
    //$('#box h1').slideDown(2000);

    // $('#box h1').slideDown(2000 , function(){
    //   console.log('slide Down');
    // });

  });

  // Slide Toggle 
  $('#slideToggleBtn').click(function(){

    $('#box').slideToggle();

  });

});