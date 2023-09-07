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
// Quiero implementar un almacenamiento de textos, que sirvan para ser enviados a un sistema y/o leidos por una persona
// Para otro sistema puedo guardalo en JSON
// Para una persona guardalo en TXT
var fs = require("fs");
var path = require("path");
var BinanceTrx = /** @class */ (function () {
    function BinanceTrx(binanceID, destinationID, amount, trxDate) {
        this.binanceID = binanceID;
        this.destinationID = destinationID;
        this.amount = amount;
        this.trxDate = trxDate;
    }
    BinanceTrx.prototype.getBinanceID = function () {
        return this.binanceID;
    };
    BinanceTrx.prototype.getDestinationID = function () {
        return this.destinationID;
    };
    BinanceTrx.prototype.getAmount = function () {
        return this.amount;
    };
    BinanceTrx.prototype.getTrxDate = function () {
        return this.trxDate;
    };
    return BinanceTrx;
}());
var BitcointTrx = /** @class */ (function () {
    function BitcointTrx(walletIn, walletOut, monto) {
        this.walletIn = walletIn;
        this.walletOut = walletOut;
        this.fecha = new Date();
        this.monto = monto;
    }
    BitcointTrx.prototype.getWalletIn = function () {
        return this.walletIn;
    };
    BitcointTrx.prototype.getWalletOut = function () {
        return this.walletOut;
    };
    BitcointTrx.prototype.getMonto = function () {
        return this.monto;
    };
    BitcointTrx.prototype.getFecha = function () {
        return this.fecha;
    };
    return BitcointTrx;
}());
var BitcointTrxDateable = /** @class */ (function (_super) {
    __extends(BitcointTrxDateable, _super);
    function BitcointTrxDateable(walletIn, walletOut, monto, fecha) {
        var _this = _super.call(this, walletIn, walletOut, monto) || this;
        _this.fecha = fecha;
        return _this;
    }
    return BitcointTrxDateable;
}(BitcointTrx));
var AlmacenaTXT = /** @class */ (function () {
    function AlmacenaTXT() {
        this.path = path.resolve("./btnTrx.txt");
    }
    AlmacenaTXT.prototype.guardarInformacion = function (informacion) {
        var infoTxt = "".concat(informacion
            .getFecha()
            .toLocaleString("es-AR"), " se movio desde ").concat(informacion.getWalletOut(), " hacia ").concat(informacion.getWalletIn(), " ").concat(informacion.getMonto(), " BTN");
        fs.writeFileSync(this.path, "".concat(infoTxt, "\n"), { flag: "a" });
    };
    return AlmacenaTXT;
}());
var AlmacenaJSON = /** @class */ (function () {
    function AlmacenaJSON() {
        this.path = path.resolve("./btnTrx.json");
    }
    AlmacenaJSON.prototype.guardarInformacion = function (informacion) {
        fs.writeFileSync(this.path, "".concat(JSON.stringify(informacion), "\n"), {
            flag: "a",
        });
    };
    return AlmacenaJSON;
}());
//Strategy
var ProcesadorTransacciones = /** @class */ (function () {
    function ProcesadorTransacciones() {
        this.almacenadores = [];
        this.almacenadores.push(new AlmacenaJSON());
        this.almacenadores.push(new AlmacenaTXT());
    }
    ProcesadorTransacciones.prototype.almacenarTrxBtn = function (trx) {
        this.almacenadores.forEach(function (alm) {
            alm.guardarInformacion(trx);
        });
    };
    return ProcesadorTransacciones;
}());
var BinanceProcesadorTrxAdapter = /** @class */ (function () {
    function BinanceProcesadorTrxAdapter() {
        this.procesador = new ProcesadorTransacciones();
    }
    BinanceProcesadorTrxAdapter.prototype.almacenarTrxBtn = function (trx) {
        var fechaDate = new Date(trx.getTrxDate()); // FORMATO ISO  yyyy-mm-ddTHH:mm:ss.sssZ
        var thebitTrx = new BitcointTrxDateable(trx.getBinanceID(), trx.getDestinationID(), trx.getAmount(), fechaDate);
        this.procesador.almacenarTrxBtn(thebitTrx);
    };
    return BinanceProcesadorTrxAdapter;
}());
//cliente
var trxBit1 = new BitcointTrx("hgufcidsyiur3849jhud", "hfjkdskhfjdy7333", 0.0021);
var trxBit2 = new BitcointTrx("hfjkdskhfjdy7333", "hgufcidsyiur3849jhud", 0.0021);
var trxBinance = new BinanceTrx("fdsfsdfe4343", "ghdhhfjkdskhfjdy7333gfdsj", 0.0012, "2023-09-05");
var procesador = new ProcesadorTransacciones( /* persona o sistema*/);
var adapterBinanceBit = new BinanceProcesadorTrxAdapter();
procesador.almacenarTrxBtn(trxBit1 /* persona o sistema */);
procesador.almacenarTrxBtn(trxBit2);
adapterBinanceBit.almacenarTrxBtn(trxBinance);
