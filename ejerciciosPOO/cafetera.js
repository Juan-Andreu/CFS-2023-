var Cafetera = /** @class */ (function () {
    function Cafetera(capacidad, cantidadActual) {
        if (capacidad === void 0) { capacidad = 1000; }
        if (cantidadActual === void 0) { cantidadActual = 0; }
        this.capacidadMaxima = capacidad;
        this.cantidadActual = cantidadActual;
        if (cantidadActual > capacidad) {
            this.cantidadActual = capacidad;
        }
    }
    Cafetera.prototype.llenarCafetera = function () {
        this.cantidadActual = this.capacidadMaxima;
        console.log('La cafetera ha sido completada.');
    };
    Cafetera.prototype.servirTaza = function (taza) {
        if (taza <= this.cantidadActual) {
            this.cantidadActual -= taza;
            console.log("Se sirvi\u00F3 una taza de ".concat(taza, "c.c de caf\u00E9."));
        }
        else {
            console.log("No hay suficiente caf\u00E9 para llenar la taza.");
        }
    };
    Cafetera.prototype.vaciarCafetera = function () {
        this.cantidadActual == 0;
        console.log('Se ha vaciado la cafetera.');
    };
    Cafetera.prototype.agregarCafe = function (cantidadDeCafe) {
        if (this.cantidadActual <= 1000) {
            this.cantidadActual += cantidadDeCafe;
            console.log("Se ha agregado ".concat(cantidadDeCafe, "c.c de caf\u00E9 a la cafetera."));
        }
        else {
            console.log('Su cafetera excede el limite de capacidad maxima.');
        }
    };
    return Cafetera;
}());
var cafe = new Cafetera();
cafe.vaciarCafetera();
cafe.agregarCafe(90);
cafe.servirTaza(200);
cafe.llenarCafetera();
