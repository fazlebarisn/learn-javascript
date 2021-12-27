$(document).ready(function(){

  $('#positionBtn').click(function(){

    // check Position
    //var position = $('#box').position();
    var position = $('#box h1').position();

    //console.log(position);

    console.log(position.left); // will dispaly left value
    console.log(position.top); // will display topo value

  })

  $('#offsetBtn').click(function(){

    //var offset = $('#box').offset();
    var offset = $('#box h1').offset();

    console.log(offset);

    console.log(offset.left); // will dispaly left value
    console.log(offset.top); // will display topo value

    // Also can set offset vallue
    $('#box').offset({
      top:0,
      left:0
    });

  })

});