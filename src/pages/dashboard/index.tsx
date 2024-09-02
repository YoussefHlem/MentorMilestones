import FileConvertion from "@/models/FileConverter";
import { LocalConversion } from "@/models/FileConverter/Converters";
import { PDFFile } from "@/models/FileConverter/FileFormats";
import payment from "@/models/payment";
import { Paypal } from "@/models/payment/PaymentGateways";
import { CreditCard } from "@/models/payment/PaymentMethods";

export default function Dashboard() {
  const paymentHandler = (amount: number) => {
    const paymentGateway = new Paypal();
    const paymentMethod = new CreditCard(paymentGateway);
    payment(paymentMethod, amount);
  };

  const ConvertionHandler = () => {
    const convertMethod = new LocalConversion();
    const PDF = new PDFFile(convertMethod);
    FileConvertion(PDF, "DOCX");
  };
  return (
    <h1>
      Dashboard
      <button onClick={() => paymentHandler(100)}>Buy Something</button>
      <button onClick={() => ConvertionHandler()}>Convert File</button>
    </h1>
  );
}
