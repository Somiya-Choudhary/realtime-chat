export class User {
  userId: string;
  name: string;
  email: string;
  password: string;

  constructor(id: string, name: string, email: string, password: string) {
    this.userId = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
