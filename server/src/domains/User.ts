export class User {
  userId: string;
  name: string;
  email: string;

  constructor(id: string, name: string, email: string) {
    this.userId = id;
    this.name = name;
    this.email = email;
  }
}
