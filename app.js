$(document).ready(function(){

  $('#first ul li').each(function(){

    //console.log($(this).text());
    var value = $(this).text();
    $(this).text('Hello ' + value );
    
  })

});