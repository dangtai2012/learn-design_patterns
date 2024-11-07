abstract class DataProcessingAlgorithm {
  protected abstract readData(): string;
  protected abstract processData(data: string): string;
  protected abstract writeData(data: string): void;

  public execute(): void {
    const data = this.readData();
    const processedData = this.processData(data);
    this.writeData(processedData);
  }
}

class CSVDataProcessingAlgorithm extends DataProcessingAlgorithm {
  protected readData(): string {
    console.log("Read data");
    return "CSV data";
  }

  protected processData(data: string): string {
    console.log(`Process data: ${data}`);
    return data;
  }

  protected writeData(data: string): void {
    console.log(`Write data: ${data}`);
  }
}

class DatabaseDataProcessingAlgorithm extends DataProcessingAlgorithm {
  protected readData(): string {
    return "Database data";
  }

  protected processData(data: string): string {
    return data;
  }

  protected writeData(data: string): void {
    console.log(data);
  }
}

const csvAlgorithm = new CSVDataProcessingAlgorithm();
csvAlgorithm.execute();
