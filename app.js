$(document).ready(function(){

  // has methord   
  //$('p').has('span').css('background' , 'red' ); 
  //$('p').has('b').css('background' , 'red' ); 
  //$('p').has('b,span').css('background' , 'red' ); 
  //$('p').has('.test').css('background' , 'red' ); 

  // is methord
  // if( $('p').parent().is('div') ){
  //   console.log( $('p').parent().is('div') );
  // }

  $('p').click(function(){

    if( $(this).parent().is('div') ){
      $(this).css('background' , 'gold' );
    }else{
      $(this).css('background' , 'tan' );
      
    }
  });

});