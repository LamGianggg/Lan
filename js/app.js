import Login from "./login.js";
import Register from "./register.js";

// APP
class App {
    activeScreen;
    container;

    constructor(container) {
        this.container = container;
    }

    changeActiveScreen(screen) {
        if (this.activeScreen !== undefined) {
            this.container.innerHTML = '';
            if (this.container.classList.contains('active')) {
                this.container.classList.remove('active');
            } else {
                this.container.classList.add('active');
            }
        }
        this.activeScreen = screen;
        this.activeScreen.initRender(this.container);
    }
}

const app = document.querySelector('.flex-3');

// Object created by Register Class
const newRegister = new Register();
// Object created by Login class
const newLogin = new Login();
// Object created by App class
const APP = new App(app);

APP.changeActiveScreen(newLogin);

export default APP;


