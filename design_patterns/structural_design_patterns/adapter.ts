interface IPaymentResponse {
  success: boolean;
  cardInfor: { cardNumber: string; expDate: string; cvv: string };
  amount: number;
  message: string;
}

class ThirdPartyPaymentSystem {
  processPayment(
    cardInfor: { cardNumber: string; expDate: string; cvv: string },
    amount: number,
  ): IPaymentResponse {
    return {
      success: true,
      cardInfor,
      amount,
      message: "Third party payment successful",
    };
  }
}

interface IPaymentProcessor {
  processPayment(
    cardInfor: { cardNumber: string; expDate: string; cvv: string },
    amount: number,
  ): unknown;
}

class PaymentAdapter implements IPaymentProcessor {
  constructor(private thirdPartyPaymentSystem: ThirdPartyPaymentSystem) {}

  processPayment(
    cardInfor: { cardNumber: string; expDate: string; cvv: string },
    amount: number,
  ) {
    return this.thirdPartyPaymentSystem.processPayment(cardInfor, amount);
  }
}

const thirdPartyPaymentSystem = new ThirdPartyPaymentSystem();
const paymentAdapter = new PaymentAdapter(thirdPartyPaymentSystem);

const paymentSuccessful = paymentAdapter.processPayment(
  {
    cardNumber: "123456789",
    expDate: "12/24",
    cvv: "123",
  },
  100,
);
console.log("🚀 ~ paymentSuccessful:", paymentSuccessful);
