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

const points = [40,100,1,5,25,10,1.5];
points.sort();
points.sort(function(a,b){
    return a-b;
})

document.getElementById('demo').innerHTML = points;