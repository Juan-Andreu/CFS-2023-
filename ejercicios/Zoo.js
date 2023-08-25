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
var AnimalDelZoo = /** @class */ (function () {
    function AnimalDelZoo(Nombre, Especie) {
        this.nombre = Nombre;
        this.especie = Especie;
    }
    AnimalDelZoo.prototype.emitirSonido = function () {
        return "";
    };
    AnimalDelZoo.prototype.mostrarInfo = function () {
        return "Nombre: ".concat(this.nombre, ", Especie: ").concat(this.especie);
    };
    return AnimalDelZoo;
}());
var Leon = /** @class */ (function (_super) {
    __extends(Leon, _super);
    function Leon(Nombre, edad, pelaje) {
        var _this = _super.call(this, Nombre, "León") || this;
        _this.edad = edad;
        _this.pelaje = pelaje;
        return _this;
    }
    Leon.prototype.emitirSonido = function () {
        return "Rugir";
    };
    return Leon;
}(AnimalDelZoo));
var Elefante = /** @class */ (function (_super) {
    __extends(Elefante, _super);
    function Elefante(Nombre, cuantoPesa, Trompa, cuantoMide) {
        var _this = _super.call(this, Nombre, "Elefante") || this;
        _this.peso = cuantoPesa;
        _this.largoTrompa = Trompa;
        _this.altura = cuantoMide;
        return _this;
    }
    Elefante.prototype.emitirSonido = function () {
        return "Barritar";
    };
    return Elefante;
}(AnimalDelZoo));
var Delfin = /** @class */ (function (_super) {
    __extends(Delfin, _super);
    function Delfin(Nombre, queCome, dondeHabita, grupo) {
        var _this = _super.call(this, Nombre, "Delfin") || this;
        _this.alimentacion = queCome;
        _this.habitat = dondeHabita;
        _this.clasificacion = grupo;
        return _this;
    }
    Delfin.prototype.emitirSonido = function () {
        return "Silbidos y Chasquidos";
    };
    return Delfin;
}(AnimalDelZoo));
var animales = [
    new Leon("Tiger", 7, "Dorado"),
    new Elefante("Arturo", 255, "120cm", "2 metros"),
    new Delfin("Piolin", "Peces, es carnívoro", "Océanos", "Mamífero"),
];
for (var _i = 0, animales_1 = animales; _i < animales_1.length; _i++) {
    var animal = animales_1[_i];
    console.log(animal.mostrarInfo());
    console.log(animal.emitirSonido());
    console.log("----");
}
