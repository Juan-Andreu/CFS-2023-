export class Usuario {
    protected nombreCuenta: string;
    protected email: string;
    protected contraseña: string;

    constructor(nombre: string, email: string, contraseña: string) {
        this.nombreCuenta = nombre;
        this.email = email;
        this.contraseña = contraseña;
    }

    public publicarPost(post: string) {
        console.log(`El usuario ${this.nombreCuenta} ha publicado: ${post}`);
    }

    public comentarPost(post: string, comentario: string) {
        console.log(`El usuario ${this.nombreCuenta} ha comentado en el post: ${comentario}`);
    }
}

export class Influencer extends Usuario {
    private seguidos: number;
    private seguidores: number;
    private cantPublicaciones: number;
    private publicaciones: string[] = [];

    constructor(nombre: string, email: string, contraseña: string, seguidos: number, seguidores: number, cantPublicaciones: number) {
        super(nombre, email, contraseña);
        this.seguidos = seguidos;
        this.seguidores = seguidores;
        this.cantPublicaciones = cantPublicaciones;
    }

    public publicarPost(post: string) {
        this.publicaciones.push(post);
        console.log(`El influencer ${this.nombreCuenta} ha publicado: ${post}`);
    }

    public comentarPost(post: string, comentario: string) {
        const index = this.publicaciones.indexOf(post);
        if (index !== -1) {
            console.log(`Comentario en el post: ${comentario}`);
        } else {
            console.log(`El post no fue encontrado.`);
        }
    }    
}

export class Seguidor extends Usuario {
    private intereses: string[];

    constructor(nombre: string, email: string, contraseña: string, intereses: string[]) {
        super(nombre, email, contraseña);
        this.intereses = intereses;
    }

    buscarContenidoRelacionado() {
        console.log(`El seguidor ${this.nombreCuenta} está buscando contenido relacionado a los intereses: ${this.intereses.join(', ')}`);
    }
}

let seguidor1 = new Seguidor('Juan', 'juan@email.com', 'contraseña123', ['tecnología', 'viajes']);
seguidor1.buscarContenidoRelacionado();

const seguidor2 = new Seguidor('Luna', 'luna@email.com', 'clave456', ['deportes', 'moda']);
seguidor2.buscarContenidoRelacionado();