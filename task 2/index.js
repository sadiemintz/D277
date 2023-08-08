function checkEmail(){
    
    let email = document.getElementById("email").value;
    let email2 = document.getElementById("email2").value; 
    let conf = document.getElementById("conf");

    if(email == email2){
        conf.textContent = "You got it!";
        conf.style.color = "#6ab04c";
    } else {
        conf.textContent = "Oops! Email addresses do not match! Please try again!";
        conf.style.color = "#d63031";
    }
    }
