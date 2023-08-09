"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
var Vehiculo = /** @class */ (function () {
    function Vehiculo(tipo, marca, modelo, anio, patente, color, transmision, cantPuertas) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.patente = patente;
        this.color = color;
        this.velocidad = 0;
        this.encendido = false;
        this.tipo = tipo;
        this.transmision = transmision;
        this.cantPuertas = cantPuertas;
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
var Auto = /** @class */ (function () {
    function Auto(patente, marca, modelo, anio) {
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }
    Auto.prototype.getPatente = function () {
        return this.patente;
    };
    Auto.prototype.getMarca = function () {
        return this.marca;
    };
    Auto.prototype.getModelo = function () {
        return this.modelo;
    };
    Auto.prototype.getAnio = function () {
        return this.anio;
    };
    return Auto;
}());
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor() {
        this.autos = [];
    }
    RegistroAutomotor.prototype.darDeAlta = function (auto) {
        this.autos.push(auto);
    };
    RegistroAutomotor.prototype.listar = function () {
        console.log("Lista de Automotores");
        console.log("-----------------------");
        this.autos.forEach(function (auto, indice) {
            console.log("".concat(indice + 1, " - ").concat(auto.getMarca(), " ").concat(auto.getModelo(), " (").concat(auto.getAnio(), ") Patente: ").concat(auto.getPatente()));
        });
        console.log();
        console.log();
        /* for (let index = 0; index < this.autos.length; index++) {
                const auto = this.autos[index];
                console.log(`${auto.getMarca()} ${auto.getModelo()} (${auto.getAnio()}) Patente: ${auto.getPatente()}`);
            } */
    };
    RegistroAutomotor.prototype.actualizar = function (auto) {
        var indiceAuto = -1;
        for (var index = 0; index < this.autos.length; index++) {
            var autoActual = this.autos[index];
            if (autoActual.getPatente() == auto.getPatente()) {
                indiceAuto = index;
            }
        }
        /* let indiceAuto = this.autos.findIndex((autoActual) => {
                return autoActual.getPatente() == auto.getPatente();
            });*/
        if (indiceAuto >= 0) {
            this.autos[indiceAuto] = auto;
        }
    };
    return RegistroAutomotor;
}());
