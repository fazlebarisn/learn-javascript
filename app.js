$(document).ready(function(){

  $('#widthBtn').click(function(){

    // check width
    var Width = $('#box p').width();
    var InnerWidth = $('#box p').innerWidth();
    var OuterWidth = $('#box p').outerWidth();
    var OuterWidthTrue = $('#box p').outerWidth(true);

    console.log( "width : " + Width );
    console.log( "innerWidth : " + InnerWidth );
    console.log( "outerwidth : " + OuterWidth );
    console.log( "outerwidth : " + OuterWidthTrue );

    // Also can set width
    $('#box').width('200px');

  })

  $('#heightBtn').click(function(){

    var Height = $('#box').height();
    var InnerHeight = $('#box').innerHeight();
    var OuterHeight = $('#box').outerHeight();
    var OuterHeightTrue = $('#box').outerHeight(true);

    console.log( "Height : " + Height );
    console.log( "InnerHeight : " + InnerHeight );
    console.log( "OuterHeight : " + OuterHeight );
    console.log( "OuterHeightTrue : " + OuterHeightTrue );

    // Also can set height
    $('#box').height('700px');

  })

});