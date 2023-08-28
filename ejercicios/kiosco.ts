
class Item {
    protected tipoDeProducto: string;
    protected precioCosto: string;

    constructor(nombreArticulo: string, alCosto: string) {
        this.tipoDeProducto = nombreArticulo;
        this.precioCosto = alCosto;
    }

    public getNombre(): string {
        return this.tipoDeProducto;
    }

    public getPrecio(): string {
        return this.precioCosto;
    }
}

class Stock {
    itemsDisponibles: Item[] = [];
    itemsVendidos: Item[] = [];

    cargarItems(item: Item) {
        this.itemsDisponibles.push(item);
    }

    venderItems(item: Item) {
        let index = -1;
    
        for (let i = 0; i < this.itemsDisponibles.length; i++) {
            if (this.itemsDisponibles[i].getNombre() === item.getNombre()) {
                index = i;
                break;
            }
        }
    
        if (index !== -1) {
            const vendido = this.itemsDisponibles.splice(index, 1)[0];
            this.itemsVendidos.push(vendido);
            console.log(`Se ha vendido ${vendido.getNombre()} por ${vendido.getPrecio()}`);
        } else {
            console.log(`El artículo ${item.getNombre()} no está disponible para la venta.`);
        }
    }
    
}

// Crear instancia de Stock
const stock = new Stock();

// Crear instancias de items
const yerbaPlayadito = new Item("Yerba Playadito", "$800");

// Cargar items al stock
stock.cargarItems(yerbaPlayadito);

// Vender un artículo
// stock.venderItems(yerbaPlayadito);

console.log(stock.venderItems(yerbaPlayadito))
