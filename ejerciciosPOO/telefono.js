"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telefono = void 0;
var Telefono = /** @class */ (function () {
    function Telefono(bateriaActual, volumenActual) {
        this.bateriaActual = bateriaActual;
        if (this.bateriaActual >= 1) {
            this.estaPrendido = true;
        }
        else {
            this.estaPrendido = false;
        }
        this.volumenActual = 0;
    }
    Telefono.prototype.prendidoApagado = function () {
        if (this.estaPrendido) {
            this.estaPrendido = false;
            return ("su celular esta apagado");
        }
        else {
            this.estaPrendido = true;
            return ("su celular esta prendido");
        }
    };
    Telefono.prototype.cargarBateria = function () {
        if (this.bateriaActual >= 1) {
            if (this.bateriaActual < 100) {
                this.bateriaActual += 1;
                return ("su bateria actual esta al" + this.bateriaActual + "%");
            }
            else {
                return "su bateria esta completa";
            }
        }
        else
            return ("su telefono esta apagado");
    };
    Telefono.prototype.mostrarBateria = function () {
        if (this.bateriaActual === 0) {
            this.estaPrendido = false;
            return ("cargue su celular");
        }
        else
            return "su celular tiene " + this.bateriaActual + "% de bateria y está cargando";
    };
    Telefono.prototype.mandarMensaje = function (mensaje, destinatario) {
        // aca podriamos hacer que en cada mensaje se gaste un 1% de bateria por ejemplo
        // y que al enviar mensaje, antes se fije si esta prendido
        if (this.estaPrendido) {
            this.bateriaActual -= 1;
            return ("su mensaje : " + mensaje + ", ha sido enviado a" + destinatario);
        }
        else
            return "no se pudo enviar su mensaje porque el telefono esta apagado";
    };
    Telefono.prototype.hacerLlamada = function (destinatario) {
        if (this.estaPrendido) {
            this.bateriaActual -= 1;
            return ("llamando a " + destinatario);
        }
        else
            return "no se pudo realizar la llamada porque el telefono esta apagado";
    };
    Telefono.prototype.prenderApagar = function () {
        if (this.bateriaActual >= 1) {
            if (this.estaPrendido == true) {
                this.estaPrendido = false;
                return "se apago su celular";
            }
            else {
                this.estaPrendido = true;
                return "se prendio tu celular";
            }
        }
        else
            return "conecte su celular, no tiene bateria";
    };
    //agregar que no pueda pasar del 100% del volumen
    Telefono.prototype.subirVolumen = function () {
        if (this.volumenActual <= 100) {
            this.volumenActual += 1;
            return "sumaste 1% del volumen";
        }
        else
            return "tu volumen esta al maximo";
    };
    Telefono.prototype.bajarVolumen = function () {
        if (this.volumenActual >= 1) {
            this.volumenActual -= 1;
            return "bajaste 1% del volumen";
        }
        else {
            return "tu celular esta en silencio";
        }
    };
    return Telefono;
}());
exports.Telefono = Telefono;
var miTelefono = new Telefono(30, 10);
