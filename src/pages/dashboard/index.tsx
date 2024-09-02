import payment from "@/models/payment";
import { Paypal } from "@/models/payment/PaymentGateways";
import { CreditCard } from "@/models/payment/PaymentMethods";

export default function Dashboard() {
  const paymentHandler = (amount: number) => {
    const paymentGateway = new Paypal();
    const paymentMethod = new CreditCard(paymentGateway);
    payment(paymentMethod, amount);
  };
  return (
    <h1>
      Dashboard
      <button onClick={() => paymentHandler(100)}>Buy Something</button>
    </h1>
  );
}
