"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Televisor = /** @class */ (function () {
    function Televisor(canal, volumen) {
        this.canal = canal;
        this.volumen = volumen;
    }
    Televisor.prototype.prenderApagar = function () {
        this.encendido = !this.encendido;
    };
    Televisor.prototype.subirCanal = function () {
        this.canal++;
    };
    Televisor.prototype.bajarCanal = function () {
        this.canal--;
    };
    Televisor.prototype.elegirCanal = function (canal) {
        this.canal = canal;
    };
    return Televisor;
}());
var tv1 = new Televisor(2, 15);
var tv2 = new Televisor(10, 0);
tv1.elegirCanal(14);
console.log(tv1.subirCanal);
