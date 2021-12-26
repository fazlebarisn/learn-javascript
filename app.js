$(document).ready(function(){

  $('#widthBtn').click(function(){

    var divWidth = $('#box').width();
    var divInnerWidth = $('#box').innerWidth();
    var divOuterWidth = $('#box').outerWidth();
    var divOuterWidthTrue = $('#box').outerWidth(true);

    console.log( "width : " + divWidth );
    console.log( "innerWidth : " + divInnerWidth );
    console.log( "outerwidth : " + divOuterWidth );
    console.log( "outerwidth : " + divOuterWidthTrue );

  })

  $('#heightBtn').click(function(){

    $('#box p').unwrap();

  })

});