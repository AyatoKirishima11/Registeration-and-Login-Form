import { auth, createUserWithEmailAndPassword } from "./config.js"; 

let email = document.getElementById("email");
let password = document.getElementById("password");
let signupBtn = document.getElementById("signupBtn");

signupBtn.addEventListener('click', registerUser);

function registerUser(e) {
    e.preventDefault();

    if (!email.value || !password.value) {
        alert("Please fill in the credentials");
        return;
        }

    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed up successfully
            const user = userCredential.user;
            alert("User registered successfully!");
            console.log("Registered user:", user);
            setTimeout(() => {
                window.location.href = "./dashboard.html";
                }, 1000);
                })
        .catch((error) => {
            // Handle registration error
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Registration error:", error);
            alert(`(Code: ${errorCode})`);
            });
        }





