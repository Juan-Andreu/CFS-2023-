abstract class OperacionMat{
    abstract calcular():number ;
    
}

class Suma extends OperacionMat {
    op1: OperacionMat;
    op2: OperacionMat;

    constructor(op1:OperacionMat, op2:OperacionMat){
        super()
        this.op1 = op1;
        this.op2 = op2;
    }

    calcular():number {
        return this.op1.calcular() + this.op2.calcular();
    }
}

class Resta extends OperacionMat {
    op1: OperacionMat;
    op2: OperacionMat;

    constructor(op1:OperacionMat, op2:OperacionMat){
        super()
        this.op1 = op1;
        this.op2 = op2;
    }
    
    calcular():number {
        return this.op1.calcular() - this.op2.calcular();
    }
}

class Numero extends OperacionMat {
    valor: number;

    constructor(valor:number){
        super();
        this.valor = valor;
    }

    calcular():number {
        return this.valor;
    }
}

// (5+3) - 4
let cinco: OperacionMat = new Numero(5);
let tres:OperacionMat = new Numero(3);
let cuatro:OperacionMat = new Numero(4);

let operacion1:OperacionMat = new Suma(cinco, tres);
let operacionCompleta = new Resta(operacion1, cuatro);

console.log(operacionCompleta.calcular());