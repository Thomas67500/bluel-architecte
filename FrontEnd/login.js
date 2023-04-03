
const form = document.getElementById("form");

form.addEventListener("submit", e =>{
e.preventDefault();
const error = document.querySelector(".error");
 error.style.display ="none";

const email = document.getElementById("email").value;
const password = document.getElementById("pass").value;

  if ((email =="") && (password =="")) {
    error.innerHTML="Nom d'utilisateur ou mot de passe erroné";
    error.style.display="block";

  }


fetch("http://localhost:5678/api/users/login",{
method:"POST",
headers : {"Content-type":"application/json"},
body:JSON.stringify({
    email : email,
    password : password,
}),
})
.then (res => res.json())
.then ((data) => {
  window.sessionStorage.setItem("token",data.token);
   const tokenSeul = sessionStorage.getItem("token");
 console.log(tokenSeul);


  if ((email == "sophie.bluel@test.tld" ) && (password == "S0phie")) {
     location.href = "index.html";
  } 
 else { 
    error.innerHTML="Nom d'utilisateur ou mot de passe erroné";
    error.style.display="block";
  
  
  
 }



});





});








// nouveau code a test :


// const login = JSON.stringify(data);
// console.log();
// const Jparse = JSON.parse(login)
// console.log(Jparse);
//  window.localStorage.setItem("token",Jparse["token"]);
//   const tokenSeul = localStorage.getItem("token");
// console.log(tokenSeul);



//code originel :

// const login = JSON.stringify(data);
// window.localStorage.setItem("token",login);
//  const arrayString = localStorage.getItem("token");
//  const token = JSON.parse(arrayString);
// console.log(token);