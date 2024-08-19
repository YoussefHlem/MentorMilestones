import { toast } from "react-toastify";
import { Notification, AbstractNotification } from "./interfaces";

class FailureNotification implements Notification {
  constructor(public message: string) {
    this.toastExecution();
  }
  toastExecution(): void {
    toast.error(this.message);
  }
}

export class Failure implements AbstractNotification {
  createNotification(message: string): Notification {
    return new FailureNotification(message);
  }
}
