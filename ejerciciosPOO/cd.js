var cancion = /** @class */ (function () {
    function cancion(titulo, autor) {
        if (titulo === void 0) { titulo = ""; }
        if (autor === void 0) { autor = ""; }
        this.titulo = titulo;
        this.autor = autor;
    }
    cancion.prototype.mostrarTitulo = function () {
        return this.titulo;
    };
    cancion.prototype.mostrarAutor = function () {
        return this.autor;
    };
    cancion.prototype.ponerTitulo = function (titulo) {
        this.titulo = titulo;
    };
    cancion.prototype.ponerAutor = function (autor) {
        this.autor = autor;
    };
    return cancion;
}());
var CD = /** @class */ (function () {
    function CD() {
        this.canciones = [];
        this.contador = 0;
    }
    CD.prototype.contarCanciones = function () {
        return this.contador;
    };
    CD.prototype.mostrarCancion = function (posicion) {
        if (posicion >= 0 && posicion < this.contador) {
            return this.canciones[posicion];
        }
        else {
            return null;
        }
    };
    CD.prototype.grabarCancion = function (posicion, nuevaCancion) {
        if (posicion >= 0 && posicion < this.contador) {
            this.canciones[posicion] = nuevaCancion;
        }
    };
    CD.prototype.agregar = function (nuevaCancion) {
        this.canciones.push(nuevaCancion);
        this.contador++;
    };
    CD.prototype.eliminar = function (posicion) {
        if (posicion >= 0 && posicion < this.contador) {
            this.canciones.splice(posicion, 1);
            this.contador--;
        }
    };
    return CD;
}());
var miCD = new CD();
var cancion1 = new cancion("Solo aqui", "Airbag");
var cancion2 = new cancion("Marchate ahora", "Los totora");
var cancion3 = new cancion("Cactus", "Gustavo Cerati");
miCD.agregar(cancion1);
miCD.agregar(cancion2);
miCD.agregar(cancion3);
console.log("En el cd hay: ", miCD.contarCanciones(), "canciones");
console.log("Canción número: ", miCD.mostrarCancion(1));
miCD.eliminar(0);
console.log("Número de canciones en el CD después de eliminar:", miCD.contarCanciones());
console.log(miCD);
