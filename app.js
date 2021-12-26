$(document).ready(function(){

  // $('#box').on("mouseover mouseout" , function(){
  //   $(this).toggleClass("tan");
  // })


  // Add many event at a same time
  $("#box").on({

    "click" : function(){
      $(this).css("background" , "tan");
    },

    "mouseover" : function(){
      $(this).css({"background" : "black" , "color" : "#fff"});
    },

    "mouseout" : function(){
      $(this).css("background" , "red");
    }

  })

  // Remove event
  $('button').click(function(){
    $('#box').off('mouseover mouseout');
  })

});