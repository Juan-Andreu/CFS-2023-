
interface EstrategiaDescuento {
    aplicarDescuento(precio: number): number;
}
class EstrategiaDescuentoRegular implements EstrategiaDescuento {
    aplicarDescuento(precio: number): number {
        return precio;
    }
}
class EstrategiaDescuentoGold implements EstrategiaDescuento {
    aplicarDescuento(precio: number): number {
        if (precio > 10000) {
            return precio * 0.8;
        }
        return precio;
    }
}
class EstrategiaDescuentoPlatinum implements EstrategiaDescuento {
    aplicarDescuento(precio: number): number {
        return precio * 0.8;
    }
}
class Cliente {
    constructor(public nombre: string, public tipo: EstrategiaDescuento) { }
    comprar(producto: Producto) {
        const precioOriginal = producto.precio;
        const precioConDescuento = this.tipo.aplicarDescuento(producto.precio);
        console.log(
            `${this.nombre} compró ${producto.nombre} a un precio original de ${precioOriginal} pesos y quedó en ${precioConDescuento} pesos después del descuento.`
        );
    }
}
class Producto {
    constructor(public nombre: string, public precio: number) { }
}
let estrategiaRegular = new EstrategiaDescuentoRegular();
let estrategiaGold = new EstrategiaDescuentoGold();
let estrategiaPlatinum = new EstrategiaDescuentoPlatinum();
let clienteRegular = new Cliente("Cliente Regular", estrategiaRegular);
let clienteGold = new Cliente("Cliente Gold", estrategiaGold);
let clientePlatinum = new Cliente("Cliente Platinum", estrategiaPlatinum);
let producto1 = new Producto("Jean Levis", 12000);
let producto2 = new Producto("Zapatillas nike Dunk", 8000);
let producto3 = new Producto("Lentes de sol Ray Ban", 15000);
clienteRegular.comprar(producto1);
clienteGold.comprar(producto2);
clientePlatinum.comprar(producto3);
  