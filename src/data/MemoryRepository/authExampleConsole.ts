import { User } from "@/domain/entity";
import IAuthRepository from "@/useCases/repository/IAuthRepository";

export default class AuthExampleConsole implements IAuthRepository {
  login(user: User): Promise<void> {
    console.log("good!");
    return new Promise((resolver) => setTimeout(resolver, 100));
  }
  disconnect(): Promise<void> {
    console.log("grow!");
    return new Promise((resolver) => setTimeout(resolver, 100));
  }
}
