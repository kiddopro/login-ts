// importamos las interfaces y clases con la estructura que necesitamos
import { User, UserMethods, UserData } from "./script.js";

const username = document.querySelector<HTMLInputElement>("#username")!;
const password = document.querySelector<HTMLInputElement>("#password")!;
const email = document.querySelector<HTMLInputElement>("#email") ?? undefined; //se puede usar || en lugar de ?? si se quiere soportar navegadores antiguos pero es menos preciso
const loginForm = document.querySelector<HTMLFormElement>("#login-form")!;
const errorMsg =
  document.querySelector<HTMLSpanElement>("#error-msg")! ?? undefined;

const user = new User("admin", "admin", "gH6r9@example.com");

loginForm.addEventListener("submit", (e) => {
  const usr: string = username.value.trim();
  const pwd: string = password.value.trim();
  e.preventDefault(); //para prevenir que se recargue la pagina

  const logged: Boolean = user.login(usr, pwd);

  if (!logged) {
    errorMsg!.innerHTML = "Invalid credentials";
    errorMsg!.style.color = "red";
    cleanMessage();
    return;
  }

  errorMsg!.innerHTML = "Logged in!";
  errorMsg!.style.color = "green";

  cleanMessage();
});

function cleanMessage() {
  setTimeout(() => {
    errorMsg!.innerHTML = "";
  }, 3000);
}
