function results(){
    var frname=document.getElementById("fname").value;
    var laname=document.getElementById("lname").value;
    var email=document.getElementById("mail").value;
    var pword=document.getElementById("pass").value;
    var pword1=document.getElementById("pass1").value;
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
    else if(pword1=='')
    {
        alert("Please fill the password")
    }
    else if(pword.length==1 || pword.length==2 || pword.length==3 || pword.length==4 || pword.length==5 || pword.length==6){
        alert("password should be more than 6 characters")
    }
    else if(pword != pword1){
        alert("password didn't match");
        return false;
    }
    else{
        alert("password match: Welcome to Everon School Website")
        window.location.assign("http://127.0.0.1:5501/results.html")
        return true;
    }
}