class Cafetera {
    private capacidadMaxima: number;
    private cantidadActual: number;

    constructor(capacidad: number = 1000, cantidadActual:number = 0){
        this.capacidadMaxima = capacidad;
        this.cantidadActual = cantidadActual; 

        if(cantidadActual > capacidad){ 
            this.cantidadActual = capacidad;
        }
    }

    public llenarCafetera(): void {
        this.cantidadActual = this.capacidadMaxima;
        console.log( 'La cafetera ha sido completada.');
    }

    public servirTaza(taza:number):void{
        if(taza <= this.cantidadActual){
            this.cantidadActual -= taza;
            console.log(`Se sirvió una taza de ${taza}c.c de café.`);
        } else {
            console.log(`No hay suficiente café para llenar la taza.`)
        }
    }

    public vaciarCafetera(){
        this.cantidadActual == 0;
        console.log('Se ha vaciado la cafetera.')
    }

    public agregarCafe(cantidadDeCafe: number): void{
        if(this.cantidadActual <= 1000){
            this.cantidadActual += cantidadDeCafe;
        console.log(`Se ha agregado ${cantidadDeCafe}c.c de café a la cafetera.`)
        } else{
            console.log('Su cafetera excede el limite de capacidad maxima.')
        }
    }
}

const cafe = new Cafetera();


cafe.vaciarCafetera();
cafe.agregarCafe(90);
cafe.servirTaza(200);
cafe.llenarCafetera();