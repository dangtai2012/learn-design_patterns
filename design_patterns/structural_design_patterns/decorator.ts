interface Coffee {
  cost(): number;
  description(): string;
}

abstract class CoffeeDecorator implements Coffee {
  constructor(protected coffee: Coffee) {}
  abstract cost(): number;
  abstract description(): string;
}

class SimpleCoffee implements Coffee {
  cost(): number {
    return 10;
  }
  description(): string {
    return "Simple Coffee";
  }
}

class Milk extends CoffeeDecorator {
  cost() {
    return this.coffee.cost() + 2;
  }

  description() {
    return `${this.coffee.description()}, with milk`;
  }
}

let coffee = new SimpleCoffee();
console.log("🚀 ~ coffee cost:", coffee.cost());
console.log("🚀 ~ coffee description:", coffee.description());

coffee = new Milk(coffee);
console.log("🚀 ~ coffee cost:", coffee.cost());
console.log("🚀 ~ coffee description:", coffee.description());
