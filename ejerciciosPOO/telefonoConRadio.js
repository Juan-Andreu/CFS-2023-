"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var telefono_1 = require("./telefono");
var TelefonoConRadio = /** @class */ (function (_super) {
    __extends(TelefonoConRadio, _super);
    function TelefonoConRadio() {
        var _this = _super.call(this, 30, 10) || this;
        _this.frecuenciaActual = 107.1;
        return _this;
    }
    TelefonoConRadio.prototype.getFrecenciaActual = function () {
        return this.frecuenciaActual;
    };
    TelefonoConRadio.prototype.subirFrecuencia = function () {
        return this.frecuenciaActual++;
    };
    TelefonoConRadio.prototype.bajarFrecuencia = function () {
        return this.frecuenciaActual--;
    };
    return TelefonoConRadio;
}(telefono_1.Telefono));
var nokia = new TelefonoConRadio();
nokia.subirFrecuencia();
console.log(nokia.subirFrecuencia());
