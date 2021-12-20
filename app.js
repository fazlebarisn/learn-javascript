const person = {
    'firstName' : 'Fazle',
    'lastName' : 'Bari',
    'fullName' : function(){
        return this.firstName + ' ' + this.lastName;
    },
    'age' : 23,
    'vill' : 'Shihata'
}

console.log(person.fullName);

document.getElementById("hi").innerHTML = person.fullName();