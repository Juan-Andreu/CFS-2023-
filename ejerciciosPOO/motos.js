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
var Motos = /** @class */ (function (_super) {
    __extends(Motos, _super);
    function Motos(tipo, marca, modelo, cilindrada, anio, patente, color, transmision, cantPuertas) {
        var _this = _super.call(this, tipo, marca, modelo, anio, patente, color, transmision, cantPuertas) || this;
        _this.cilindrada = cilindrada;
        return _this;
    }
    Motos.prototype.verCilindrada = function (cilindrada) {
        if (cilindrada === 50 || cilindrada === 125 || cilindrada === 150 || cilindrada === 250 || cilindrada === 300 || cilindrada === 500 || cilindrada === 1000 || cilindrada === 1200) {
            console.log('Su cilindrada es de:', cilindrada, 'cc');
        }
        else {
            return 'Su cilindrada es inexistente.';
        }
        return (this.cilindrada, 'Cilindradas.');
    };
    return Motos;
}(vehiculo_1.Vehiculo));
var motoNueva = new Motos('Moto', 'Aprilia', 'Dorsoduro', 1200, 2022, '1321DS13', 'Blanco', 'Manual', 0);
console.log(motoNueva);
