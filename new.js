//store a object in localstorage
var username = document.getElementById('username').value;
var email = document.getElementById('email').value;
var passwaord = document.getElementById('password').value;


var myObj = {
    username:"john",
    email:"john@gmail.com",
    password:123456
}

//localStorage.setItem("meObj",myObj);

//sconsole.log(localStorage.getItem("myObj"));

//first of all serialize into string
var serializeObject = JSON.stringify(myObj);

localStorage.setItem("myObj", serializeObject)

console.log(localStorage.getItem('serializeobject'));

//in order to convert this string object to javascript object

var originalObject = JSON.parse(locaStorage.getItem('myObj'))

console.log(originalObject);


