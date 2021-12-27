$(document).ready(function(){

  // Hide heading 
  $('#hideBtn').click(function(){

    //$('#box h1').hide();
    //$('#box h1').hide('fast');
    //$('#box h1').hide(1000);

    $('#box h1').hide(1000 , function(){
      console.log('Now it is hidden!');
    });

  });

  // Show heading
  $('#showBtn').click(function(){

    //$('#box h1').show();
    //$('#box h1').show('fast');
    $('#box h1').show(1000);

  });

  // Toggle heading
  $('#toggleBtn').click(function(){

    $('#box h1').toggle();

  });

});