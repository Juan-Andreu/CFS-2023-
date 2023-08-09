import * as readlineSync from 'readline-sync';


class Televisor {
    private canalActual: number;
    private volumenActual: number;
    private encendido: boolean;
  
    constructor(canalActual: number, volumenActual: number){
        this.canalActual = canalActual;
        this.volumenActual = volumenActual; 
    }

    prenderApagar(): void {
      this.encendido = !this.encendido;
    }
  
    subirCanal(): void {
      this.canalActual++; 
    }
  
    bajarCanal(): void {
      this.canalActual--;
    }
  
    elegirCanal(canal: number): void {
        this.canalActual = canal;
    }
  }

let tv1 = new Televisor(2, 15);
let tv2 = new Televisor(10, 0);
tv1.elegirCanal(14);

console.log(tv1);
