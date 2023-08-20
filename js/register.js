import APP from "./app.js";
import Login from "./login.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

// Register
class Register {
    txtEmail;
    txtUserName;
    txtPassword;
    txtConfirmPass;
    btnSubmit;
    txtGotoLogin;
    errorMessage;
    formRegister;

    constructor() {
        this.txtEmail = document.createElement('input');
        this.txtEmail.type = 'email';
        this.txtEmail.classList.add('input');
        this.txtEmail.classList.add('w-full');
        this.txtEmail.classList.add('bg-black');
        this.txtEmail.classList.add('border-b');
        this.txtEmail.classList.add('bg-opacity-0');
        this.txtEmail.classList.add('text-white');
        this.txtEmail.classList.add('px-0');
        this.txtEmail.classList.add('py-4');
        this.txtEmail.classList.add('mb-4');
        this.txtEmail.classList.add('tm-border-gold');
        this.txtEmail.placeholder = 'Enter your email...';
        this.txtEmail.required = '';

        this.txtUserName = document.createElement('input');
        this.txtUserName.type = 'text';
        this.txtUserName.name = 'username';
        this.txtUserName.classList.add('input');
        this.txtUserName.classList.add('w-full');
        this.txtUserName.classList.add('bg-black');
        this.txtUserName.classList.add('border-b');
        this.txtUserName.classList.add('bg-opacity-0');
        this.txtUserName.classList.add('text-white');
        this.txtUserName.classList.add('px-0');
        this.txtUserName.classList.add('py-4');
        this.txtUserName.classList.add('mb-4');
        this.txtUserName.classList.add('tm-border-gold');
        this.txtUserName.placeholder = 'Enter username';
        this.txtUserName.required = '';

        this.txtPassword = document.createElement('input');
        this.txtPassword.type = 'password';
        this.txtPassword.classList.add('input');
        this.txtPassword.classList.add('w-full');
        this.txtPassword.classList.add('bg-black');
        this.txtPassword.classList.add('border-b');
        this.txtPassword.classList.add('bg-opacity-0');
        this.txtPassword.classList.add('text-white');
        this.txtPassword.classList.add('px-0');
        this.txtPassword.classList.add('py-4');
        this.txtPassword.classList.add('mb-4');
        this.txtPassword.classList.add('tm-border-gold');
        this.txtPassword.placeholder = 'Enter your password...';
        this.txtPassword.required = '';

        this.txtConfirmPass = document.createElement('input');
        this.txtConfirmPass.type = 'password';
        this.txtConfirmPass.classList.add('input');
        this.txtConfirmPass.classList.add('w-full');
        this.txtConfirmPass.classList.add('bg-black');
        this.txtConfirmPass.classList.add('border-b');
        this.txtConfirmPass.classList.add('bg-opacity-0');
        this.txtConfirmPass.classList.add('text-white');
        this.txtConfirmPass.classList.add('px-0');
        this.txtConfirmPass.classList.add('py-4');
        this.txtConfirmPass.classList.add('mb-4');
        this.txtConfirmPass.classList.add('tm-border-gold');
        this.txtConfirmPass.placeholder = 'Confirm your password';
        this.txtConfirmPass.required = '';

        this.btnSubmit = document.createElement('button');
        this.btnSubmit.type = 'submit';
        this.btnSubmit.classList.add('text-white');
        this.btnSubmit.classList.add('btn');
        this.btnSubmit.innerHTML = 'Submit';

        this.txtGotoLogin = document.createElement('a');
        this.txtGotoLogin.innerHTML = 'Already have account?';
        this.txtGotoLogin.classList.add('login-link');
        this.txtGotoLogin.addEventListener('click', this.goToLogin);

        this.errorMessage = document.createElement('p');
        this.errorMessage.classList.add('error');

        this.formRegister = document.createElement('form');
        this.formRegister.action = '#';
        this.formRegister.addEventListener('submit', this.handleSumit);
    }

    handleSumit = (e) => {
        e.preventDefault();
        const email = this.txtEmail.value;
        const pass = this.txtPassword.value;
        const confirmPass = this.txtConfirmPass.value;
        const username = this.txtUserName.value;
        // this.setError('Successful');

        if (email === "") {
            this.setError('Email can not be empty !');
            return;
        }
        if (username === '') {
            this.setError('Username can not be empty !');
            return;
        }
        if (pass === '') {
            this.setError('Password can not be empty !');
            return;
        }
        if (confirmPass === '') {
            this.setError('Confirm your password !');
            return;
        }
        if (pass != confirmPass) {
            this.setError('Your password are not match !');
            return;
        }
        if (pass.trim().length <= 6) {
            this.setError('Password must be at least 6 characters.');
            return;
        }

        const firebaseConfig = {
            apiKey: "AIzaSyASDbdg7Qh0ZajXJszAknfZe0PGpBwWyp4",
            authDomain: "project-jsi-3fd66.firebaseapp.com",
            projectId: "project-jsi-3fd66",
            storageBucket: "project-jsi-3fd66.appspot.com",
            messagingSenderId: "764242216781",
            appId: "1:764242216781:web:d2d95daf8c330e4abd9904",
            measurementId: "G-YGXR99S4XX"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
        // Sign up initialize
        const auth = getAuth(app);

        createUserWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                this.setError('Sign up successfully');
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                this.setError('User existed. Please sign up again');
                // ..
            });
    }

    setError = (content) => {
        this.errorMessage.innerHTML = content;
        if (content != '') {
            this.errorMessage.style.display = 'block';
        } else {
            this.errorMessage.style.display = 'none';
        }
    }

    goToLogin = () => {
        const login = new Login();
        APP.changeActiveScreen(login);
    }

    initRender = (ccc) => {
        const textRight = document.createElement('div');
        textRight.classList.add('text-right');
        textRight.appendChild(this.btnSubmit)
        const card_GoToLogin = document.createElement('div');
        card_GoToLogin.classList.add('login-register');
        card_GoToLogin.appendChild(this.txtGotoLogin);
        const title = document.createElement('h2');
        title.classList.add('login');
        title.innerHTML = 'Create an account';

        this.formRegister.appendChild(this.txtUserName);
        this.formRegister.appendChild(this.txtEmail);
        this.formRegister.appendChild(this.txtPassword);
        this.formRegister.appendChild(this.txtConfirmPass);
        this.formRegister.appendChild(textRight);
        this.formRegister.appendChild(card_GoToLogin);
        this.formRegister.appendChild(this.errorMessage);

        ccc.appendChild(title)
        ccc.appendChild(this.formRegister);
    }
}

export default Register;
