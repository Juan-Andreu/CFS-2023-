import * as readlineSync from 'readline-sync';
//  < Programacion Orientada a Objetos >

//  --- Clases y Herencias ---

/* class auto{
    marca: string;
    modelo: string;
    anio: number;
    patente: string;
    color: string;
    velocidad: number;
    encendido: boolean;

    constructor(marca: string, modelo: string, anio: number, patente: string,
        color: string){
            this.marca = marca;
            this.modelo = modelo;
            this.anio = anio;
            this.patente = patente;
            this.color = color;
            this.velocidad = 0
            this.encendido = false;
    }

    prenderApagar(): void {
        this.encendido = !this.encendido;
      }

    getPatente(): string {
               return this.patente;
             }
          
    getMarca(): string {
               return this.marca;
             }
          
    getModelo(): string {
               return this.modelo;
             }
          
     getAnio(): number {
               return this.anio;
             }
          
    getColor(): string {
               return this.color;
             }

    acelerar(): void {
        this.velocidad++;
    }

    desacelerar(): void {
        this.velocidad--;
    }      
}

let auto1 = new auto('Ford', 'Ranger Raptor', 2022, 'axf2112', 'Rojo');
auto1.prenderApagar();
auto1.acelerar();
auto1.acelerar();
auto1.acelerar();
auto1.acelerar();
auto1.acelerar();

console.log(auto1); */

class Auto {
  private patente: string;
  private marca: string;
  private modelo: string;
  private anio: number;

  constructor(patente: string, marca: string, modelo: string, anio: number) {
    this.patente = patente;
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
  }

  getPatente(): string {
    return this.patente;
  }

  getMarca(): string {
    return this.marca;
  }

  getModelo(): string {
    return this.modelo;
  }

  getAnio(): number {
    return this.anio;
  }
}

class RegistroAutomotor {
  private autos: Auto[];
  

  constructor() {
    this.autos = [];
  }

  darDeAlta(auto: Auto) {
    this.autos.push(auto);
  }

  listar(): void {
    console.log("Lista de Automotores");
    console.log("-----------------------");
    this.autos.forEach((auto, indice: number) => {
      console.log(
        `${
          indice + 1
        } - ${auto.getMarca()} ${auto.getModelo()} (${auto.getAnio()}) Patente: ${auto.getPatente()}`
      );
    });

    console.log();
    console.log();
    /* for (let index = 0; index < this.autos.length; index++) {
            const auto = this.autos[index];
            console.log(`${auto.getMarca()} ${auto.getModelo()} (${auto.getAnio()}) Patente: ${auto.getPatente()}`);
        } */
  }

  actualizar(auto: Auto): void {
    let indiceAuto = -1;
    for (let index = 0; index < this.autos.length; index++) {
      const autoActual = this.autos[index];
      if (autoActual.getPatente() == auto.getPatente()) {
        indiceAuto = index;
      }
    }
    /* let indiceAuto = this.autos.findIndex((autoActual) => {
            return autoActual.getPatente() == auto.getPatente();
        });*/
    if (indiceAuto >= 0) {
      this.autos[indiceAuto] = auto;
    }
  }
}

/* let ra = new RegistroAutomotor();
let auto1 = new Auto("AB65R0", "Ford", "f150 Raptor", 2022);
ra.darDeAlta(auto1);
ra.darDeAlta(new Auto("RQ65R0", "Ford", "Focus RS", 2023));
ra.darDeAlta(new Auto("YU66R0", "Nissan", "GTR", 2009));
ra.darDeAlta(new Auto("NI32R0", "Toyota", "Yaris GR", 2021));
ra.darDeAlta(new Auto("RER3R0", "Peugeot", "208 GT", 2023));
ra.listar();
ra.actualizar(new Auto("YU66R0", "Nissan", "SKYLINE", 2009));
ra.listar();

console.log(auto1); */

   class libro {
     private titulo: string;
     private autor: string;
     private cantCapitulos: number;
     private cantHojas: number;
     private editorial: string;
     private venta: boolean;

     constructor(
       titulo: string,
       autor: string,
       cantCapitulos: number,
       cantHojas: number,
       editorial: string
     ) {
       this.titulo = titulo;
       this.autor = autor;
       this.cantCapitulos = 0;
       this.cantHojas = cantHojas;
       this.editorial = editorial;
     }

     getTitulo(): string {
       return this.titulo;
     }

     getAutor(): string {
       return this.autor;
     }

     public getCantCapitulos(capitulos: number) {
      capitulos = this.cantCapitulos;
       return this.cantCapitulos;
     }

     public getCanHojas(): number {
       return (this.cantHojas += 1);
     }

     getEditorial(editorial: string): void {
       this.editorial === editorial;
     }

     getVenta(venta: boolean): void {
       if (this.venta = true) {
         let venta = "Su venta a sido confirmada";
       } else {
         let venta = "Su venta ha sido rechazada";
       }
     }
   }

  
   let libro1 = new libro('Hoa', 'carlos', 5, 360, 'Santillana');
libro1.getVenta(true);
console.log(libro1.getVenta(true));


