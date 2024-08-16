interface CUSTOMER {
  login(email: string, password: string): void;
  register(email: string, password: string, password_confirmation: string, name: string): void;
  edit(email: string, password: string, password_confirmation: string, name: string): void;
  delete(email: string, password: string): void;
}

export class CustomerUser implements CUSTOMER {
  login(email: string, password: string): void {
    console.log("Customer Login", email, password);
  }

  register(email: string, password: string, password_confirmation: string, name: string): void {
    console.log("Customer Login", email, password, password_confirmation, name);
  }

  edit(email: string, password: string, password_confirmation: string, name: string): void {
    console.log("Customer Login", email, password, password_confirmation, name);
  }

  delete(email: string, password: string): void {
    console.log("Customer Login", email, password);
  }
}
