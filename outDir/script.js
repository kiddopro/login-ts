// creo una clase que implementa de UserMethods y la exporto para mantener la estructura de datos en un solo lugar y mantener tipado
export class User {
    constructor(username, password, email) {
        this.username = username;
        this.password = password;
        this.email = email;
    }
    login(username, password) {
        console.log("Logging in...\n");
        return this.username == username && this.password == password
            ? true
            : false;
    }
    register(username, password, email) {
        this.username = username;
        this.password = password;
        this.email = email;
        console.log("Registering...");
    }
    getInfo() {
        console.log("Username: ", this.username);
        console.log("Email: ", this.email);
    }
}
