document.getElementById('hello').innerHTML = 'I am a man!';
document.getElementById('hi').innerHTML = 'Cool!';
document.getElementById('hi').style.color = 'red';

document.getElementById('water').style.width = '500px';
document.getElementById('water').style.height = '250px';

// Function

//let myName ='Sony';



function newMe( myName ){
    console.log( 'His name is ' + myName.name + ' He is ' + myName.age +' Years old' + ' And He is from ' + myName.vill);
}

const person1 = {
    'name' : 'sony',
    'age' : 23,
    'vill' : 'Shihata'
}
const person2 = {
    'name' : 'Rony',
    'age' : 27,
    'vill' : 'Dhaka'
}

newMe(person1);
newMe(person2);