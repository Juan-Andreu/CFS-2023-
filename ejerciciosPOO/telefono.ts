export class Telefono {
    private estaPrendido: boolean;
    private bateriaActual: number;
    private volumenActual: number;

    public constructor(bateriaActual: number, volumenActual: number) {
        this.bateriaActual = bateriaActual;
        if (this.bateriaActual >= 1) {
            this.estaPrendido = true
        } else{
            this.estaPrendido = false;}
        this.volumenActual = 0;
    }

    public prendidoApagado(): string {
        if (this.estaPrendido) {
            this.estaPrendido = false;
            return ("su celular esta apagado")
        }
        else {
            this.estaPrendido = true;
            return ("su celular esta prendido")
        }
    }

    public cargarBateria(): string {
        if (this.bateriaActual >= 1) {
            if (this.bateriaActual < 100) {
                this.bateriaActual += 1
                return ("su bateria actual esta al" + this.bateriaActual + "%")
            }
            else {
                return "su bateria esta completa"
            }
        }
        else
            return ("su telefono esta apagado")
    }

    public mostrarBateria(): string {
        if (this.bateriaActual === 0) {
            this.estaPrendido = false
            return ("cargue su celular")
        } else
            return "su celular tiene " + this.bateriaActual + "% de bateria y está cargando"
    }



    public mandarMensaje(mensaje: string, destinatario: string): string {
        // aca podriamos hacer que en cada mensaje se gaste un 1% de bateria por ejemplo
        // y que al enviar mensaje, antes se fije si esta prendido
        if (this.estaPrendido) {
            this.bateriaActual -= 1;
            return ("su mensaje : " + mensaje + ", ha sido enviado a" + destinatario);
        } else
            return "no se pudo enviar su mensaje porque el telefono esta apagado";
    }

    public hacerLlamada(destinatario: string): string {
        if (this.estaPrendido) {
            this.bateriaActual -= 1;
            return ("llamando a " + destinatario);
        } else
            return "no se pudo realizar la llamada porque el telefono esta apagado";
    }


    public prenderApagar(): string {
        if (this.bateriaActual >= 1) {
            if (this.estaPrendido == true) {
                this.estaPrendido = false;
                return "se apago su celular";
            } else {
                this.estaPrendido = true;
                return "se prendio tu celular";
            }

        } else
            return "conecte su celular, no tiene bateria";
    }


    //agregar que no pueda pasar del 100% del volumen
    public subirVolumen(): string {
        if (this.volumenActual <= 100) {
            this.volumenActual += 1
            return "sumaste 1% del volumen";
        } else
            return "tu volumen esta al maximo";
    }

    public bajarVolumen(): string {
        if (this.volumenActual >= 1) {
            this.volumenActual -= 1
            return "bajaste 1% del volumen";
        } else {
            return "tu celular esta en silencio";
        }
    }
}

let miTelefono = new Telefono(30, 10);



