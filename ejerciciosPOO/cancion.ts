class Cancion {
    private titulo: string;
    private autor: string;

    public constructor(titulo: string = "", autor: string = "") {
        this.titulo = titulo;
        this.autor = autor;
    }

    public mostrarTitulo(): string {
        return this.titulo;
    }

    public mostrarAutor(): string {
        return this.autor;
    }

    public ponerTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    public ponerAutor(autor: string): void {
        this.autor = autor;
    }
}

let miCancion = new Cancion("Amor de verano", "Airbag");
console.log("Título: ", miCancion.mostrarTitulo());
console.log("Autor: ", miCancion.mostrarAutor());
miCancion.ponerTitulo("Como eran las cosas");
miCancion.ponerAutor("Babasónicos");