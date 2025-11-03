import { auth, signInWithEmailAndPassword } from "./config.js";

let email = document.getElementById("email");
let password = document.getElementById("password");
let loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener('click', loginUser);

function loginUser(e){
    e.preventDefault();
    if(!email.value || !password.value){
        alert("Please fill in the credidentials");
        return;
        }

    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert("Login successfully!");
            console.log("Logging in user:", user);
            setTimeout(()=>{
                window.location.href = "./dashboard.html"
                },1000);
                })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Login error:", error);
            alert(`(Code: ${errorCode})`);
            });
        }