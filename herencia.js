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
var Televisores = /** @class */ (function () {
    function Televisores() {
        this.canalActual = 0;
        this.volumenActual = 10;
        this.estaPrendido = false;
    }
    Televisores.prototype.setCanal = function (canal) {
        this.canalActual = canal;
    };
    Televisores.prototype.mostrarCanal = function () {
        return this.canalActual;
    };
    Televisores.prototype.imprimirCanal = function () {
        console.log(this.canalActual);
    };
    return Televisores;
}());
var SmartTV = /** @class */ (function (_super) {
    __extends(SmartTV, _super);
    function SmartTV() {
        return _super.call(this) || this;
    }
    SmartTV.prototype.verCanal = function () {
        console.log(this.canalActual);
    };
    return SmartTV;
}(Televisores));
var tele = new Televisores();
console.log(tele);
tele.setCanal(30);
console.log(tele);
var teleSmart = new SmartTV();
console.log(teleSmart);
teleSmart.setCanal(55);
teleSmart.verCanal();
console.log(teleSmart);
console.log(tele);
var tele1 = new Televisores();
tele1.imprimirCanal();
var tele2 = new Televisores();
tele2.imprimirCanal();
console.log(tele1.imprimirCanal());
console.log(tele2.imprimirCanal());
