import { seedData } from "../seedData/seedData";
import { User } from "../domains/User";

export class UserRepository {

  getUser(email: string, password: string) {
    const user = seedData.users.find(
      (usr) => usr.email === email && usr.password === password
    );

    return user;
  }

  addUser(name: string, email: string, password: string){
    const usersLength = seedData.users.length;
    let nextId = Number(usersLength) + 1;
    const newUser = new User(nextId.toString(),name,email,password);
    seedData.users.push(newUser);
    return newUser;

  }

}