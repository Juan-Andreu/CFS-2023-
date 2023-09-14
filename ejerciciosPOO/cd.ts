class cancion {
    private titulo: string;
    private autor: string;
  
    constructor(titulo: string = "", autor: string = "") {
      this.titulo = titulo;
      this.autor = autor;
    }
  
    public mostrarTitulo(): string {
      return this.titulo;
    }
  
    public mostrarAutor(): string {
      return this.autor;
    }
  
    public ponerTitulo(titulo: string): void {
      this.titulo = titulo;
    }
  
    public ponerAutor(autor: string): void {
      this.autor = autor;
    }
  }
  
  class CD {
    private canciones: cancion[];
    private contador: number;
  
    constructor() {
      this.canciones = [];
      this.contador = 0;
    }
  
    public contarCanciones(): number {
      return this.contador;
    }
  
    public mostrarCancion(posicion: number): cancion | null {
      if (posicion >= 0 && posicion < this.contador) {
        return this.canciones[posicion];
      } else {
        return null; 
      }
    }
  
    public grabarCancion(posicion: number, nuevaCancion: cancion): void {
      if (posicion >= 0 && posicion < this.contador) {
        this.canciones[posicion] = nuevaCancion;
      }
    }
  
    public agregar(nuevaCancion: cancion): void {
      this.canciones.push(nuevaCancion);
      this.contador++;
    }
  
    public eliminar(posicion: number): void {
      if (posicion >= 0 && posicion < this.contador) {
        this.canciones.splice(posicion, 1);
        this.contador--;
      }
    }
  }
  
  let miCD = new CD();
  
  let cancion1 = new cancion("Solo aqui", "Airbag");
  let cancion2 = new cancion("Marchate ahora", "Los totora");
  let cancion3 = new cancion("Cactus", "Gustavo Cerati");
  
  miCD.agregar(cancion1);
  miCD.agregar(cancion2);
  miCD.agregar(cancion3);
  
  console.log("En el cd hay: ", miCD.contarCanciones(), "canciones");
  console.log("Canción número: ", miCD.mostrarCancion(1));
  
  miCD.eliminar(0);
  
  console.log("Número de canciones en el CD después de eliminar:", miCD.contarCanciones());
  
  console.log(miCD);