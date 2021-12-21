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

//document.getElementById("hi").innerHTML = person;

function personInfo(){
    document.getElementById("hello").innerHTML = person.fullName();
}

personInfo()

function checkLength(el) {
    if (el.value.length != 4) {
      alert("length must be exactly 4 number")
    }
  }