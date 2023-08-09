"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  < Programacion Orientada a Objetos >
//  --- Clases y Herencias ---
/* class auto{
    marca: string;
    modelo: string;
    anio: number;
    patente: string;
    color: string;
    velocidad: number;
    encendido: boolean;

    constructor(marca: string, modelo: string, anio: number, patente: string,
        color: string){
            this.marca = marca;
            this.modelo = modelo;
            this.anio = anio;
            this.patente = patente;
            this.color = color;
            this.velocidad = 0
            this.encendido = false;
    }

    prenderApagar(): void {
        this.encendido = !this.encendido;
      }

    getPatente(): string {
               return this.patente;
             }
          
    getMarca(): string {
               return this.marca;
             }
          
    getModelo(): string {
               return this.modelo;
             }
          
     getAnio(): number {
               return this.anio;
             }
          
    getColor(): string {
               return this.color;
             }

    acelerar(): void {
        this.velocidad++;
    }

    desacelerar(): void {
        this.velocidad--;
    }
}

let auto1 = new auto('Ford', 'Ranger Raptor', 2022, 'axf2112', 'Rojo');
auto1.prenderApagar();
auto1.acelerar();
auto1.acelerar();
auto1.acelerar();
auto1.acelerar();
auto1.acelerar();

console.log(auto1); */
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
/* let ra = new RegistroAutomotor();
let auto1 = new Auto("AB65R0", "Ford", "f150 Raptor", 2022);
ra.darDeAlta(auto1);
ra.darDeAlta(new Auto("RQ65R0", "Ford", "Focus RS", 2023));
ra.darDeAlta(new Auto("YU66R0", "Nissan", "GTR", 2009));
ra.darDeAlta(new Auto("NI32R0", "Toyota", "Yaris GR", 2021));
ra.darDeAlta(new Auto("RER3R0", "Peugeot", "208 GT", 2023));
ra.listar();
ra.actualizar(new Auto("YU66R0", "Nissan", "SKYLINE", 2009));
ra.listar();

console.log(auto1); */
var libro = /** @class */ (function () {
    function libro(titulo, autor, cantCapitulos, cantHojas, editorial) {
        this.titulo = titulo;
        this.autor = autor;
        this.cantCapitulos = 0;
        this.cantHojas = cantHojas;
        this.editorial = editorial;
    }
    libro.prototype.getTitulo = function () {
        return this.titulo;
    };
    libro.prototype.getAutor = function () {
        return this.autor;
    };
    libro.prototype.getCantCapitulos = function (capitulos) {
        capitulos = this.cantCapitulos;
        return this.cantCapitulos;
    };
    libro.prototype.getCanHojas = function () {
        return (this.cantHojas += 1);
    };
    libro.prototype.getEditorial = function (editorial) {
        this.editorial === editorial;
    };
    libro.prototype.getVenta = function (venta) {
        if (this.venta = true) {
            var venta_1 = "Su venta a sido confirmada";
        }
        else {
            var venta_2 = "Su venta ha sido rechazada";
        }
    };
    return libro;
}());
var libro1 = new libro('Hoa', 'carlos', 5, 360, 'Santillana');
libro1.getVenta(true);
console.log(libro1.getVenta(true));
