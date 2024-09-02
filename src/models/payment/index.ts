import { PaymentMethod } from "./PaymentMethods";

export default function payment(paymentMethod: PaymentMethod, amount: number) {
  paymentMethod.processPayment(amount);
}
