$(document).ready(function(){

  $('#replaceBtn').click(function(){

    //$("#box p:first").replaceWith("<h3>Hello There</h3>");

    ///$("#box p:nth-child(3").replaceWith("<h3>Hello There</h3>");


    $("<h3>Hello There</h3>").replaceAll("#box p");

  })


});