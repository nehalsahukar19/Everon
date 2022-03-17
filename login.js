function results(){
    var frname=document.getElementById("fname").value;
    var laname=document.getElementById("lname").value;
    var email=document.getElementById("mail").value;
    var pword=document.getElementById("pass").value;
    if(frname=='' && laname=='' && email=='' && pword=='')
    {
        alert("Please fill out the required form");
    }
    else if(frname=='')
    {
        alert("Please fill the first  name")
    }
    else if(laname=='')
    {
        alert("Please fill the last name")
    }
    else if(email=='')
    {
        alert("Please fill the mail")
    }
    else if(pword=='')
    {
        alert("Please fill the password")
    }
    else if(pword.length==1 || pword.length==2 || pword.length==3 || pword.length==4 || pword.length==5 || pword.length==6){
        alert("password should be more than 6 characters")
    }
    else{
        alert("login successfully")
        window.location.assign("http://127.0.0.1:5501/results.html")
    }
}
/*
const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function () {
    // toggle the type attribute
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    
    // toggle the icon
    this.classList.toggle("bi-eye");
});

// prevent form submit
const form = document.querySelector("form");
form.addEventListener('submit', function (e) {
    e.preventDefault();
});*/
