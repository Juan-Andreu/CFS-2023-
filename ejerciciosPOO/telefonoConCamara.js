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
var TelefonoConCamara = /** @class */ (function (_super) {
    __extends(TelefonoConCamara, _super);
    function TelefonoConCamara(camaraTrasera, camaraDelantera) {
        var _this = _super.call(this, 30, 10) || this;
        _this.sacarFoto = true;
        _this.camaraTrasera = camaraTrasera;
        _this.camaraDelantera = camaraDelantera;
        return _this;
    }
    TelefonoConCamara.prototype.sacarfoto = function () {
        if (this.sacarFoto) {
            console.log('Foto capturada con éxito');
        }
        else {
            console.log('No se ha podido realirar la captura de foto, inténtelo nuevamente');
        }
    };
    TelefonoConCamara.prototype.getMegapixelesCamaraTrasera = function () {
        return this.camaraTrasera;
    };
    TelefonoConCamara.prototype.getMegapixelesCamaraDelantera = function () {
        return this.camaraDelantera;
    };
    return TelefonoConCamara;
}(telefono_1.Telefono));
var telefonoFotografico = new TelefonoConCamara(42, 28);
telefonoFotografico.getMegapixelesCamaraTrasera();
console.log(telefonoFotografico.getMegapixelesCamaraTrasera());
