$(document).ready(function(){

    $("#box").click(function(){
        $(this).css("background-color" , "green");
    })

    $("#box").dblclick(function(){
        $(this).css("background-color" , "orange");
    })

    $("#box").contextmenu(function(){
        $(this).css("background-color" , "blue");
    })

    $("#box").mouseenter(function(){
        $(this).css("background-color" , "tan");
    })

    $("#box").mouseleave(function(){
        $(this).css("background-color" , "purple");
    })

});