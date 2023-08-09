class Televisores{
    protected canalActual: number;
    private volumenActual: number;
    private estaPrendido: boolean;

    public constructor() {
        this.canalActual = 0;
        this.volumenActual = 10;
        this.estaPrendido = false;
    }

    public setCanal (canal: number): void {
        this.canalActual = canal;
    }

    public mostrarCanal(): number{
      return this.canalActual;
    }

    public imprimirCanal(): void{
        console.log(this.canalActual);
    }
}


class SmartTV extends Televisores {
    public constructor() {
        super()
    }

    public verCanal(): void{
        console.log(this.canalActual);
    }
}

 let tele = new Televisores ();
console.log(tele);
tele.setCanal(30)
console.log(tele);

let teleSmart = new SmartTV();
console.log(teleSmart);
teleSmart.setCanal(55)
teleSmart.verCanal();

console.log(teleSmart);
console.log(tele); 

let tele1 = new Televisores();
tele1.imprimirCanal();

let tele2 = new Televisores();
tele2.imprimirCanal();

console.log(tele1.imprimirCanal())
console.log(tele2.imprimirCanal());