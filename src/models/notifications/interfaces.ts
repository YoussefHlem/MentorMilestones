export interface Notification {
  message: string;
  toastExecution(message: string, type: string): void;
}

export interface AbstractNotification {
  createNotification(message: string): Notification;
}
