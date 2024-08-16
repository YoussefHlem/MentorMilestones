interface ADMIN {
  login(email: string, password: string): void;
}

export class AdminUser implements ADMIN {
  login(email: string, password: string): void {
    console.log("Admin Login", email, password);
  }
}
