import { seedData } from "../seedData/seedData";

export class UserRepository {

  getUser(email: string, password: string) {
    const user = seedData.users.find(
      (usr) => usr.email === email && usr.password === password
    );

    return user;
  }

}