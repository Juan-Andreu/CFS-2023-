interface Contactable {
  getEmail(): string;
  getTel(): string;
}
abstract class NotificacionService {
  abstract enviarNotificacion(mensaje: string, contacto?: Contactable): void;
}
class EmailNotificacionService extends NotificacionService {
  enviarNotificacion(mensaje: string, contacto?: Contactable): void {
    if (contacto) {
      console.log(`Se envia por correo a ${contacto.getEmail()}: ${mensaje}`);
    }
  }
}
class SmsNotificacionService extends NotificacionService {
  enviarNotificacion(mensaje: string, contacto?: Contactable): void {
    if (contacto) {
      console.log(`Se envia por sms a ${contacto.getTel()}: ${mensaje}`);
    }
  }
}
class Contacto implements Contactable {
  protected email: string;
  protected tel: string;
  constructor(email: string, tel: string) {
    this.email = email;
    this.tel = tel;
  }
  getEmail() {
    return this.email;
  }
  getTel() {
    return this.tel;
  }
}
class Usuario {
  protected nombreusuario: string;
  protected contacto?: Contacto;
  constructor(nombreusuario: string) {
    this.nombreusuario = nombreusuario;
  }
  getNombreUsuario() {
    return this.nombreusuario;
  }
  getContacto() {
    return this.contacto;
  }
  setContacto(contacto: Contacto) {
    this.contacto = contacto;
  }
}
class Empresa implements Contactable {
  getEmail(): string {
    return "empresa@gmail.com";
  }
  getTel(): string {
    return "0888-265-4455";
  }
}
class Aplicacion {
  protected servicioNotificacion;
  constructor(servicioNotificacion: NotificacionService) {
    this.servicioNotificacion = servicioNotificacion;
  }
  ejecutar(usuario: Usuario) {
    this.servicioNotificacion.enviarNotificacion(
      `Hola ${usuario.getNombreUsuario()} se ejecuta tu APP`,
      usuario.getContacto()
    );
  }
}
class AplicacionEmpresa {
  protected servicioNotificacion;
  constructor(servicioNotificacion: NotificacionService) {
    this.servicioNotificacion = servicioNotificacion;
  }
  ejecutar(empresa: Empresa): void {
    this.servicioNotificacion.enviarNotificacion(`Mensaje a empresa`, empresa);
  }
}
///      ----------------------------------------------
const not1 = new EmailNotificacionService();
const not2 = new SmsNotificacionService();
const usuario = new Usuario("ecavani");
const contacto1 = new Contacto("ecavani@gmail.com", "2284-555669");
usuario.setContacto(contacto1);

const aplicacion = new Aplicacion(not2);
aplicacion.ejecutar(usuario);

const aplicacionEmpresa = new AplicacionEmpresa(not1);
aplicacionEmpresa.ejecutar(new Empresa());

// /*  A nivel pantalla*/
// activarUsuario(){
//     try {
//         activarUsuario();
//     } catch (error:Error) {
//         if (error.messge === 'No s encuentra usuario') {
//             mostrarMensaje ('No se encuentra usuario para activar')
//             redureccionarACreacionUsuario();
//         } else {
//             mostrarMensaje ('Ha ocurrido un error, contacte administrador')
//         }
//     }
// }

// /* base de datos*/
// activarUsiario(){
//     updateEstadoUsuario();
// }

// /* transacciones */
// updateEstadoUsuario(usuarioID: number; estado: number) {
// try {
//     // actualizo
// } catch (error: Error) {
//     if (error.code === 1){
//         throw new Error("No se encuentra usuario")
//     } else {
//         throw new Error("Error inesperado")
//     }
// }
// }

class TransaccionCompleta {
  public movimientoInventario: Inventario;
  public datosCliente: Cliente;
  public producto: Producto[];

  constructor() {}
}

interface Builder {
  build(trx: TransaccionCompleta, trxID: number): TransaccionCompleta;
}

class ProductoBuilder implements Builder {
  build(trx: TransaccionCompleta, trxID: number): TransaccionCompleta {
    let cli: Cliente = BaseDatos.getCliente(trxID);
    trx.datosCliente = cli;
  }
}

class ClienteBuilder implements Builder {
  build(trx: TransaccionCompleta, trxID: number): TransaccionCompleta {
    let prod: Producto = BaseDatos.getProducto(trxID);
    trx.producto = prod;
  }
}

// Director
class BuilderTransaccion {
  // Builders
  clienteBuilder: ClienteBuilder;
  productoBuilder: ProductoBuilder;
  trxID: number;

  constructor(trxID: number) {
    this.trxID = trxID;
  }

  construirTransaccion(): TransaccionCompleta {
    let trxCompleta: TransaccionCompleta = new TransaccionCompleta();
    trxCompleta = this.clienteBuilder.build(trxCompleta, this.trxID);
    trxCompleta = this.productoBuilder.build(trxCompleta, this.trxID);
    return trxCompleta;
  }
}

let transaccion = new BuilderTransaccion(5).construirTransaccion();

class DBConector {
  protected conexionDb;

  private static me: DBConector | undefined;

  constructor() {
    this.conexionDb = new RTCPeerConnection();
  }

  public static getInstance() {
    if (this.me) {
      return this.me;
    }
    this.me = new DBConector();
    return this.me;
  }

  public getConexion() {
    return this.conexionDb;
  }
}

DBConector.getInstance().getConexion();

DBConector.getInstance().getConexion();
