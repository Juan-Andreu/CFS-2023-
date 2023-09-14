export class Animal {
    protected nombre : string;
    protected edad : number;

    constructor(){}
    
    public comer () : string{
        return "Su animal está comiendo";
    }

    public dormir () : string{
        return "Su animal está durmiendo";
    }
}

export class Mamifero extends Animal {
    private pelaje : string;

    public constructor (nombre : string, edad : number, tipoDePelaje: string){
        super()
        this.nombre = nombre;
        this.edad = edad;
        this.pelaje = tipoDePelaje
    }

    public amamantarCrias () : string{
        return "Su animal está amamantando";
    }
}

class Reptil extends Animal {
    private escamas : string;

    public constructor (nombre: string, edad: number, tipoDeEscamas : string){
        super()
        this.nombre = nombre;
        this.edad = edad;
        this.escamas = tipoDeEscamas;
    }

    public regularTemperaturaCorporal () : string {
        return "El reptil cambió sus escamas, ya reguló su temperatura corporal";
    }
}

class Murcielago extends Mamifero{
    private habilidades : string;

    public constructor(nombre: string, edad : number, tipoDePelaje: string, habilidades : string){
        super(nombre,edad,tipoDePelaje)
        this.nombre = nombre;
        this.edad = edad;
        this.habilidades = habilidades;
    }

    public utilizarEcolocalizacion () : string{
        return "Su murcielago se está moviendo, para poder ubicarse en el entorno";
    }
}

let mamifero1 = new Mamifero('Mamifero',8, 'largo y suave');
let reptil1 = new Reptil ('Serpiente',3,'Esscmas rigidas')
let murcielago1 = new Mamifero ('Murcielago', 1, 'Pelaje corto, suave de color negro o café');

console.log(mamifero1);
console.log('---------------');
console.log(reptil1);
console.log('---------------');
console.log(murcielago1);