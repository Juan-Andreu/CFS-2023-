class Logger {
    private static instance: Logger | null = null;
    private logs: string[] = [];

    private constructor() {}

    static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    accederSistema(usuario: string): void {
        const timestamp = new Date().toLocaleString();
        const logEntry = `${timestamp} - Usuario ${usuario} accedido al sistema.`;
        this.logs.push(logEntry);
    }

    mostrarLogs(): void {
        console.log("Registros de acceso al sistema:");
        this.logs.forEach((log, index) => {
            console.log(`${index + 1}: ${log}`);
        });
    }
}

// Ejemplo de uso
const logger = Logger.getInstance();

logger.accederSistema("Juan Andreu02");
logger.accederSistema("LunaCristofanelli_");
logger.accederSistema("RobertoAlarcon");

logger.mostrarLogs();
