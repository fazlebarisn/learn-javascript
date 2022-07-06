//let me = 'Fazle Bari';
//console.log(me.length);
//let reselt = me.slice(6,10);
//let reselt = me.slice(-10,-6);
//let reselt = me.substr(1,9);

let names = 'My name is Fazle Bari';
//let reselt = names.replace('Bari','Huda');
//let reselt = names.toLowerCase();
//let reselt = names.toLocaleUpperCase();
// let reselt = names.trim();
// let reselt = names.split(' ');

const cars = ["Saab", "Volvo", "BMW", "Toyota"];
cars.push("Farari");
// const cars = [];
//  cars[0] = 9;
//  cars[1] = 90;
//  cars[2] = 890;
// let reselt = 0.2 + 0.1;

//console.log( cars.length);
//console.log( cars[cars.length -1] );
//console.log( cars.sort());

// for(i=0; i<cars.length; i++){
//     console.log(cars[i]);
// }

// cars.forEach(myFunction);

// function myFunction(val){
//     console.log(val);
// }

// const points = [40,100,1,5,25,10,1.5];
// // let sr = ['8th','1st','25th','2nd','26th','3rd'];

// points.sort();
// // sr.sort();

// // var inputText = "'foofo21' 'bar432' 'foobar12345'";
// var inputText = ['8th','1st','25th','2nd','26th','3rd'];
// function processText(inputText) {
//     var output = [];
//     var json = inputText.split(' ');
//     json.forEach(function (item) {
//         output.push(item.replace(/\'/g, '').split(/(\d+)/).filter(Boolean));
//     });
//     return output;
// }

// console.log(JSON.stringify(processText(inputText)));

// points.sort(function(a,b){
//     return a-b;
// })

// document.getElementById('demo').innerHTML = sr;

// program to extract value as an array from an array of objects

// function extractValue(arr, prop) {

//     // extract value from property
//     let extractedValue = arr.map(item => item[prop]);

//     return extractedValue;

// }

// const objArray = [{a: 1, b: 2}, {a: 4, b: 5}, {a: 8, b: 9}];

// // passing an array of objects and property 'a' to extract
// const result = extractValue(objArray, 'a');
// console.log(result);

 var array = ['8th','1st','25th','2nd','26th','3rd'];

// arr.forEach(myFunction);

// function myFunction(val){
//     var numb = val.match(/\d/g);
// }
// console.log(arr);

// function arrayRemove(arr, value) { 
    
//     return arr.filter(function(ele){ 
//         //console.log(ele);
//         var numb = ele.match(/\d/g);
//         console.log(numb);
//         //return numb; 
//     });
// }

// var result = arrayRemove(array, 6);

//console.log(result);
// result = [1, 2, 3, 4, 5, 7, 8, 9, 0]

//var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var filtered = array.filter(function(value, index, arr){ 
    //console.log(value, index,arr );

    //var numb = value.replace(/[^0-9]/g,'');
    var numb = value.match(/\d/g);
    parseInt(numb)
    //console.log( numb);
    return numb > 5;
});

console.log(filtered);



// function arrayFromArgs() {
//     return Array.prototype.slice.call(arguments);
// }
// var fruits = arrayFromArgs('Apple', 'Orange', 'Banana');
// console.log(fruits);