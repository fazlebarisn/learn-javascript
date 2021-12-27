$(document).ready(function(){

  // Parent selector   
  //$('#child-c').parent().css('background' , 'red' );
  //$('#inner').parent().css('background' , 'red' );

  // Parents selector   
  //$('#child-c').parents().css('background' , 'red' ); // will apply all parents
  //$('#child-c').parents('#outer').css('background' , 'red' ); // will apply 'outer' parent
  //$('#child-c').parentsUntil('#main-outer').css('background' , 'red' ); // will apply 'outer' to 'main-outer' parent

  // offsetparent
  //$('#child-c').offsetParent().css('background' , 'red' );

  // closest
  $('#child-c').closest('ul').css('background' , 'red' ); // will targate nerest 'ul'

});