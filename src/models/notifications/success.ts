import { toast } from "react-toastify";
import { Notification, AbstractNotification } from "./interfaces";

class SuccessNotification implements Notification {
  constructor(public message: string) {
    this.toastExecution();
  }
  toastExecution(): void {
    toast.success(this.message);
  }
}

export class Success implements AbstractNotification {
  createNotification(message: string): Notification {
    return new SuccessNotification(message);
  }
}
