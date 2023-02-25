import { User } from "@/domain/entity";

export default interface IAuthRepository {
  login(user: User): Promise<User>;
  disconnect(): Promise<void>;
}
