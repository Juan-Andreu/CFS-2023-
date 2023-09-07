class Saludo {
  public static saludo: string = "Hola ";
  public nombre: string;
  constructor(nombre: string) {
    this.nombre = nombre;
  }
  saludar() {
    console.log(`${Saludo.saludo} ${this.nombre}`);
  }
  equals(obj: Saludo) {
    return this.nombre == obj.nombre;
  }
}
const sal1 = new Saludo("Erick");
const sal2 = new Saludo("Erick");
const sal3 = new Saludo("Oracio");

sal1.saludar();
sal2.saludar();
Saludo.saludo = "Chau";
sal3.saludar();
sal1.saludar();
sal2.saludar();
console.log(sal1.equals(sal2));
