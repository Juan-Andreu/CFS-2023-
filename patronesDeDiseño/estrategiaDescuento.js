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
var fs = require("fs");
var readlineSync = require("readline-Sync");
var MiembroClub = /** @class */ (function () {
    function MiembroClub(nombre, apellido, fechaNacimiento, documento, telefono, miembroDesde) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
        this.documento = documento;
        this.telefono = telefono;
        this.miembroDesde = miembroDesde;
    }
    return MiembroClub;
}());
var Deporte;
(function (Deporte) {
    Deporte["Futbol"] = "Futbol";
    Deporte["Basquet"] = "Basquet";
    Deporte["Zumba"] = "Zumba";
    Deporte["Voley"] = "Voley";
    Deporte["Natacion"] = "Natacion";
    Deporte["Gym"] = "Gym";
})(Deporte || (Deporte = {}));
var Jugador = /** @class */ (function (_super) {
    __extends(Jugador, _super);
    function Jugador(nombre, apellido, fechaNacimiento, documento, telefono, deporte) {
        var _this = _super.call(this, nombre, apellido, fechaNacimiento, documento, telefono, new Date().toLocaleDateString()) || this;
        _this.deporte = deporte;
        return _this;
    }
    return Jugador;
}(MiembroClub));
var GestorClub = /** @class */ (function () {
    function GestorClub() {
        this.socios = [];
        this.archivoJSON = 'socios.json';
        this.cargarSociosDesdeArchivo();
    }
    GestorClub.prototype.cargarSociosDesdeArchivo = function () {
        try {
            var data = fs.readFileSync(this.archivoJSON, 'utf-8');
            this.socios = JSON.parse(data);
        }
        catch (error) {
            this.socios = [];
        }
    };
    GestorClub.prototype.guardarSociosEnArchivo = function () {
        var data = JSON.stringify(this.socios, null, 2);
        fs.writeFileSync(this.archivoJSON, data, 'utf-8');
    };
    GestorClub.prototype.agregarSocio = function (socio) {
        this.socios.push(socio);
        this.guardarSociosEnArchivo();
    };
    GestorClub.prototype.buscarSociosPorNombre = function (nombre) {
        return this.socios.filter(function (socio) { return socio.nombre === nombre; });
    };
    GestorClub.prototype.buscarSociosPorDeporte = function (deporte) {
        return this.socios.filter(function (socio) { return socio.deporte === deporte; });
    };
    GestorClub.prototype.buscarSociosPorDocumento = function (documento) {
        return this.socios.filter(function (socio) { return socio.documento === documento; });
    };
    GestorClub.prototype.buscarSociosPorTelefono = function (telefono) {
        return this.socios.filter(function (socio) { return socio.telefono === telefono; });
    };
    return GestorClub;
}());
var gestor = new GestorClub();
for (var i = 1; i <= 10; i++) {
    var nombre = readlineSync.question('Ingrese el nombre: ');
    var apellido = readlineSync.question('Ingrese el apellido: ');
    var fechaNacimiento = '01/01/1990';
    var documento = 1000000 + i;
    var telefono = 2000000 + i;
    var deporte = Deporte.Futbol;
    var socio = new Jugador(nombre, apellido, fechaNacimiento, documento, telefono, deporte);
    gestor.agregarSocio(socio);
}
var nombreBuscado = readlineSync.question('Ingrese el nombre a buscar: ');
var sociosEncontrados = gestor.buscarSociosPorNombre(nombreBuscado);
console.log('Socios encontrados por nombre:');
console.log(sociosEncontrados);
