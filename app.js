const vawel = ['a','e','i','o','u','A','E','I','O','U'];

function countvawel(sentense){
    let count = 0;
    let leaters = Array.from(sentense);
    leaters.forEach( function( value ){
        if(vawel.includes(value)){
            count++;
        }
    });
    return count;
}

// console.log( countvawel('I love Banglasesh') );

// let names = ['sony','rony','motin','sojib'];

// console.log( names.includes('sony') );
let myName = 'Sony';
console.log(Array.from(myName));