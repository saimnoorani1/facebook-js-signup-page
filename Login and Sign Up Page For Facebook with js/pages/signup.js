let username = document.getElementById("name");
let sirname = document.getElementById("surname");
// let userdob = document.getElementById("dateofbirth");
let useryear = document.getElementById("year")
let usermonth = document.getElementById("month")
let userday = document.getElementById("day")
let genderfemale = document.getElementById("female");
let gendermale = document.getElementById("male");
let gendercustom = document.getElementById("custom");
let useremail = document.getElementById("email");
let userpassword = document.getElementById("pass");

function submitform() {
    if (!username.value || !sirname.value || !useryear.value || !usermonth.value || !userday.value || (!genderfemale.checked && !gendermale.checked && !gendercustom.checked) || !useremail.value || !userpassword.value) {
        return alert("All Fields Are Required Mandatory");
    }
    else {
        alert("Submit Successfully")



        let gender = "";

        if (genderfemale.checked) {
            gender = "Female";
        }
        else if (gendermale.checked) {
            gender = "Male";
        }
        else if (gendercustom.checked) {
            gender = "Custom";
        }


        console.log("First Name = ", username.value);
        console.log("Surname = ", surname.value);
        console.log("Year = ", useryear.value);
        console.log("Month = ", usermonth.value);
        console.log("Day = ", userday.value);
        console.log("Gender = ", gender);
        console.log("Email = ", useremail.value);
        console.log("Password = ", userpassword.value);
    }
}
