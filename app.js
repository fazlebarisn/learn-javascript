$(document).ready(function(){

  $('.box').on('click' , function(event){

    //$('h3').html('Target : ' + event.target);
    //$('h3').html('Target : ' + event.target.nodeName);
    $('h3').html('Target : ' + event.target.innerHTML);

  })

});