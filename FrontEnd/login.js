

const form = document.getElementById("form");

form.addEventListener("submit", e =>{
e.preventDefault();

const email = document.getElementById("email").value;
const password = document.getElementById("pass").value;

fetch("http://localhost:5678/api/users/login",{
method:"POST",
headers : {"Content-type":"application/json"},
body:JSON.stringify({
    email : email,
    password : password,
}),

})
.then (res => res.json())
.then(data=> console.log(data))



});















