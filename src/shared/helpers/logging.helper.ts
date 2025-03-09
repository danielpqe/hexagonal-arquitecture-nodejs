import * as winston from "winston";

export class Logger {
  transports: any[] = [];
  static instace: any;
  private logger!: winston.Logger;

  private constructor() {}

  static getLogger(): winston.Logger {
    if (!Logger.instace) {
      Logger.instace = new Logger();
      Logger.instace.addTransport(Transport.console).create();
    }
    return Logger.instace.logger;
  }

  addTransport(transport: any) {
    this.transports.push(transport);
    return this;
  }

  create() {
    const logger = winston.createLogger({
      level: "info",
      transports: this.transports,
      format: winston.format.combine(winston.format(this.createTagged)()),
    });
    this.logger = logger;
  }

  createTagged(logEntry: any) {
    const tag = {
      env: "dev",
    };
    const taggedLog = Object.assign(tag, logEntry);
    logEntry["message"] = JSON.stringify(taggedLog);
    return logEntry;
  }
}

export class Transport {
  static get console() {
    return new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.cli({
          colors: {
            info: "green",
            error: "red",
            warn: "yellow",
          },
        })
      ),
    });
  }
}
