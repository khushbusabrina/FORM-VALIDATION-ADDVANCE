let form=document.querySelector("form");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
let name=document.getElementById("nameInput")
let email=document.getElementById("emailInput")
let mobile=document.getElementById("mobileinput")
let password=document.getElementById("passwordInput")
let message=document.getElementById("textareainput")

 let courses = document.querySelectorAll(
        'input[name="Course Name"]:checked'
    );
let formats = document.querySelectorAll(
        'input[name="Course Format "]:checked'
    );
let btn=document.querySelector(".btn")

let alertboxname=document.querySelector(".alertboxname")
let alertboxemail=document.querySelector(".alertboxemail")
let alertboxmobile=document.querySelector(".alertboxmobile")
let alertboxpass=document.querySelector(".alertboxpass")
let alertboxtext=document.querySelector(".alertboxtext")
let emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let passregex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

// name validation start

if(!name.value){
    alertboxname.innerText="Full Name is required !"
    alertboxname.style.color="red"
    name.style.border="1px solid red"
 }
 else if(name.value.length>16||name.value.length<4){
    alertboxname.innerText="Max length is 16 && Min length is 4 !"
    alertboxname.style.color="red"
    name.style.border="1px solid red"
 }
 else{
   alertboxname.innerText=""
    alertboxname.style.color=""
    name.style.border="1px solid gray"
 }
//  name validation end

// email validation start 
  if(!email.value){
    alertboxemail.innerText="Email Address is required !"
    alertboxemail.style.color="red"
    email.style.border="1px solid red"
 }
 else if(!emailregex.test(email.value)){
   alertboxemail.innerText="invalid Email!"
    alertboxemail.style.color="red"
    email.style.border="1px solid red"                                                                 
 }
 else{
      alertboxemail.innerText=""
      alertboxemail.style.color=""
      email.style.border="1px solid gray"
 }
//  email validation end
// nummber validation start
 if(!mobile.value){
    alertboxmobile.innerText="Phone number is required!"
    alertboxmobile.style.color="red"
     mobile.style.border="1px solid red"
 }
 else if(mobile.value.length>11){
     alertboxmobile.innerText="please enter a valid 11-digit Phone Number"
     alertboxmobile.style.color="red"
     mobile.style.border="1px solid red"

 }
 else{
   alertboxmobile.innerText=""
   alertboxmobile.style.color=""
   mobile.style.border="1px solid gray"
   
 }
//  nummber validation start

// password validation start
 if(!password.value){
    alertboxpass.innerText="password is requred"
    alertboxpass.style.color="red"
     password.style.border="1px solid red"

  
 }
 else if(!passregex.test(message.value)){
    alertboxpass.innerText="Give a Strong Password"
    alertboxpass.style.color="red"
     password.style.border="1px solid red"
 }
 else{
   alertboxpass.innerText=""
   alertboxpass.style.color=""
   password.style.border="1px solid gray"
 }
//  password validation start

 if(!message.value){
   alertboxtext.innerText="Message is required !"
   alertboxtext.style.color="red"
    message.style.border="1px solid red"

 }

 else if (!message.value.length>300||message.value.length<20){
   alertboxtext.innerText="Max length is 300 && Min length is 20!"
   alertboxtext.style.color="red"
   message.style.border="1px solid red"
 }
 else{
   alertboxtext.innerText=""
   alertboxtext.style.color=""
   message.style.border="1px solid gray"
 }


if (!courses.length) {
    alertcleckbox.innerText = "Please select a course!";
} else {
    alertcleckbox.innerText = "";
}

if (!formats) {
    alertradio.innerText = "Please select course format!";
} else {
    alertradio.innerText = "";
}


 
alert("form submitted successfully")
   



})





// let name=document.getElementById("nameInput")
// let email=document.getElementById("emailInput")
// let mobile=document.getElementById("mobileinput")
// let password=document.getElementById("passwordInput")
// let message=document.getElementById("textareainput")
// let courses = document.querySelectorAll(
//         'input[name="Course Name"]:checked'
//     );
// let formats = document.querySelectorAll(
//         'input[name="Course Format "]:checked'
//     );
// let btn=document.querySelector(".btn")




// btn.addEventListener("click",()=>{
//    let name=document.getElementById("nameInput")
// let email=document.getElementById("emailInput")
// let mobile=document.getElementById("mobileinput")
// let password=document.getElementById("passwordInput")
// let message=document.getElementById("textareainput")


// let alertboxname=document.querySelector(".alertboxname")
// let alertboxemail=document.querySelector(".alertboxemail")
// let alertboxmobile=document.querySelector(".alertboxmobile")
// let alertboxpass=document.querySelector(".alertboxpass")
// let alertboxtext=document.querySelector(".alertboxtext")
// let alertcleckbox=document.querySelector(".alertcleckbox")
// let alertradio=document.querySelector(".alertradio")


//    if(!name.value){
//      alertboxname.innerHTML="Name is required"
//      name.style.border="1px solid red"
//    }
// })


