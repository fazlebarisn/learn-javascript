$(document).ready(function(){

  let id = 1;
  $('#add').click(function(){

    id++;

    let html = "<tr id='tr"+id+"'><td>Name</td><td><input type='text'><button id='remove'>Remove</button></td></tr>";
    $('#tbl').append(html);

    $('#remove').click(function(){

      
      let ttt = "tr" + id;
      console.log(ttt);
      $('#ttt').remove();
  
    });
    
  });


});