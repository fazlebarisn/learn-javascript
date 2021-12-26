$(document).ready(function(){

  $('#cloneBtn').click(function(){

    $("#box h1").clone().prependTo("#box2");
    $("#box p").clone().appendTo("#box2");
  })


});