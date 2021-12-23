$(document).ready(function(){

    $("#sname,#sclass,#country").focus(function(){
        $(this).css("background-color" , "lime");
    });

    $("#sname,#sclass,#country").blur(function(){
        $(this).css("background-color" , "");
    });

    $("#sname,#sclass").select(function(){
        $(this).css("background-color" , "red");
    });

    $("#country").change(function(){
        //$(this).css("background-color" , "pink");
        var countryName = $(this).val();
        console.log(countryName);
        $("#extra").html(countryName)
    });

    $("#sform").submit(function(){
        alert("Form Submited");
    });

});