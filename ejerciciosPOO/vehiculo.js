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
    function RegistroAutomotor(filas, columnas) {
        this.autos = [];
        this.matriz = new Matriz(filas, columnas);
    }
    RegistroAutomotor.prototype.darDeAlta = function (auto) {
        this.autos.push(auto);
        // Agrega el auto a la matriz en X posicion
        this.matriz.set(this.autos.length - 1, 0, auto);
    };
    RegistroAutomotor.prototype.listar = function () {
        console.log("Lista de Automotores");
        console.log("----------------------------------------------------------");
        this.autos.forEach(function (auto, indice) {
            console.log("".concat(indice + 1, " - ").concat(auto.getMarca(), " ").concat(auto.getModelo(), " (").concat(auto.getAnio(), ") Patente: ").concat(auto.getPatente()));
        });
        console.log();
        console.log();
    };
    RegistroAutomotor.prototype.actualizar = function (auto) {
        var indiceAuto = -1;
        for (var index = 0; index < this.autos.length; index++) {
            var autoActual = this.autos[index];
            if (autoActual.getPatente() == auto.getPatente()) {
                indiceAuto = index;
            }
        }
        if (indiceAuto >= 0) {
            this.autos[indiceAuto] = auto;
            // Actualiza la matriz con el auto en la misma posición que está en el registro 
            this.matriz.set(indiceAuto, 0, auto);
        }
    };
    RegistroAutomotor.prototype.eliminar = function (patente) {
        var indiceAuto = -1;
        for (var index = 0; index < this.autos.length; index++) {
            var autoActual = this.autos[index];
            if (autoActual.getPatente() == patente) {
                indiceAuto = index;
            }
        }
        if (indiceAuto >= 0) {
            this.autos.splice(indiceAuto, 1);
            // Elimina el auto de la matriz en la misma posición que está en el registro del automotor 
            this.matriz.set(indiceAuto, 0, null);
        }
    };
    return RegistroAutomotor;
}());
var Matriz = /** @class */ (function () {
    function Matriz(filas, columnas) {
        this.datos = new Array(filas);
        for (var i = 0; i < filas; i++) {
            this.datos[i] = new Array(columnas);
        }
    }
    Matriz.prototype.set = function (x, y, valor) {
        if (this.esIndiceValido(x, y)) {
            this.datos[x][y] = valor;
        }
        else {
            throw new Error("Índices fuera de rango.");
        }
    };
    Matriz.prototype.get = function (x, y) {
        if (this.esIndiceValido(x, y)) {
            return this.datos[x][y];
        }
        return null;
    };
    Matriz.prototype.esIndiceValido = function (x, y) {
        return x >= 0 && x < this.datos.length && y >= 0 && y < this.datos[0].length;
    };
    return Matriz;
}());
var registroAutomotor = new RegistroAutomotor(10, 1); // 10 filas y 1 columna
registroAutomotor.darDeAlta(new Auto('AE482OY', 'Ford', 'KA', 2020));
registroAutomotor.darDeAlta(new Auto('OIM038', 'VOLKSWAGEN', 'AMAROK', 2014));
registroAutomotor.listar();
registroAutomotor.actualizar(new Auto('NAZ339', 'VOLKSWAGEN', 'Gol', 2013));
registroAutomotor.listar();
registroAutomotor.eliminar('AE482OY');
registroAutomotor.listar();
