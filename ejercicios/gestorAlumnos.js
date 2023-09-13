var Examen = /** @class */ (function () {
    function Examen(nombre, nota) {
        this.nombre = nombre;
        this.nota = nota;
    }
    return Examen;
}());
var Alumno = /** @class */ (function () {
    function Alumno(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.exams = [];
        this.exams = [];
    }
    Alumno.prototype.agregarExamen = function (examen) {
        this.exams.push(examen);
    };
    Alumno.prototype.obtenerPromedio = function () {
        if (this.exams.length === 0) {
            return 0;
        }
        // method reduce:  acumula valores (notas o promedios) a lo largo de una secuencia de exámenes o alumnos, respectivamente, y calcula sumas que luego se dividen para obtener promedios.
        var sumatoriaNotas = this.exams.reduce(function (sum, examen) { return sum + examen.nota; }, 0);
        return sumatoriaNotas / this.exams.length;
    };
    return Alumno;
}());
var SistemaGestion = /** @class */ (function () {
    function SistemaGestion() {
        this.alumnos = [];
    }
    SistemaGestion.prototype.agregarAlumno = function (alumno) {
        this.alumnos.push(alumno);
    };
    SistemaGestion.prototype.PromedioGeneralAlumno = function (nombre, apellido) {
        var alumno = this.alumnos.find(function (a) { return a.nombre === nombre && a.apellido === apellido; });
        if (alumno) {
            return alumno.obtenerPromedio();
        }
        return undefined;
    };
    SistemaGestion.prototype.obtenerPromedioGeneral = function () {
        if (this.alumnos.length === 0) {
            return 0;
        }
        var sumatoriaPromedios = this.alumnos.reduce(function (sum, alumno) { return sum + alumno.obtenerPromedio(); }, 0);
        return sumatoriaPromedios / this.alumnos.length;
    };
    return SistemaGestion;
}());
// Ejemplo de uso
var sistema = new SistemaGestion();
var alumno1 = new Alumno("Juan", "Andreu", 21);
alumno1.agregarExamen(new Examen("Matemáticas", 6));
alumno1.agregarExamen(new Examen("Historia", 9));
sistema.agregarAlumno(alumno1);
var alumno2 = new Alumno("Luna", "Cristofanelli", 20);
alumno2.agregarExamen(new Examen("Matemáticas", 7));
alumno2.agregarExamen(new Examen("Historia", 8));
sistema.agregarAlumno(alumno2);
var promedioGeneralAlumno1 = sistema.PromedioGeneralAlumno("Juan", "Andreu");
var promedioGeneral = sistema.obtenerPromedioGeneral();
console.log("Promedio general de Juan Andreu:", promedioGeneralAlumno1);
console.log("Promedio general de todos los alumnos:", promedioGeneral);
