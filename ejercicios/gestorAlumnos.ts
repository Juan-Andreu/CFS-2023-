
class Examen {
  constructor(public nombre: string, public nota: number) {}
}

class Alumno {
  private exams: Examen[] = [];

  constructor(
    public nombre: string,
    public apellido: string,
    public edad: number
  ) {
    this.exams = [];
  }

  agregarExamen(examen: Examen) {
    this.exams.push(examen);
  }

  obtenerPromedio(): number {
    if (this.exams.length === 0) {
      return 0;
    }

    // method reduce:  acumula valores (notas o promedios) a lo largo de una secuencia de exámenes o alumnos, respectivamente, y calcula sumas que luego se dividen para obtener promedios.
    const sumatoriaNotas = this.exams.reduce(
      (sum, examen) => sum + examen.nota,
      0
      );
      return sumatoriaNotas / this.exams.length;
  }
}

class SistemaGestion {
  private alumnos: Alumno[] = [];

  constructor(){}

  agregarAlumno(alumno: Alumno) {
    this.alumnos.push(alumno);
  }

  PromedioGeneralAlumno(nombre: string, apellido: string): number | undefined {
    const alumno = this.alumnos.find(
      (a) => a.nombre === nombre && a.apellido === apellido
    );
    if (alumno) {
      return alumno.obtenerPromedio();
    }
    return undefined;
  }

  obtenerPromedioGeneral(): number {
    if (this.alumnos.length === 0) {
      return 0;
    }

    const sumatoriaPromedios = this.alumnos.reduce(
      (sum, alumno) => sum + alumno.obtenerPromedio(),
      0
    );
    return sumatoriaPromedios / this.alumnos.length;
  }
}

// Ejemplo de uso
const sistema = new SistemaGestion();

const alumno1 = new Alumno("Juan", "Andreu", 21);
alumno1.agregarExamen(new Examen("Matemáticas", 6));
alumno1.agregarExamen(new Examen("Historia", 9));
sistema.agregarAlumno(alumno1);

const alumno2 = new Alumno("Luna", "Cristofanelli", 20);
alumno2.agregarExamen(new Examen("Matemáticas", 7));
alumno2.agregarExamen(new Examen("Historia", 8));
sistema.agregarAlumno(alumno2);

const promedioGeneralAlumno1 = sistema.PromedioGeneralAlumno(
  "Juan",
  "Andreu"
);
const promedioGeneral = sistema.obtenerPromedioGeneral();

console.log("Promedio general de Juan Andreu:", promedioGeneralAlumno1);
console.log("Promedio general de todos los alumnos:", promedioGeneral);
