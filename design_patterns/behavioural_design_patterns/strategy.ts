interface PaymentStrategy {
  pay(amount: number): void;
}

class PayPalStrategy implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid ${amount} using PayPal.`);
  }
}

class CreditCardStrategy implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid ${amount} using Credit Card.`);
  }
}

class BitcoinStrategy implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid ${amount} using Bitcoin.`);
  }
}

class ShoppingCart {
  private amount: number;

  constructor(private strategy: PaymentStrategy) {
    this.amount = 0;
  }

  setPaymentStrategy(strategy: PaymentStrategy): void {
    this.strategy = strategy;
  }

  addToCart(value: number): void {
    this.amount += value;
  }

  checkout(): void {
    this.strategy.pay(this.amount);
    this.amount = 0;
  }
}

const cart = new ShoppingCart(new PayPalStrategy());
cart.addToCart(100);
cart.addToCart(200);
cart.addToCart(300);
cart.checkout();

cart.setPaymentStrategy(new CreditCardStrategy());
cart.addToCart(400);
cart.addToCart(500);
cart.checkout();

cart.setPaymentStrategy(new BitcoinStrategy());
cart.addToCart(400);
cart.addToCart(500);
cart.checkout();
