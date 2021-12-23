$(document).ready(function(){

    $("body").keypress(function(){
        $(this).css("background-color" , "orange");
    });

    $("body").keyup(function(){
        $(this).css("background-color" , "green");
    });

    $("body").keydown(function(){
        $(this).css("background-color" , "pink");
    });

});