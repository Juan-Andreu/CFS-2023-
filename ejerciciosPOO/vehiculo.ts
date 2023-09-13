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
  private matriz: Matriz; 

  constructor(filas: number, columnas: number) {
      this.autos = [];
      this.matriz = new Matriz(filas, columnas);
  }

  darDeAlta(auto: Auto) {
      this.autos.push(auto);
      // Agrega el auto a la matriz en X posicion
      this.matriz.set(this.autos.length - 1, 0, auto);
  }

  listar(): void {
      console.log("Lista de Automotores")
      console.log("----------------------------------------------------------")
      this.autos.forEach((auto: Auto, indice: number) => {
          console.log(`${indice + 1} - ${auto.getMarca()} ${auto.getModelo()} (${auto.getAnio()}) Patente: ${auto.getPatente()}`);
      });
      console.log();
      console.log();
  }

  actualizar(auto: Auto): void {
      let indiceAuto = -1;
      for (let index = 0; index < this.autos.length; index++) {
          const autoActual = this.autos[index];
          if (autoActual.getPatente() == auto.getPatente()) {
              indiceAuto = index;
          }
      }

      if (indiceAuto >= 0) {
          this.autos[indiceAuto] = auto;
          // Actualiza la matriz con el auto en la misma posición que está en el registro 
          this.matriz.set(indiceAuto, 0, auto);
      }
  }

  eliminar(patente: string): void {
      let indiceAuto = -1;
      for (let index = 0; index < this.autos.length; index++) {
          const autoActual = this.autos[index];
          if (autoActual.getPatente() == patente) {
              indiceAuto = index;
          }
      }

      if (indiceAuto >= 0) {
          this.autos.splice(indiceAuto, 1);
          // Elimina el auto de la matriz en la misma posición que está en el registro del automotor 
          this.matriz.set(indiceAuto, 0, null);
      }
  }
}

class Matriz {
  private datos: any[][];

  constructor(filas: number, columnas: number) {
      this.datos = new Array(filas);
      for (let i = 0; i < filas; i++) {
          this.datos[i] = new Array(columnas);
      }
  }

  set(x: number, y: number, valor: any): void {
      if (this.esIndiceValido(x, y)) {
          this.datos[x][y] = valor;
      } else {
          throw new Error("Índices fuera de rango.");
      }
  }

  get(x: number, y: number): any {
      if (this.esIndiceValido(x, y)) {
          return this.datos[x][y];
      }
      return null;
  }

  private esIndiceValido(x: number, y: number): boolean {
      return x >= 0 && x < this.datos.length && y >= 0 && y < this.datos[0].length;
  }
}

const registroAutomotor = new RegistroAutomotor(10, 1); // 10 filas y 1 columna
registroAutomotor.darDeAlta(new Auto('AE482OY', 'Ford', 'KA', 2020));
registroAutomotor.darDeAlta(new Auto('OIM038', 'VOLKSWAGEN', 'AMAROK', 2014));
registroAutomotor.listar();
registroAutomotor.actualizar(new Auto('NAZ339', 'VOLKSWAGEN', 'Gol', 2013));
registroAutomotor.listar();
registroAutomotor.eliminar('AE482OY');
registroAutomotor.listar();