const username = document.getElementById('username');
const password = document.getElementById('password');
const submitBtn = document.getElementById('submitBtn');

var accessName = "johnsmith";
var accessPass = "scope123";

// For click event on submit button.

submitBtn.addEventListener('click', function(){
    if(username.value === "" || password.value === ""){
        alert("Please enter the login information.");    
    }
    else{
        if(username.value === accessName && password.value === accessPass){
            alert("Welcome " + `${accessName}`);
            username.value = "";
            password.value = "";
        }
        else{
            alert("There is an imposter AMONG US ඞ")
            username.style.color = "Red";
            password.style.color = "Red";
        }
        }
    });
 
