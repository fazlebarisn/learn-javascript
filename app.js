$(document).ready(function(){

  $('#add').click(function(){

    let html = "<tr><td>Name</td><td><input type='text'><button id='remove'>Remove</button></td></tr>";
    $('#tbl').append(html);
    
  });

  $('#remove').click(function(){

    alert(11111);
    $('#remove').remove();

  });

});