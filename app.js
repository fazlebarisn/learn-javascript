$(document).ready(function(){

  /*
  var html = $('body').html();
  var html = $('#box').html();
  var html = $('#box p').html();
  console.log(html);

  var text = $('#box p').text();
  console.log(text);

  var attrs = $('#box').attr('class');
  console.log(attrs);

  */

  // Get dara from 
  $('#sform').submit(function(){

    var name = $('#sname').val();
    var sclass = $('#sclass').val();
    var country = $('#country').val();
    alert(name + sclass + country);

  })

});