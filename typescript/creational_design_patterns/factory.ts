abstract class Car {
  constructor(
    public model: string,
    public productionYear: number,
  ) {}

  abstract displayCarInfor(): void;
}

class Sedan extends Car {
  displayCarInfor(): void {
    console.log(
      `This is a Sedan. Model: ${this.model}, Production Year: ${this.productionYear}`,
    );
  }
}

class SUV extends Car {
  displayCarInfor(): void {
    console.log(
      `This is a SUV. Model: ${this.model}, Production Year: ${this.productionYear}`,
    );
  }
}

class Honda extends Car {
  displayCarInfor(): void {
    console.log(
      `This is a Honda. Model: ${this.model}, Production Year: ${this.productionYear}`,
    );
  }
}

class CarFactory {
  static createCar(type: string, model: string, productionYear: number): Car {
    switch (type) {
      case "sedan":
        return new Sedan(model, productionYear);
      case "suv":
        return new SUV(model, productionYear);
      case "honda":
        return new Honda(model, productionYear);
    }
  }
}

const honda = CarFactory.createCar("honda", "Tai", 2001);
console.log(honda);
