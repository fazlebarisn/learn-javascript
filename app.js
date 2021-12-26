$(document).ready(function(){

  $('#wrapBtn').click(function(){

    $('#box p').wrap('<div class="tan"></div>');

  })

  $('#unWrapBtn').click(function(){

    $('#box p').unwrap();

  })

});