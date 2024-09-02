import { PaymentGateway } from "./interfaces";

export class Paypal implements PaymentGateway {
  process(num: number): void {
    console.log("Paypal Process", num);
  }
}

export class Stripe implements PaymentGateway {
  process(num: number): void {
    console.log("Stripe Process", num);
  }
}

export class Paymob implements PaymentGateway {
  process(num: number): void {
    console.log("Paymob Process", num);
  }
}
