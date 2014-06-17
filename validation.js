function checkForm() {
 fname = document.getElementById("cons_first_name").value;
 lname = document.getElementById("cons_last_name").value;
 email = document.getElementById("cons_email").value;
 zip = document.getElementById("cons_zip_code").value;
 birthyear = document.getElementById("birth_year").value;

 if (fname == "")
 {
 hideAllErrors();
 document.getElementById("fnameError").style.display = "inline";
 document.getElementById("cons_first_name").select();
 document.getElementById("cons_first_name").focus();
 return false;
 }
 else if (lname == "")
 {
 hideAllErrors();
 document.getElementById("lnameError").style.display = "inline";
 document.getElementById("cons_last_name").select();
 document.getElementById("cons_last_name").focus();
 return false;
 }
 else if (email == "")
 {
 hideAllErrors();
 document.getElementById("emailError").style.display = "inline";
 document.getElementById("cons_email").select();
 document.getElementById("cons_email").focus();
 return false;
 }
 else if (zip == "")
 {
 hideAllErrors();
 document.getElementById("zipError").style.display = "inline";
 document.getElementById("cons_zip_code").select();
 document.getElementById("cons_zip_code").focus();
 return false;
 }
 else if (birthyear == "")
 {
 hideAllErrors();
 document.getElementById("yearError").style.display = "inline";
 document.getElementById("birth_year").select();
 document.getElementById("birth_year").focus();
 return false;
 }
 if (!checkEmail(email))
 {
 alert('Email address is invalid');
 return false;
 }
 return true;
}

function hideAllErrors() {
 document.getElementById("fnameError").style.display = "none";
document.getElementById("lnameError").style.display = "none";
 document.getElementById("emailError").style.display = "none";
document.getElementById("zipError").style.display = "none";
 document.getElementById("yearError").style.display = "none";
}

function checkEmail(inputvalue) {
 var pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
 return pattern.test(inputvalue);
}
