$(document).ready(function(){

  $('#result').on('click' , function(event){

    event.preventDefault();

    // check if preventDefault

    var check = event.isDefaultPrevented();
    $('h3').html(check);

  })

});