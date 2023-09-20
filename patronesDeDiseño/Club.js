var EstrategiaDescuentoRegular = /** @class */ (function () {
    function EstrategiaDescuentoRegular() {
    }
    EstrategiaDescuentoRegular.prototype.aplicarDescuento = function (precio) {
        return precio;
    };
    return EstrategiaDescuentoRegular;
}());
var EstrategiaDescuentoGold = /** @class */ (function () {
    function EstrategiaDescuentoGold() {
    }
    EstrategiaDescuentoGold.prototype.aplicarDescuento = function (precio) {
        if (precio > 10000) {
            return precio * 0.8;
        }
        return precio;
    };
    return EstrategiaDescuentoGold;
}());
var EstrategiaDescuentoPlatinum = /** @class */ (function () {
    function EstrategiaDescuentoPlatinum() {
    }
    EstrategiaDescuentoPlatinum.prototype.aplicarDescuento = function (precio) {
        return precio * 0.8;
    };
    return EstrategiaDescuentoPlatinum;
}());
var Cliente = /** @class */ (function () {
    function Cliente(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }
    Cliente.prototype.comprar = function (producto) {
        var precioOriginal = producto.precio;
        var precioConDescuento = this.tipo.aplicarDescuento(producto.precio);
        console.log("".concat(this.nombre, " compr\u00F3 ").concat(producto.nombre, " a un precio original de ").concat(precioOriginal, " pesos y qued\u00F3 en ").concat(precioConDescuento, " pesos despu\u00E9s del descuento."));
    };
    return Cliente;
}());
var Producto = /** @class */ (function () {
    function Producto(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    return Producto;
}());
var estrategiaRegular = new EstrategiaDescuentoRegular();
var estrategiaGold = new EstrategiaDescuentoGold();
var estrategiaPlatinum = new EstrategiaDescuentoPlatinum();
var clienteRegular = new Cliente("Cliente Regular", estrategiaRegular);
var clienteGold = new Cliente("Cliente Gold", estrategiaGold);
var clientePlatinum = new Cliente("Cliente Platinum", estrategiaPlatinum);
var producto1 = new Producto("Jean Levis", 12000);
var producto2 = new Producto("Zapatillas nike Dunk", 8000);
var producto3 = new Producto("Lentes de sol Ray Ban", 15000);
clienteRegular.comprar(producto1);
clienteGold.comprar(producto2);
clientePlatinum.comprar(producto3);
