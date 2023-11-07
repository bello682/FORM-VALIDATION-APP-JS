const btnSubmit = document.querySelector(".btn");
const userNameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const errorMsg = document.getElementsByClassName("error-msg");

btnSubmit.addEventListener("click", () => {
     
    if(userNameInput.value === " " && emailInput.value === " " && passwordInput.value === " ") {
        console.log("Congratulations")
    }
    else {
        errorMsg[0].innerHTML = "Field can not be Empty";
        
    }

    // if (userNameInput.value.call("", "", "")) {
    //     errorMsg.innerHTML = "input must contain first, middle & last name";
    // }

    // if (emailInput.value.call("@", ".com", "email", "yahoo")) {
    //     errorMsg.innerHTML = "email input must contain @ . com yahoo gmail";
    // }

    // if (passwordInput.value.call( inputCharacter = [])) {
    //     errorMsg.innerHTML = "input must contain first, middle & last name";
    // }
});


   
/*
function runSubmit(e) {
    e.preventDefault();

   if(userNameInput === emailInput === passwordInput === " ") {
       errorMsg.innerHTML = "Field can not be Empty";
   }
   else {
       console.log("Congratulations")
   }

};*/
  
