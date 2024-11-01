class Logger {
  private static instance: Logger;
  private constructor() {}

  public static getInstance() {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }

    return Logger.instance;
  }

  public log(message: string) {
    const timestamp = new Date();
    console.log(`[${timestamp.toLocaleString()}] - ${message}`);
  }
}

const logger1 = Logger.getInstance();
logger1.log("Hello");

const logger2 = Logger.getInstance();
logger2.log("World");
