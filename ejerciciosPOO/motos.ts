import { Vehiculo } from "./vehiculo";

class Motos extends Vehiculo{
    private cilindrada: number;

    constructor(tipo: string,
        marca: string,
        modelo: string,
        cilindrada: number,
        anio: number,
        patente: string,
        color: string,
        transmision: string,
        cantPuertas: number){
        super(tipo, marca, modelo, anio, patente, color, transmision, cantPuertas)
        this.cilindrada = cilindrada;
    }

    public verCilindrada(cilindrada: number): string{
    if(cilindrada === 50 || cilindrada === 125 || cilindrada === 150 || cilindrada === 250 ||  cilindrada === 300 ||  cilindrada === 500 ||  cilindrada === 1000 ||  cilindrada === 1200){
            console.log('Su cilindrada es de:',cilindrada,'cc');
        }else{
            return 'Su cilindrada es inexistente.';
        }
        return(this.cilindrada, 'Cilindradas.');
    }
}

let motoNueva = new Motos('Moto','Aprilia','Dorsoduro', 1200, 2022, '1321DS13','Blanco','Manual', 0)

console.log(motoNueva);