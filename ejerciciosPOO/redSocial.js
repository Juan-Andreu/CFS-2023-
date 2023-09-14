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
exports.Seguidor = exports.Influencer = exports.Usuario = void 0;
var Usuario = /** @class */ (function () {
    function Usuario(nombre, email, contraseña) {
        this.nombreCuenta = nombre;
        this.email = email;
        this.contraseña = contraseña;
    }
    Usuario.prototype.publicarPost = function (post) {
        console.log("El usuario ".concat(this.nombreCuenta, " ha publicado: ").concat(post));
    };
    Usuario.prototype.comentarPost = function (post, comentario) {
        console.log("El usuario ".concat(this.nombreCuenta, " ha comentado en el post: ").concat(comentario));
    };
    return Usuario;
}());
exports.Usuario = Usuario;
var Influencer = /** @class */ (function (_super) {
    __extends(Influencer, _super);
    function Influencer(nombre, email, contraseña, seguidos, seguidores, cantPublicaciones) {
        var _this = _super.call(this, nombre, email, contraseña) || this;
        _this.publicaciones = [];
        _this.seguidos = seguidos;
        _this.seguidores = seguidores;
        _this.cantPublicaciones = cantPublicaciones;
        return _this;
    }
    Influencer.prototype.publicarPost = function (post) {
        this.publicaciones.push(post);
        console.log("El influencer ".concat(this.nombreCuenta, " ha publicado: ").concat(post));
    };
    Influencer.prototype.comentarPost = function (post, comentario) {
        var index = this.publicaciones.indexOf(post);
        if (index !== -1) {
            console.log("Comentario en el post: ".concat(comentario));
        }
        else {
            console.log("El post no fue encontrado.");
        }
    };
    return Influencer;
}(Usuario));
exports.Influencer = Influencer;
var Seguidor = /** @class */ (function (_super) {
    __extends(Seguidor, _super);
    function Seguidor(nombre, email, contraseña, intereses) {
        var _this = _super.call(this, nombre, email, contraseña) || this;
        _this.intereses = intereses;
        return _this;
    }
    Seguidor.prototype.buscarContenidoRelacionado = function () {
        console.log("El seguidor ".concat(this.nombreCuenta, " est\u00E1 buscando contenido relacionado a los intereses: ").concat(this.intereses.join(', ')));
    };
    return Seguidor;
}(Usuario));
exports.Seguidor = Seguidor;
var seguidor1 = new Seguidor('Juan', 'juan@email.com', 'contraseña123', ['tecnología', 'viajes']);
seguidor1.buscarContenidoRelacionado();
var seguidor2 = new Seguidor('Luna', 'luna@email.com', 'clave456', ['deportes', 'moda']);
seguidor2.buscarContenidoRelacionado();
