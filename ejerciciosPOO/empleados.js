"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empleado = void 0;
var Empleado = /** @class */ (function () {
    function Empleado(nombre, apellido, salario) {
        this.tareas = [];
        this.nombre = nombre;
        this.apellido = apellido;
        this.salario = salario;
    }
    Empleado.prototype.aumentarSalario = function (porcentaje) {
        var aumentoSalarial = (porcentaje / 100) * this.salario;
        this.salario += aumentoSalarial;
        console.log("Su salario aumento un %".concat(porcentaje));
    };
    Empleado.prototype.reducirSalario = function (porcentaje) {
        var reduccionSalarial = (porcentaje / 100) * this.salario;
        this.salario -= reduccionSalarial;
        console.log("Su salario se regujo un %".concat(porcentaje));
    };
    Empleado.prototype.agregarTarea = function (tarea) {
        this.tareas.push(tarea);
        console.log("".concat(this.nombre, " ha recibido la tarea \"").concat(tarea, "\""));
    };
    return Empleado;
}());
exports.Empleado = Empleado;
var Gerente = /** @class */ (function (_super) {
    __extends(Gerente, _super);
    function Gerente(nombre, apellido, salario, area, aniosTrabajados) {
        var _this = _super.call(this, nombre, apellido, salario) || this;
        _this.area = area;
        _this.aniosTrabajados = aniosTrabajados;
        return _this;
    }
    Gerente.prototype.asignarTareas = function (empleado, tarea) {
        console.log("El gerente ".concat(this.nombre, " ha asignado la tarea \"").concat(tarea, "\" a ").concat(empleado.nombre));
    };
    return Gerente;
}(Empleado));
var Trabajador = /** @class */ (function (_super) {
    __extends(Trabajador, _super);
    function Trabajador(nombreEmpleado, apellidoEmpleado, salarioMensualEmpleado, horas) {
        var _this = _super.call(this, nombreEmpleado, apellidoEmpleado, salarioMensualEmpleado) || this;
        _this.horasTrabajadas = horas;
        return _this;
    }
    Trabajador.prototype.solicitarDiaLibre = function () {
        console.log("".concat(this.nombre, " ").concat(this.apellido, " solicit\u00F3 un d\u00EDa libre"));
    };
    return Trabajador;
}(Empleado));
var EmpleadoTemporal = /** @class */ (function (_super) {
    __extends(EmpleadoTemporal, _super);
    function EmpleadoTemporal(nombreEmpleado, apellidoEmpleado, salarioMensualEmpleado, horas, fecha_fin_contrato) {
        var _this = _super.call(this, nombreEmpleado, apellidoEmpleado, salarioMensualEmpleado, horas) || this;
        _this.fechaFinalizacion = _this.fechaFinalizacion;
        return _this;
    }
    EmpleadoTemporal.prototype.verificarVencimientoContrato = function () {
        var fechaActual = new Date();
        /* Comparar la fecha de vencimiento del contrato con la fecha actual */
        if (this.fechaFinalizacion > fechaActual) {
            return false;
        }
        else {
            return true; /* El contrato ha vencido o está a punto de vencer */
            console.log('El contrato ha vencido o está a punto de vencer');
        }
    };
    return EmpleadoTemporal;
}(Trabajador));
var empleado1 = new Empleado("Juan", "Perez", 50000);
console.log("Salario antes del aumento:", empleado1.salario);
empleado1.aumentarSalario(10);
console.log("Salario después del aumento:", empleado1.salario);
empleado1.reducirSalario(5);
console.log("Salario después de la reducción:", empleado1.salario);
console.log('-----------------');
var empleado2 = new Empleado("Juan", "Andreu", 50000);
var gerente1 = new Gerente("Luna", "Cristofanelli", 60000, "Ventas", 3);
gerente1.asignarTareas(empleado2, "Preparar informe de ventas");
console.log(empleado2.tareas);
var fechaFinContrato = new Date('2023-12-31');
var empleadoTemporal = new EmpleadoTemporal("Juan", "Perez", 3000, 40, fechaFinContrato);
console.log(empleadoTemporal.verificarVencimientoContrato());
