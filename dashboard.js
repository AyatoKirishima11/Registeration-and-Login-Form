import { auth, signOut } from "./config.js";

        let signoutBtn = document.getElementById("signoutBtn");

        signoutBtn.addEventListener('click', signoutUser);

        function signoutUser(e){
            e.preventDefault();

            signOut(auth)
                .then(() => {
                    // Sign-out successful.
                    setTimeout(()=>{
                    window.location.href = "./login.html"
                    },1000);
                    })
                .catch((error) => {
                    // An error happened.
                    });
            }