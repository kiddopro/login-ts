// creo una estructura de datos y la exporto para mantener la estructura de datos en un solo lugar y mantener tipado
export interface UserData {
  username: string;
  password: string;
  email?: string;
  age?: number;
}

// creo una estructura de metodos que extiende de UserData y la exporto para mantener la estructura de datos en un solo lugar y mantener tipado
export interface UserMethods extends UserData {
  login?(username: string, password: string): void;

  login?(username: string, password: string): Boolean;
  register?(username: string, password: string, email?: string): void;

  getInfo?(): void;
}

// creo una clase que implementa de UserMethods y la exporto para mantener la estructura de datos en un solo lugar y mantener tipado
export class User implements UserMethods {
  username: string;
  password: string;
  email?: string;

  constructor(username: string, password: string, email?: string) {
    this.username = username;
    this.password = password;
    this.email = email;
  }

  login(username: string, password: string): Boolean {
    console.log("Logging in...\n");
    return this.username == username && this.password == password
      ? true
      : false;
  }

  register(username: string, password: string, email?: string): void {
    this.username = username;
    this.password = password;
    this.email = email;
    console.log("Registering...");
  }

  getInfo(): void {
    console.log("Username: ", this.username);
    console.log("Email: ", this.email);
  }
}
