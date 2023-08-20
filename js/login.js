import APP from "./app.js";
import Register from "./register.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

// Login
class Login {
    txtEmail;
    txtPassword;
    errorMessage;
    btnSubmit;
    txtGoToRegister;
    formLogin;

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

        this.btnSubmit = document.createElement('button');
        this.btnSubmit.type = 'submit';
        this.btnSubmit.classList.add('text-white');
        this.btnSubmit.classList.add('btn');
        this.btnSubmit.innerHTML = 'Login';

        this.txtGoToRegister = document.createElement('a');
        this.txtGoToRegister.innerHTML = 'Do not account yet ?';
        this.txtGoToRegister.classList.add('register-link');
        this.txtGoToRegister.addEventListener('click', this.goToRegister);

        this.errorMessage = document.createElement('p');
        this.errorMessage.classList.add('error');

        this.formLogin = document.createElement('form');
        this.formLogin.addEventListener('submit', this.handleSumit);
        this.formLogin.action = '#';
        this.formLogin.method = 'POST';
        this.formLogin.classList.add('text-lg');
    }

    handleSumit = (e) => {
        e.preventDefault();
        const email = this.txtEmail.value;
        const pass = this.txtPassword.value;

        // this.setError('Successful');

        if (email === "") {
            this.setError('Please input again');
            return;
        }
        if (pass === '') {
            this.setError('Please input again');
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
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                this.setError('Sign in successfully');
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                this.setError('Wrong');
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

    goToRegister = () => {
        const register = new Register();
        APP.changeActiveScreen(register);
    }

    initRender = (container) => {
        const textRight = document.createElement('div');
        textRight.classList.add('text-right');
        textRight.appendChild(this.btnSubmit)
        const card_GoToRegister = document.createElement('div');
        card_GoToRegister.classList.add('login-register');
        card_GoToRegister.appendChild(this.txtGoToRegister);
        const title = document.createElement('h2');
        title.classList.add('login');
        title.innerHTML = 'Login';

        this.formLogin.appendChild(this.txtEmail);
        this.formLogin.appendChild(this.txtPassword);
        this.formLogin.appendChild(textRight);
        this.formLogin.appendChild(card_GoToRegister);
        this.formLogin.appendChild(this.errorMessage);

        container.appendChild(title);
        container.appendChild(this.formLogin);
    }
}

// const formLogin = new Login();
// formLogin.initRender(app);

export default Login;