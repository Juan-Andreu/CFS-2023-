var Item = /** @class */ (function () {
    function Item(nombreArticulo, alCosto) {
        this.tipoDeProducto = nombreArticulo;
        this.precioCosto = alCosto;
    }
    Item.prototype.getNombre = function () {
        return this.tipoDeProducto;
    };
    Item.prototype.getPrecio = function () {
        return this.precioCosto;
    };
    return Item;
}());
var Stock = /** @class */ (function () {
    function Stock() {
        this.itemsDisponibles = [];
        this.itemsVendidos = [];
    }
    Stock.prototype.cargarItems = function (item) {
        this.itemsDisponibles.push(item);
    };
    Stock.prototype.venderItems = function (item) {
        var index = -1;
        for (var i = 0; i < this.itemsDisponibles.length; i++) {
            if (this.itemsDisponibles[i].getNombre() === item.getNombre()) {
                index = i;
                break;
            }
        }
        if (index !== -1) {
            var vendido = this.itemsDisponibles.splice(index, 1)[0];
            this.itemsVendidos.push(vendido);
            console.log("Se ha vendido ".concat(vendido.getNombre(), " por ").concat(vendido.getPrecio()));
        }
        else {
            console.log("El art\u00EDculo ".concat(item.getNombre(), " no est\u00E1 disponible para la venta."));
        }
    };
    return Stock;
}());
// Crear instancia de Stock
var stock = new Stock();
// Crear instancias de items
var yerbaPlayadito = new Item("Yerba Playadito", "$800");
// Cargar items al stock
stock.cargarItems(yerbaPlayadito);
// Vender un artículo
// stock.venderItems(yerbaPlayadito);
console.log(stock.venderItems(yerbaPlayadito));
