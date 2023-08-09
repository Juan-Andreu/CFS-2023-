import { Telefono } from './telefono'

class TelefonoConRadio extends Telefono{
    private frecuenciaActual : number;

    public constructor () {
        super(30, 10)
        this.frecuenciaActual = 107.1;
    }

    getFrecenciaActual(): number{
        return this.frecuenciaActual;
    }

    public subirFrecuencia():number{
        return this.frecuenciaActual++;
    }

    public bajarFrecuencia():number{
        return this.frecuenciaActual--;
    }
}

let nokia = new TelefonoConRadio();

nokia.subirFrecuencia();

console.log(nokia.subirFrecuencia())

