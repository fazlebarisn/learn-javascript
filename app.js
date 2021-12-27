$(document).ready(function(){

  $('#hasClassBtn').click(function(){

    var hasClass = $('#box').hasClass('test');

    //console.log(hasClass);

    if(hasClass){
      console.log('The class name is test');
    }else{
      console.log('There is no class');
    }

  });

});