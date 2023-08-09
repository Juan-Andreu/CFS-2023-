export class Vehiculo {
  protected marca: string;
  protected modelo: string;
  protected anio: number;
  protected patente: string;
  protected color: string;
  protected velocidad: number;
  private encendido: boolean;
  protected numRuedas: number;
  protected transmision: string;
  protected cantPuertas: number;
  protected tipo: string;

   
  constructor(
    tipo: string,
    marca: string,
    modelo: string,
    anio: number,
    patente: string,
    color: string,
    transmision: string,
    cantPuertas:number
  ) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    this.patente = patente;
    this.color = color;
    this.velocidad = 0;
    this.encendido = false;
    this.tipo = tipo;
    this.transmision = transmision;
    this.cantPuertas = cantPuertas;
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

class Auto{
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


