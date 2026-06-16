function showSection(sectionId){

    let sections = document.querySelectorAll(".section");

    sections.forEach(section => {
        section.classList.remove("active");
    });

    document.getElementById(sectionId).classList.add("active");
}

const passwordInput = document.getElementById("password");
const strengthText = document.getElementById("strength");

passwordInput.addEventListener("input", function(){

    const password = passwordInput.value;

    let strength = "";

    if(password.length < 6){
        strength = "🔴 Weak Password";
        strengthText.style.color = "red";
    }
    else if(
        password.match(/[A-Z]/) &&
        password.match(/[0-9]/)
    ){
        strength = "🟢 Strong Password";
        strengthText.style.color = "green";
    }
    else{
        strength = "🟡 Medium Password";
        strengthText.style.color = "orange";
    }

    strengthText.textContent = strength;
});

document.getElementById("myForm").addEventListener("submit", function(event){

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(name.length < 3){
        alert("Name must contain at least 3 characters.");
        return;
    }

    if(!emailPattern.test(email)){
        alert("Enter a valid email address.");
        return;
    }

    if(password.length < 8){
        alert("Password must contain at least 8 characters.");
        return;
    }
    if(password !== confirmPassword){
    alert("Passwords do not match.");
    return;
}

    document.getElementById("welcomeMessage").innerHTML =
        "🎉 Welcome, " + name + "! Registration Successful.";

    document.getElementById("myForm").reset();

    strengthText.textContent = "";
});