$(document).ready(function(){

  // siblings selector   
  //$('#child-c').siblings().css('background' , 'red' );
  //$('#child-c').siblings('h2').css('background' , 'red' );

  // next selector   
  //$('#child-c').next().css('background' , 'red' ); 
  //$('#child-c').nextAll().css('background' , 'red' ); 
  //$('#child-c').nextUntil('.testy').css('background' , 'red' );

  // prev selector   
  //$('#child-c').prev().css('background' , 'red' ); 
  //$('#child-c').prevAll().css('background' , 'red' ); 
  $('#child-c').prevUntil('test').css('background' , 'red' ); 

});