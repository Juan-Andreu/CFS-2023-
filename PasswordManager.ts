// Diferentes tipos de password, y a su vez poder usar esos password como autenticadores

interface Autenticador {
  autenticar(password: string): boolean;
}

abstract class Password implements Autenticador {
  private longitudMinima: number;
  private incluyeNumero: boolean;
  private incluyeMayuscula: boolean;

  constructor(
    longituMinima: number,
    incluyeNumero: boolean,
    incluyeMayuscula: boolean
  ) {
    this.longitudMinima = longituMinima;
    this.incluyeNumero = incluyeNumero;
    this.incluyeMayuscula = incluyeMayuscula;
  }

  esPasswordValido(password: string): boolean {
    let PasswordValid: boolean = true;
    if (password.length < this.longitudMinima) {
      PasswordValid = false;
    }
    if (this.incluyeNumero) {
      let tieneNumero: boolean = false;
      for (let index = 0; index < password.length; index++) {
        const caracter = password[index];
        // '1234567890'.includes(caracter) es lo mismo que preguntar si caracter es un numero
        tieneNumero = tieneNumero || "1234567890".includes(caracter);
      }

      if (!tieneNumero) {
        PasswordValid = false;
      }
    }

    if (this.incluyeMayuscula) {
      let tieneMayuscula: boolean = false;
      for (let index = 0; index < password.length; index++) {
        const caracter = password[index];
        tieneMayuscula = tieneMayuscula || caracter.toUpperCase() == caracter;
      }
      if (!tieneMayuscula) {
        PasswordValid = false;
      }
    }
    return PasswordValid;
  }

  abstract autenticar(password: string): boolean;
}

class PasswordDebil extends Password {
  constructor() {
    super(5, false, false);
  }

  autenticar(password: string): boolean {
    return false;
  }
}

class PasswordFuerte extends Password {
  constructor() {
    super(8, true, true);
  }

  autenticar(password: string): boolean {
    return false;
  }
}

class DbAutenticator implements Autenticador{
    autenticar(password: string): boolean {
        return false;
      }
}

let pwdManager:Password = new PasswordDebil();
pwdManager.esPasswordValido('Holaaa');

let pwdMnager2:Autenticador = new PasswordFuerte();
pwdMnager2.autenticar("adsad");



