// Quiero implementar un almacenamiento de textos, que sirvan para ser enviados a un sistema y/o leidos por una persona
// Para otro sistema puedo guardalo en JSON
// Para una persona guardalo en TXT
import * as fs from "fs";
import * as path from "path";
class BinanceTrx {
  protected binanceID: string;
  protected destinationID: string;
  protected amount: number;
  protected trxDate: string;
  constructor(
    binanceID: string,
    destinationID: string,
    amount: number,
    trxDate: string
  ) {
    this.binanceID = binanceID;
    this.destinationID = destinationID;
    this.amount = amount;
    this.trxDate = trxDate;
  }
  getBinanceID() {
    return this.binanceID;
  }
  getDestinationID() {
    return this.destinationID;
  }
  getAmount() {
    return this.amount;
  }
  getTrxDate() {
    return this.trxDate;
  }
}
class BitcointTrx {
  protected walletIn: string;
  protected walletOut: string;
  protected monto: number;
  protected fecha: Date;
  constructor(walletIn: string, walletOut: string, monto: number) {
    this.walletIn = walletIn;
    this.walletOut = walletOut;
    this.fecha = new Date();
    this.monto = monto;
  }
  getWalletIn(): string {
    return this.walletIn;
  }
  getWalletOut(): string {
    return this.walletOut;
  }
  getMonto(): number {
    return this.monto;
  }
  getFecha(): Date {
    return this.fecha;
  }
}
class BitcointTrxDateable extends BitcointTrx {
  constructor(walletIn: string, walletOut: string, monto: number, fecha: Date) {
    super(walletIn, walletOut, monto);
    this.fecha = fecha;
  }
}
interface Almacenador {
  guardarInformacion(informacion: BitcointTrx): void;
}
class AlmacenaTXT implements Almacenador {
  private path = path.resolve("./btnTrx.txt");
  guardarInformacion(informacion: BitcointTrx): void {
    const infoTxt = `${informacion
      .getFecha()
      .toLocaleString(
        "es-AR"
      )} se movio desde ${informacion.getWalletOut()} hacia ${informacion.getWalletIn()} ${informacion.getMonto()} BTN`;
    fs.writeFileSync(this.path, `${infoTxt}\n`, { flag: "a" });
  }
}
class AlmacenaJSON implements Almacenador {
  private path = path.resolve("./btnTrx.json");
  guardarInformacion(informacion: BitcointTrx): void {
    fs.writeFileSync(this.path, `${JSON.stringify(informacion)}\n`, {
      flag: "a",
    });
  }
}
//Strategy
class ProcesadorTransacciones {
  private almacenadores: Almacenador[];
  constructor() {
    this.almacenadores = [];
    this.almacenadores.push(new AlmacenaJSON());
    this.almacenadores.push(new AlmacenaTXT());
  }
  almacenarTrxBtn(trx: BitcointTrx): void {
    this.almacenadores.forEach((alm) => {
      alm.guardarInformacion(trx);
    });
  }
}
class BinanceProcesadorTrxAdapter {
  private procesador: ProcesadorTransacciones;
  constructor() {
    this.procesador = new ProcesadorTransacciones();
  }
  almacenarTrxBtn(trx: BinanceTrx): void {
    const fechaDate = new Date(trx.getTrxDate()); // FORMATO ISO  yyyy-mm-ddTHH:mm:ss.sssZ
    const thebitTrx = new BitcointTrxDateable(
      trx.getBinanceID(),
      trx.getDestinationID(),
      trx.getAmount(),
      fechaDate
    );
    this.procesador.almacenarTrxBtn(thebitTrx);
  }
}
//cliente
const trxBit1 = new BitcointTrx(
  "hgufcidsyiur3849jhud",
  "hfjkdskhfjdy7333",
  0.0021
);
const trxBit2 = new BitcointTrx(
  "hfjkdskhfjdy7333",
  "hgufcidsyiur3849jhud",
  0.0021
);
const trxBinance = new BinanceTrx(
  "fdsfsdfe4343",
  "ghdhhfjkdskhfjdy7333gfdsj",
  0.0012,
  "2023-09-05"
);
const procesador = new ProcesadorTransacciones(/* persona o sistema*/);
const adapterBinanceBit = new BinanceProcesadorTrxAdapter();
procesador.almacenarTrxBtn(trxBit1 /* persona o sistema */);
procesador.almacenarTrxBtn(trxBit2);
adapterBinanceBit.almacenarTrxBtn(trxBinance);
