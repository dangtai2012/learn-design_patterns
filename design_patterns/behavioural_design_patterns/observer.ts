interface Observer {
  update(temperature: number, humidity: number, pressure: number): void;
}

interface Subject {
  registerObserver(observer: Observer): void;

  removeObserver(observer: Observer): void;

  notifyObservers(): void;
}

class WeatherData implements Subject {
  private observers: Observer[];
  private temperature: number | undefined;
  private humidity: number | undefined;
  private pressure: number | undefined;

  constructor() {
    this.observers = [];
  }

  registerObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index >= 0) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers(): void {
    if (
      this.temperature !== undefined &&
      this.humidity !== undefined &&
      this.pressure !== undefined
    ) {
      for (let observer of this.observers) {
        observer.update(this.temperature, this.humidity, this.pressure);
      }
    }
  }

  setMeasurements(
    temperature: number,
    humidity: number,
    pressure: number,
  ): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.notifyObservers();
  }
}

class CurrentCoditionsDisplay implements Observer {
  private temperature: number | undefined;
  private humidity: number | undefined;
  private pressure: number | undefined;

  constructor(private weatherData: Subject) {
    this.weatherData.registerObserver(this);
  }

  update(temperature: number, humidity: number, pressure: number): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.display();
  }

  display(): void {
    if (this.temperature !== undefined && this.humidity !== undefined) {
      console.log(
        `Current conditions: ${this.temperature}F degrees and ${this.humidity}% humidity`,
      );
    } else {
      console.log("Weather data is not available");
    }
  }
}

// client code
const weatherData = new WeatherData();
new CurrentCoditionsDisplay(weatherData);

// Simulate new weather measurements
weatherData.setMeasurements(80, 65, 30.4);
weatherData.setMeasurements(82, 70, 29.2);
