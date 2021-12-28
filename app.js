$(document).ready(function(){

  $('.box').on('click' , function(event){
    alert('div is checked!');
  });

  $('h2').on('click' , function(event){
    alert('h2 is checked!');
  });

  $('p').on('click' , function(event){

    event.stopPropagation();
    //alert("p is checked!");
    alert("p is checked! " + event.isPropagationStopped() ); // to check 

  });

  $('button').on('click' , function(event){
    alert('button is checked!');
  })

});