
export class Animal {
    protected nombre : string;
    protected edad : number; 
    protected raza : string;

    public constructor (nombre : string, edad : number, raza : string){
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
    }

    public hacerSonido () : string{
        return "" ;
    }

    public moverse () : void{
    }

    public mostrarInfo(): string {
        return (this.nombre, this.raza);
    }
}

class Perro extends Animal {
    protected tamaño : string ; 

    public constructor (nombre : string, edad : number, raza : string, tamaño : string){
        super(nombre, edad, raza)
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
        this.tamaño = tamaño;
    }

    public buscarObjeto () : string {
        return "encontró el juguete";
    }

    public hacer_sonido () : string{
        return "¡guag!" 
    }

    public moverse () : void{
    }

    public mostrarInfo(): string {
        return (this.nombre, this.raza)
    }
}

class Gato extends Animal{
    private pelaje : string;

    public constructor(nombre: string, edad : number, raza : string, pelaje : string){
        super(nombre,edad,raza)
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
        this.pelaje = pelaje;
    }

    public jugar_con_juguete () : string {
        return "su michino esta jugando";
    }

    public hacer_sonido () : string{
        return "¡miau!" 
    }

    public moverse () : void{
    }

    public mostrarInfo(): string {
        return (this.nombre, this.raza)
    }

}

class Pajaro extends Animal {
    private tipo_de_pico : string;

    public constructor (nombre : string, edad : number, raza : string, tipo_de_pico: string){
        super(nombre,edad,raza)
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
        this.tipo_de_pico = tipo_de_pico;
    }

    public volar (): string{
        return "su pajaro está volando";
    }

    public hacer_sonido () : string{
        return "silban, cantan y chillan" 
    }

    public moverse () : void{
    }

    public mostrarInfo(): string {
        return (this.nombre, this.raza)
    }

}

let perro = new Perro('Ron', 5, 'Border Collie', 'Grande');
let gato = new Gato('Mish', 6, 'Calle', 'Peludo');
let pajaro =  new Pajaro('Negrito', 4, 'Carpintero', 'Punteagudo y duro');

console.log(perro, gato, pajaro);