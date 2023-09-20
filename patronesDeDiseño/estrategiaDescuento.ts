import * as fs from 'fs';
import * as readlineSync from "readline-Sync";
interface Persona {
    nombre: string;
    apellido: string;
    fechaNacimiento: string;
    documento: number;
    telefono: number;
}
abstract class MiembroClub implements Persona {
    public constructor(
        public nombre: string,
        public apellido: string,
        public fechaNacimiento: string,
        public documento: number,
        public telefono: number,
        public miembroDesde: string
    ) { }
}
enum Deporte {
    Futbol = 'Futbol',
    Basquet = 'Basquet',
    Zumba = 'Zumba',
    Voley = 'Voley',
    Natacion = 'Natacion',
    Gym = 'Gym'
}
class Jugador extends MiembroClub {
    public constructor(
        nombre: string,
        apellido: string,
        fechaNacimiento: string,
        documento: number,
        telefono: number,
        public deporte: Deporte
    ) {
        super(nombre, apellido, fechaNacimiento, documento, telefono, new Date().toLocaleDateString());
    }
}
class GestorClub {
    private socios: Jugador[] = [];
    private archivoJSON: string = 'socios.json';
    constructor() {
        this.cargarSociosDesdeArchivo();
    }
    private cargarSociosDesdeArchivo() {
        try {
            const data = fs.readFileSync(this.archivoJSON, 'utf-8');
            this.socios = JSON.parse(data);
        } catch (error) {
            this.socios = [];
        }
    }
    private guardarSociosEnArchivo() {
        const data = JSON.stringify(this.socios, null, 2);
        fs.writeFileSync(this.archivoJSON, data, 'utf-8');
    }
    agregarSocio(socio: Jugador) {
        this.socios.push(socio);
        this.guardarSociosEnArchivo();
    }
    buscarSociosPorNombre(nombre: string): Jugador[] {
        return this.socios.filter(socio => socio.nombre === nombre);
    }
    buscarSociosPorDeporte(deporte: Deporte): Jugador[] {
        return this.socios.filter(socio => socio.deporte === deporte);
    }
    buscarSociosPorDocumento(documento: number): Jugador[] {
        return this.socios.filter(socio => socio.documento === documento);
    }
    buscarSociosPorTelefono(telefono: number): Jugador[] {
        return this.socios.filter(socio => socio.telefono === telefono);
    }
}
let gestor = new GestorClub();
for (let i = 1; i <= 10; i++) {
    let nombre = readlineSync.question('Ingrese el nombre: ');
    let apellido = readlineSync.question('Ingrese el apellido: ');
    let fechaNacimiento = '01/01/1990';
    let documento = 1000000 + i;
    let telefono = 2000000 + i;
    let deporte = Deporte.Futbol;
    let socio = new Jugador(nombre, apellido, fechaNacimiento, documento, telefono, deporte);
    gestor.agregarSocio(socio);
}
let nombreBuscado = readlineSync.question('Ingrese el nombre a buscar: ');
let sociosEncontrados = gestor.buscarSociosPorNombre(nombreBuscado);
console.log('Socios encontrados por nombre:');
console.log(sociosEncontrados);