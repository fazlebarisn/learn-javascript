$(document).ready(function(){

  // first methord   
  //$('p').first().css('background' , 'red' ); 
  //$('#second p').first().css('background' , 'red' ); 
  //$('ul li').first().css('background' , 'red' );

  // last selector
  //$('p').last().css('background' , 'red' ); 
  //$('#first p').last().css('background' , 'red' ); 
  //$('ul li').last().css('background' , 'red' );

  // eq selector
  //$('ul li').eq(2).css('background' , 'red' );
  //$('ul li').eq(-1).css('background' , 'red' ); // will select the last element

  // filter
  //$('p').filter('.test').css('background' , 'red' );
  //$('p.test').css('background' , 'red' );

  // not selector
  //$('p').not('.test').css('background' , 'red' );

  // slice
  //$('ul li').slice(1).css('background' , 'red' ); // will tergate from index of 1
  $('ul li').slice(1,3).css('background' , 'red' ); // will tergate from index of 1 to index of 3

});