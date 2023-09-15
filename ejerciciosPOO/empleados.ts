export class Empleado {
  nombre: string;
  apellido: string;
  salario: number;
  tareas: string[] = [];

  constructor(nombre: string, apellido: string, salario: number) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.salario = salario;
  }

  aumentarSalario(porcentaje: number): void {
    const aumentoSalarial = (porcentaje / 100) * this.salario;
    this.salario += aumentoSalarial;
    console.log(`Su salario aumento un %${porcentaje}`);
  }

  reducirSalario(porcentaje: number): void {
    const reduccionSalarial = (porcentaje / 100) * this.salario;
    this.salario -= reduccionSalarial;
    console.log(`Su salario se regujo un %${porcentaje}`);
  }

  agregarTarea(tarea: string): void {
    this.tareas.push(tarea);
    console.log(`${this.nombre} ha recibido la tarea "${tarea}"`);
  }
}

class Gerente extends Empleado {
  private area: string;
  private aniosTrabajados: number;

  constructor(
    nombre: string,
    apellido: string,
    salario: number,
    area: string,
    aniosTrabajados: number
  ) {
    super(nombre, apellido, salario);
    this.area = area;
    this.aniosTrabajados = aniosTrabajados;
  }

  asignarTareas(empleado: Empleado, tarea: string): void {
    console.log(
      `El gerente ${this.nombre} ha asignado la tarea "${tarea}" a ${empleado.nombre}`
    );
  }
}

class Trabajador extends Empleado {
    private horasTrabajadas: number;

    public constructor(nombreEmpleado: string, apellidoEmpleado: string, salarioMensualEmpleado: number, horas: number) {
        super(nombreEmpleado, apellidoEmpleado, salarioMensualEmpleado);
        this.horasTrabajadas = horas;
    }

    public solicitarDiaLibre(): void {
        console.log(`${this.nombre} ${this.apellido} solicitó un día libre`);
    }
}


class EmpleadoTemporal extends Trabajador {
    private fechaFinalizacion: Date;

    constructor(nombreEmpleado: string, apellidoEmpleado: string, salarioMensualEmpleado: number, horas: number, fecha_fin_contrato: Date) {
        super(nombreEmpleado, apellidoEmpleado, salarioMensualEmpleado, horas);
        this.fechaFinalizacion = this.fechaFinalizacion;
    }

    verificarVencimientoContrato(): boolean {
        const fechaActual = new Date();

        /* Comparar la fecha de vencimiento del contrato con la fecha actual */
        if (this.fechaFinalizacion > fechaActual) {
            return false; 
        } else {
            return true; /* El contrato ha vencido o está a punto de vencer */
        }
    }
}

const empleado1 = new Empleado("Juan", "Perez", 50000);
console.log("Salario antes del aumento:", empleado1.salario);
empleado1.aumentarSalario(10);
console.log("Salario después del aumento:", empleado1.salario);
empleado1.reducirSalario(5);
console.log("Salario después de la reducción:", empleado1.salario);

console.log('-----------------')

const empleado2 = new Empleado("Juan", "Andreu", 50000);
const gerente1 = new Gerente("Luna", "Cristofanelli", 60000, "Ventas", 3);

gerente1.asignarTareas(empleado2, "Preparar informe de ventas");
console.log(empleado2.tareas);

const fechaFinContrato = new Date('2023-12-31');
const empleadoTemporal = new EmpleadoTemporal("Juan", "Perez", 3000, 40, fechaFinContrato);

console.log(empleadoTemporal.verificarVencimientoContrato());