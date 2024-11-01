interface ICar {
  make: string;
  model: string;
  year: number;
  color: string;
  engine: string;
}

interface ICarBuilder {
  setMake(make: string): ICarBuilder;
  setModel(model: string): ICarBuilder;
  setYear(year: number): ICarBuilder;
  setColor(color: string): ICarBuilder;
  setEngine(engine: string): ICarBuilder;
}

class Car implements ICar {
  make: string;
  model: string;
  year: number;
  color: string;
  engine: string;

  constructor(builder: CarBuilder) {
    this.make = builder.make;
    this.model = builder.model;
    this.year = builder.year;
    this.color = builder.color;
    this.engine = builder.engine;
  }
}

class CarBuilder implements ICar, ICarBuilder {
  make: string;
  model: string;
  year: number;
  color: string;
  engine: string;

  setMake(make: string): CarBuilder {
    this.make = make;
    return this;
  }

  setModel(model: string): CarBuilder {
    this.model = model;
    return this;
  }

  setYear(year: number): CarBuilder {
    this.year = year;
    return this;
  }

  setColor(color: string): CarBuilder {
    this.color = color;
    return this;
  }

  setEngine(engine: string): CarBuilder {
    this.engine = engine;
    return this;
  }

  build(): Car {
    return new Car(this);
  }
}

const car: Car = new CarBuilder()
  .setMake("Toyota")
  .setModel("Carmy")
  .setYear(2022)
  .setColor("red")
  .build();

console.log(car);
