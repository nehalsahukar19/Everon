function show(){
    var usn=document.getElementById('usnfrm');
    usnExp =/[0-9][A-Z][A-Z][0-9][0-9][A-Z][A-Z][0-9][0-9][0-9]/
    if(usn.value.length==0){
        alert("Usn is empty");
        usn.focus();
        return false;
    }
    else if(!usn.value.match(usnExp))
    {
        alert("USN should be in VTU USN format, eg., 1GD10CS001");
        usn.focus();
        return false;
    }
    else if(usn.value=="1DS20AI034"){
        document.getElementById('image').style.display = "block";
        document.getElementById('btnID').style.display = "none";
    }
    else if(usn.value=="1DS20AI033"){
        document.getElementById('image1').style.display = "block";
        document.getElementById('btnID').style.display = "none";
    }
}
