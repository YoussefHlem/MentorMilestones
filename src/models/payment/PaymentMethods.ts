import { PaymentGateway } from "./interfaces";

export abstract class PaymentMethod {
  protected paymentGateway: PaymentGateway;

  constructor(paymentGateway: PaymentGateway) {
    this.paymentGateway = paymentGateway;
  }

  processPayment(amount: number) {
    this.paymentGateway.process(amount);
  }
}

export class CreditCard extends PaymentMethod {
  creditPaymentProcess(amount: number) {
    console.log("credit card processing");
    this.processPayment(amount);
  }
}

export class DebitCard extends PaymentMethod {
  debitPaymentProcess(amount: number) {
    console.log("debit card processing");
    this.processPayment(amount);
  }
}

export class Paymob extends PaymentMethod {
  payMobPaymentProcess(amount: number) {
    console.log("Paymob processing");
    this.processPayment(amount);
  }
}
