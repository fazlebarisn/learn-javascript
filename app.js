let houre = 4;
let min = 8;
function sleep( h,s ){
  document.getElementById("demo").innerHTML = "You have sleep over " + h + " Houre and " + s + " min";
}
sleep(houre,min);

function find_max(nums) {
  let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
  //console.log(nums);
  for (let num of nums) {
    if (num > max_num) {
      // num = max_num;
      //max_num += 1;
      //max_num = num;
      max_num += num;
    }
  }
  return max_num;
}

find_max([80, 90, 70]);
