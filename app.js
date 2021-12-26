$(document).ready(function(){

  $('#clickbutton').click(function(){

    $('#box h1').text("Hello there!");
    //$('#box h1').text("Hello there!");
    $('#box p').html("Dear <b>Fazle Bari</b>");

    $('#box h1').attr("class" , "red" );

  })

  $('#sname').val("Fazle Bari");
  $('#sclass').val("Five");

});