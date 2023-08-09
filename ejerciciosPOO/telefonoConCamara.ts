import { Telefono } from './telefono'

class TelefonoConCamara extends Telefono {
    public sacarFoto: boolean;
    private camaraTrasera: number;
    private camaraDelantera: number;

    constructor(camaraTrasera: number, camaraDelantera: number) {
        super(30, 10);
        this.sacarFoto = true;
        this.camaraTrasera = camaraTrasera;
        this.camaraDelantera = camaraDelantera;
    }

    public sacarfoto(): void {
        if(this.sacarFoto){
            console.log('Foto capturada con éxito')
        } else{
            console.log('No se ha podido realirar la captura de foto, inténtelo nuevamente')
        }
    }

    public getMegapixelesCamaraTrasera(): number {
        return this.camaraTrasera;
    }

    public getMegapixelesCamaraDelantera(): number {
        return this.camaraDelantera;
    }
}

let telefonoFotografico = new TelefonoConCamara (42, 28);



telefonoFotografico.getMegapixelesCamaraTrasera();

console.log(telefonoFotografico.getMegapixelesCamaraTrasera())
