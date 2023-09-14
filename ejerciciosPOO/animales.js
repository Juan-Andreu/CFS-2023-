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
exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal(nombre, edad, raza) {
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
    }
    Animal.prototype.hacer_sonido = function () {
        return "";
    };
    Animal.prototype.moverse = function () {
    };
    Animal.prototype.mostrarInfo = function () {
        return (this.nombre, this.raza);
    };
    return Animal;
}());
exports.Animal = Animal;
var Perro = /** @class */ (function (_super) {
    __extends(Perro, _super);
    function Perro(nombre, edad, raza, tamaño) {
        var _this = _super.call(this, nombre, edad, raza) || this;
        _this.nombre = "bonito";
        _this.edad = 13;
        _this.raza = "Mestizo";
        _this.tamaño = "pequeño";
        return _this;
    }
    Perro.prototype.buscarObjeto = function () {
        return "encontró el juguete";
    };
    Perro.prototype.hacer_sonido = function () {
        return "ladrar";
    };
    Perro.prototype.moverse = function () {
    };
    Perro.prototype.mostrarInfo = function () {
        return (this.nombre, this.raza);
    };
    return Perro;
}(Animal));
var Gato = /** @class */ (function (_super) {
    __extends(Gato, _super);
    function Gato(nombre, edad, raza, pelaje) {
        var _this = _super.call(this, nombre, edad, raza) || this;
        _this.nombre = "la micha";
        _this.edad = 3;
        _this.raza = "negra como una pantera";
        _this.pelaje = "corto y brilloso";
        return _this;
    }
    Gato.prototype.jugar_con_juguete = function () {
        return "su michino esta jugando";
    };
    Gato.prototype.hacer_sonido = function () {
        return "maullar";
    };
    Gato.prototype.moverse = function () {
    };
    Gato.prototype.mostrarInfo = function () {
        return (this.nombre, this.raza);
    };
    return Gato;
}(Animal));
var Pajaro = /** @class */ (function (_super) {
    __extends(Pajaro, _super);
    function Pajaro(nombre, edad, raza, tipo_de_pico) {
        var _this = _super.call(this, nombre, edad, raza) || this;
        _this.nombre = "negrito";
        _this.edad = 5;
        _this.raza = "charrua";
        _this.tipo_de_pico = "curvado y negro";
        return _this;
    }
    Pajaro.prototype.volar = function () {
        return "su pajaro está volando";
    };
    Pajaro.prototype.hacer_sonido = function () {
        return "silban, cantan y chillan";
    };
    Pajaro.prototype.moverse = function () {
    };
    Pajaro.prototype.mostrarInfo = function () {
        return (this.nombre, this.raza);
    };
    return Pajaro;
}(Animal));
var perro = new Perro('Ron', 5, 'Border Collie', 'Grande');
var gato = new Gato('Mish', 6, 'Calle', 'Peludo');
var pajaro = new Pajaro('Negrito', 4, 'Carpintero', 'Punteagudo y duro');
console.log(perro, gato, pajaro);
