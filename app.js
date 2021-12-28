$(document).ready(function(){

  $(document).mousemove(function(event){

    $('#first').text('X:' + event.pageX + ' Y: ' + event.pageY);

    let x = event.pageX;
    let y = event.pageY;

    $('.box').offset({top:x , left:y});

  })

});