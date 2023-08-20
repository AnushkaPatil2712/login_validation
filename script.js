function validate() {
    var username = document.getElementById("text1").value;
    var email = document.getElementById("text2").value;
    var password = document.getElementById("text3").value;
    var regx3=/^([a-zA-Z0-9\._]+)$/;
    var regx1 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    var regx2 = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9\_]+).([a-z]{2,20})$/;

    if (!regx3.test(username)) {
        alert("Incorrect username");
        return false;
    }
    else if (!regx2.test(email)) {
        alert("Incorrect email address");
        return false;
    }
    else if (!regx1.test(password)) {
        alert("password should have min 8 char and at least one lowercase letter, one uppercase letter, one numeric digit, and one special character");
        return false;
    }
    
    // If all validations pass, return true to submit the form
    return true;
}


    
