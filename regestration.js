let email = document.getElementById("em");
let fn = document.getElementById("FN");
let massage= document.getElementsByTagName("p")[0];
let password =document.getElementById("ps");

function validEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    email.match(emailPattern)}

email.addEventListener("blur", () => {
    const emailValue = email.value;
    if (validEmail(emailValue)) {
        console.log("Valid email address");
    }
});


password.addEventListener("blur", () => {
    const passwordValue = password.value; 
    const passwordLength = 6;
    
    if (passwordValue.length < passwordLength) {
      let  node = document.createTextNode("You should enter at least 6 characters");
      massage. appendChild( node);
      console.log(massage);
    }
});


let submition=document.getElementById("sub");
submition.addEventListener("click", () => {
         
    localStorage.setItem("email",email.value)
    localStorage.setItem("password",password.value)
    localStorage.setItem("fullname",fn.value)
});
