$(document).ready(function(){

  // fadeIn heading 
  $('#fadeInBtn').click(function(){

    //$('#box h1').fadeIn();
    //$('#box h1').fadeIn('slow');
    //$('#box h1').fadeIn(2000);

    $('#box h1').fadeIn(2000 , function(){
      console.log('Fade In');
    });

  });

  // FadeOut heading
  $('#fadeOutBtn').click(function(){

    //$('#box h1').fadeOut();
    //$('#box h1').fadeOut('slow');
    //$('#box h1').fadeOut(2000);

    $('#box h1').fadeOut(2000 , function(){
      console.log('Fade Out');
    });

  });

  // Toggle heading
  $('#fadeToggleBtn').click(function(){

    $('#box h1').fadeToggle();

  });

  // Fade to
  // $(selector).fadeTo( speed, opacity, callback ) fadeToBtn

  $('#fadeToBtn').click(function(){

    //$('#box').fadeTo( 2000, 0.2 );

    $('#box').fadeTo(2000 , .2 ,function(){
      console.log('Fade To');
    });

  });

});