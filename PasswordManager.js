// Diferentes tipos de password, y a su vez poder usar esos password como autenticadores
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
var Password = /** @class */ (function () {
    function Password(longituMinima, incluyeNumero, incluyeMayuscula) {
        this.longitudMinima = longituMinima;
        this.incluyeNumero = incluyeNumero;
        this.incluyeMayuscula = incluyeMayuscula;
    }
    Password.prototype.esPasswordValido = function (password) {
        var PasswordValid = true;
        if (password.length < this.longitudMinima) {
            PasswordValid = false;
        }
        if (this.incluyeNumero) {
            var tieneNumero = false;
            for (var index = 0; index < password.length; index++) {
                var caracter = password[index];
                // '1234567890'.includes(caracter) es lo mismo que preguntar si caracter es un numero
                tieneNumero = tieneNumero || '1234567890'.includes(caracter);
            }
            if (!tieneNumero) {
                PasswordValid = false;
            }
        }
        if (this.incluyeMayuscula) {
            var tieneMayuscula = false;
            for (var index = 0; index < password.length; index++) {
                var caracter = password[index];
                tieneMayuscula = tieneMayuscula || caracter.toUpperCase() == caracter;
            }
            if (!tieneMayuscula) {
                PasswordValid = false;
            }
        }
        return PasswordValid;
    };
    return Password;
}());
var PasswordDebil = /** @class */ (function (_super) {
    __extends(PasswordDebil, _super);
    function PasswordDebil() {
        return _super.call(this, 5, false, false) || this;
    }
    return PasswordDebil;
}(Password));
var PasswordFuerte = /** @class */ (function (_super) {
    __extends(PasswordFuerte, _super);
    function PasswordFuerte() {
        return _super.call(this, 8, true, true) || this;
    }
    return PasswordFuerte;
}(Password));
