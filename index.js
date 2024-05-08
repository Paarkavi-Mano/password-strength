let password = document.getElementById("password");
let message = document.getElementById("message");
let strength = document.getElementById("strength");

password.addEventListener("input",()=>{
    if(password.value.length > 0){
        message.style.display = "block";
    }
    else{
        message.style.display = "none"; 
    }
    if(password.value.length < 4){
        strength.innerHTML = "Weak";
        message.style.color= "red";
        password.style.borderColor = "red";
    }
    else if(password.value.length >= 4 && password.value.length < 8){
        strength.innerHTML = "Medium";
        message.style.color= "yellow";
        password.style.borderColor = "yellow";
    }
    else if(password.value.length >= 8){
        strength.innerHTML = "Strong";
        message.style.color= "green";
        password.style.borderColor = "green";
    }
    
})