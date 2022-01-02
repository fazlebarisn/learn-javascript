$(document).ready(function(){

 $("#box select").change(function(){
  var selectedCountry = $(this).children("option:selected").val();

  console.log(selectedCountry);
  });
  let x = 44444;
alert(x.toString().length);
  

});


// function add_four_digit_value(){
//   ?>
//   <script>
//       jQuery(document).ready(function(){
      
        $(document.body).on('change','.wpt_product_table_wrapper table tr td .wpt_varition_section select',function(){
          $('.table-inputbox').val("");
        });
      
      
      jQuery(".table-inputbox").after('<div class="demo"></div>');
      
      jQuery(".wpt_woo_add_cart_button").on("click" , function(event){
      var value = jQuery(".table-inputbox").val();
      if(value ==""){
        alert("Enter Value");
        jQuery(".wpt_woo_add_cart_button").removeClass("enabled ");
        event.preventDefault();
      }	
    });
      
  
        jQuery(".table-inputbox").keyup(function(event){
  
          var value = jQuery(this).val();
          var countN = (value.match(/([0-9])/g) || []).length;
  
          if( countN !== 4){
            jQuery(".demo").text("Enter four digit only");
            jQuery(".wpt_woo_add_cart_button").click(function(event){
              jQuery(this).removeClass("enabled ");
              event.preventDefault();
            });
          }else if( countN == 4 ){
            jQuery(".wpt_woo_add_cart_button").click(function(event){
              jQuery(this).addClass("enabled ");
            });
            jQuery(".demo").hide();
          }
        });
            
//     });
//   </script>
//   <?php	
//   }
  
//   add_action('wp_head','add_four_digit_value');