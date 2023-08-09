"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
var Vehiculo = /** @class */ (function () {
    function Vehiculo(tipo, marca, modelo, anio, patente, color, transmision) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.patente = patente;
        this.color = color;
        this.velocidad = 0;
        this.encendido = false;
        this.tipo = tipo;
    }
    Vehiculo.prototype.prenderApagar = function () {
        this.encendido = !this.encendido;
    };
    Vehiculo.prototype.getPatente = function () {
        return this.patente;
    };
    Vehiculo.prototype.getMarca = function () {
        return this.marca;
    };
    Vehiculo.prototype.getModelo = function () {
        return this.modelo;
    };
    Vehiculo.prototype.getAnio = function () {
        return this.anio;
    };
    Vehiculo.prototype.getColor = function () {
        return this.color;
    };
    Vehiculo.prototype.acelerar = function () {
        this.velocidad++;
    };
    Vehiculo.prototype.desacelerar = function () {
        this.velocidad--;
    };
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;
