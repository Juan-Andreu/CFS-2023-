"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var vehiculo_1 = require("./vehiculo");
var Camiones = /** @class */ (function (_super) {
    __extends(Camiones, _super);
    function Camiones(tipo, marca, modelo, anio, patente, color, transmision, capCarga) {
        var _this = _super.call(this, tipo, marca, modelo, anio, patente, color, transmision) || this;
        _this.capCarga = capCarga;
        _this.transmision = transmision;
        return _this;
    }
    Camiones.prototype.CapacidadDeCarga = function (carga) {
        if (carga <= 15) {
            console.log(this.capCarga);
        }
        else {
            return 'Su carga supera la capacidad de carga. Libere el peso de la carga';
        }
        return (this.capCarga, 'Toneladas');
    };
    return Camiones;
}(vehiculo_1.Vehiculo));
var camionUno = new Camiones('Camion', 'Ford', 'Cargo', 2022, '1321DS13', 'Blanco', 'Manual', 16);
console.log(camionUno.CapacidadDeCarga(40));
console.log('-------');
