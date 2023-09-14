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
exports.Mamifero = exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.comer = function () {
        return "Su animal está comiendo";
    };
    Animal.prototype.dormir = function () {
        return "Su animal está durmiendo";
    };
    return Animal;
}());
exports.Animal = Animal;
var Mamifero = /** @class */ (function (_super) {
    __extends(Mamifero, _super);
    function Mamifero(nombre, edad, tipoDePelaje) {
        var _this = _super.call(this) || this;
        _this.nombre = nombre;
        _this.edad = edad;
        _this.pelaje = tipoDePelaje;
        return _this;
    }
    Mamifero.prototype.amamantarCrias = function () {
        return "Su animal está amamantando";
    };
    return Mamifero;
}(Animal));
exports.Mamifero = Mamifero;
var Reptil = /** @class */ (function (_super) {
    __extends(Reptil, _super);
    function Reptil(nombre, edad, tipoDeEscamas) {
        var _this = _super.call(this) || this;
        _this.nombre = nombre;
        _this.edad = edad;
        _this.escamas = tipoDeEscamas;
        return _this;
    }
    Reptil.prototype.regularTemperaturaCorporal = function () {
        return "El reptil cambió sus escamas, ya reguló su temperatura corporal";
    };
    return Reptil;
}(Animal));
var Murcielago = /** @class */ (function (_super) {
    __extends(Murcielago, _super);
    function Murcielago(nombre, edad, tipoDePelaje, habilidades) {
        var _this = _super.call(this, nombre, edad, tipoDePelaje) || this;
        _this.nombre = nombre;
        _this.edad = edad;
        _this.habilidades = habilidades;
        return _this;
    }
    Murcielago.prototype.utilizarEcolocalizacion = function () {
        return "Su murcielago se está moviendo, para poder ubicarse en el entorno";
    };
    return Murcielago;
}(Mamifero));
var mamifero1 = new Mamifero('Mamifero', 8, 'largo y suave');
var reptil1 = new Reptil('Serpiente', 3, 'Esscmas rigidas');
var murcielago1 = new Mamifero('Murcielago', 1, 'Pelaje corto, suave de color negro o café');
console.log(mamifero1);
console.log('---------------');
console.log(reptil1);
console.log('---------------');
console.log(murcielago1);
