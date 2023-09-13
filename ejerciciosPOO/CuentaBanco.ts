class Persona {
    constructor(private nombre: string, private apellido: string) {}

    getNombreCompleto(): string {
        return `${this.nombre} ${this.apellido}`;
    }
}

class Cuenta {
    private titular: Persona;
    private saldo: number;

    constructor(titular: Persona, saldo: number = 0) {
        this.titular = titular;
        this.saldo = saldo;
    }

    getTitular(): Persona {
        return this.titular;
    }

    setTitular(titular: Persona): void {
        this.titular = titular;
    }

    getSaldo(): number {
        return this.saldo;
    }

    mostrar(): void {
        console.log("Datos de la cuenta:");
        console.log(`Titular: ${this.titular.getNombreCompleto()}`);
        console.log(`Saldo: $${this.saldo.toFixed(2)}`);
    }

    ingresar(monto: number): void {
        if (monto > 0) {
            this.saldo += monto;
            console.log(`Se ingresaron $${monto.toFixed(2)} a la cuenta.`);
        } else {
            console.log("El monto ingresado debe ser positivo.");
        }
    }

    retirar(monto: number): void {
        this.saldo -= monto;
        console.log(`Se retiraron $${monto.toFixed(2)} de la cuenta.`);
    }
}

const persona1 = new Persona("Juan", "Pérez");

const cuenta1 = new Cuenta(persona1, 1000);
cuenta1.mostrar(); 

cuenta1.ingresar(500);

cuenta1.retirar(2000);

cuenta1.mostrar(); 
