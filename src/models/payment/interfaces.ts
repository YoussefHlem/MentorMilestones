export interface PaymentGateway {
  process(num: number): void;
}
