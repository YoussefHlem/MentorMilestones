import { Success } from "./success";
import { Failure } from "./failure";

export const notification = (success: boolean, message: string) => {
  if (success) {
    return new Success().createNotification(message || "Operation was successful!");
  }
  return new Failure().createNotification(message || "Operation failed.");
};
