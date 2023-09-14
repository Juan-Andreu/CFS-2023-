var Cancion = /** @class */ (function () {
    function Cancion(titulo, autor) {
        if (titulo === void 0) { titulo = ""; }
        if (autor === void 0) { autor = ""; }
        this.titulo = titulo;
        this.autor = autor;
    }
    Cancion.prototype.mostrarTitulo = function () {
        return this.titulo;
    };
    Cancion.prototype.mostrarAutor = function () {
        return this.autor;
    };
    Cancion.prototype.ponerTitulo = function (titulo) {
        this.titulo = titulo;
    };
    Cancion.prototype.ponerAutor = function (autor) {
        this.autor = autor;
    };
    return Cancion;
}());
var miCancion = new Cancion("Amor de verano", "Airbag");
console.log("Título: ", miCancion.mostrarTitulo());
console.log("Autor: ", miCancion.mostrarAutor());
miCancion.ponerTitulo("Como eran las cosas");
miCancion.ponerAutor("Babasónicos");
