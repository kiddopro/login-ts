var _a, _b;
// importamos las interfaces y clases con la estructura que necesitamos
import { User } from "./script.js";
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const email = (_a = document.querySelector("#email")) !== null && _a !== void 0 ? _a : undefined; //se puede usar || en lugar de ?? si se quiere soportar navegadores antiguos pero es menos preciso
const loginForm = document.querySelector("#login-form");
const errorMsg = (_b = document.querySelector("#error-msg")) !== null && _b !== void 0 ? _b : undefined;
const user = new User("admin", "admin", "gH6r9@example.com");
loginForm.addEventListener("submit", (e) => {
    const usr = username.value.trim();
    const pwd = password.value.trim();
    e.preventDefault(); //para prevenir que se recargue la pagina
    const logged = user.login(usr, pwd);
    if (!logged) {
        errorMsg.innerHTML = "Invalid credentials";
        errorMsg.style.color = "red";
        cleanMessage();
        return;
    }
    errorMsg.innerHTML = "Logged in!";
    errorMsg.style.color = "green";
    cleanMessage();
});
function cleanMessage() {
    setTimeout(() => {
        errorMsg.innerHTML = "";
    }, 3000);
}
