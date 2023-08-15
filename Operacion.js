var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var OperacionMat = /** @class */ (function () {
    function OperacionMat() {
    }
    OperacionMat.prototype.calcular = function () {
        return 0;
    };
    return OperacionMat;
}());
var Suma = /** @class */ (function (_super) {
    __extends(Suma, _super);
    function Suma(op1, op2) {
        var _this = _super.call(this) || this;
        _this.op1 = op1;
        _this.op2 = op2;
        return _this;
    }
    Suma.prototype.calcular = function () {
        return this.op1.calcular() + this.op2.calcular();
    };
    return Suma;
}(OperacionMat));
var Resta = /** @class */ (function (_super) {
    __extends(Resta, _super);
    function Resta(op1, op2) {
        var _this = _super.call(this) || this;
        _this.op1 = op1;
        _this.op2 = op2;
        return _this;
    }
    Resta.prototype.calcular = function () {
        return this.op1.calcular() - this.op2.calcular();
    };
    return Resta;
}(OperacionMat));
var Numero = /** @class */ (function (_super) {
    __extends(Numero, _super);
    function Numero(valor) {
        var _this = _super.call(this) || this;
        _this.valor = valor;
        return _this;
    }
    Numero.prototype.calcular = function () {
        return this.valor;
    };
    return Numero;
}(OperacionMat));
// (5+3) - 4
var cinco = new Numero(5);
var tres = new Numero(3);
var cuatro = new Numero(4);
var operacion1 = new Suma(cinco, tres);
var operacionCompleta = new Resta(operacion1, cuatro);
console.log(operacionCompleta.calcular());
