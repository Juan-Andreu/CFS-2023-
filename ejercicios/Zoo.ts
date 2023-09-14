interface Animal {
    emitirSonido(): string;
    mostrarInfo(): string;
  }
  
  class AnimalDelZoo implements Animal {
    protected nombre: string;
    protected especie: string;
  
    constructor(Nombre: string, Especie: string) {
      this.nombre = Nombre;
      this.especie = Especie;
    }
  
    public emitirSonido(): string {
      return "";
    }
  
    public mostrarInfo(): string {
      return `Nombre: ${this.nombre}, Especie: ${this.especie}`;
    }
  }
  
  class Leon extends AnimalDelZoo {
    private edad: number;
    private pelaje: string;
  
    constructor(Nombre: string, edad: number, pelaje: string) {
      super(Nombre, "León");
      this.edad = edad;
      this.pelaje = pelaje;
    }
  
    public emitirSonido(): string {
      return "Rugir";
    }
  }
  
  
  class Elefante extends AnimalDelZoo {
    private peso: number;
    private largoTrompa: string;
    private altura: string;
  
    constructor(Nombre: string, cuantoPesa: number, Trompa: string, cuantoMide: string) {
      super(Nombre, "Elefante");
      this.peso = cuantoPesa;
      this.largoTrompa = Trompa;
      this.altura = cuantoMide;
    }
  
    public emitirSonido(): string {
      return "Barritar";
    }
  }
  
  class Delfin extends AnimalDelZoo {
    private alimentacion: string;
    private habitat: string;
    private clasificacion: string;
  
    constructor(Nombre: string, queCome: string, dondeHabita: string, grupo: string) {
      super(Nombre, "Delfin");
      this.alimentacion = queCome;
      this.habitat = dondeHabita;
      this.clasificacion = grupo;
    }
  
    public emitirSonido(): string {
      return "Silbidos y Chasquidos";
    }
  }
  

  const animales: Animal[] = [
    new Leon("Tiger", 7, "Dorado"),
    new Elefante("Arturo", 255, "120cm", "2 metros"),
    new Delfin("Piolin", "Peces, es carnívoro", "Océanos", "Mamífero"),
  ];
  
  for (const animal of animales) {
    console.log(animal.mostrarInfo());
    console.log(animal.emitirSonido());
    console.log("----");
  }
  

  