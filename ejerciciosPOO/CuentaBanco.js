var Persona = /** @class */ (function () {
    function Persona(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    Persona.prototype.getNombreCompleto = function () {
        return "".concat(this.nombre, " ").concat(this.apellido);
    };
    return Persona;
}());
var Cuenta = /** @class */ (function () {
    function Cuenta(titular, saldo) {
        if (saldo === void 0) { saldo = 0; }
        this.titular = titular;
        this.saldo = saldo;
    }
    Cuenta.prototype.getTitular = function () {
        return this.titular;
    };
    Cuenta.prototype.setTitular = function (titular) {
        this.titular = titular;
    };
    Cuenta.prototype.getSaldo = function () {
        return this.saldo;
    };
    Cuenta.prototype.mostrar = function () {
        console.log("Datos de la cuenta:");
        console.log("Titular: ".concat(this.titular.getNombreCompleto()));
        console.log("Saldo: $".concat(this.saldo.toFixed(2)));
    };
    Cuenta.prototype.ingresar = function (monto) {
        if (monto > 0) {
            this.saldo += monto;
            console.log("Se ingresaron $".concat(monto.toFixed(2), " a la cuenta."));
        }
        else {
            console.log("El monto ingresado debe ser positivo.");
        }
    };
    Cuenta.prototype.retirar = function (monto) {
        this.saldo -= monto;
        console.log("Se retiraron $".concat(monto.toFixed(2), " de la cuenta."));
    };
    return Cuenta;
}());
var persona1 = new Persona("Juan", "Pérez");
var cuenta1 = new Cuenta(persona1, 1000);
cuenta1.mostrar();
cuenta1.ingresar(500);
cuenta1.retirar(2000);
cuenta1.mostrar();
// console.log(cuenta1)
