import { AdminUser } from "./admin";
import { CustomerUser } from "./customer";

interface AUTH {
  userType: "admin" | "customer";
  getUserInstance(userType: "admin" | "customer"): AdminUser | CustomerUser | null;
}

export class Authentication implements AUTH {
  constructor(public userType: "admin" | "customer") {}

  public getUserInstance(): AdminUser | CustomerUser | null {
    switch (this.userType) {
      case "admin":
        return new AdminUser();
      case "customer":
        return new CustomerUser();
      default:
        return null;
    }
  }
}
