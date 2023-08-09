import { Vehiculo } from "./vehiculo";

class Camiones extends Vehiculo {
    private capCarga: number;

    constructor(tipo: string,
        marca: string,
        modelo: string,
        anio: number,
        patente: string,
        color: string,
        transmision: string,
        capCarga: number,
        cantPuertas: number

        ){
        super( tipo, marca, modelo, anio, patente, color, transmision, cantPuertas)
        this.capCarga = capCarga;
        this.transmision = transmision;
        this.cantPuertas= 2;
    }

    public CapacidadDeCarga(carga:number):string{
        if(carga <= 15){
            console.log(this.capCarga);
        }else{
            return 'Su carga supera la capacidad de carga. Libere el peso de la carga';
        }
        return(this.capCarga, 'Toneladas');
    }
}

let camionUno = new Camiones('Camion','Ford','Cargo', 2022, '1321DS13','Blanco','Manual',16, 2);

console.log(camionUno.CapacidadDeCarga(40));

console.log('-------');