var Logger = /** @class */ (function () {
    function Logger() {
        this.logs = [];
    }
    Logger.getInstance = function () {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    };
    Logger.prototype.accederSistema = function (usuario) {
        var timestamp = new Date().toLocaleString();
        var logEntry = "".concat(timestamp, " - Usuario ").concat(usuario, " ha accedido al sistema.");
        this.logs.push(logEntry);
    };
    Logger.prototype.mostrarLogs = function () {
        console.log("Registros de acceso al sistema:");
        this.logs.forEach(function (log, index) {
            console.log("".concat(index + 1, ": ").concat(log));
        });
    };
    Logger.instance = null;
    return Logger;
}());
// Ejemplo de uso
var logger = Logger.getInstance();
logger.accederSistema("Juan Andreu02");
logger.accederSistema("LunaCristofanelli_");
logger.accederSistema("RobertoAlarcon");
logger.mostrarLogs();
