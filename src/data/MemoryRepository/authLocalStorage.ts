import { User } from "@/domain/entity";

import { RemoveLocalStorage } from "../../app/utils/managerLocalStorage";
import {
  saveInLocalStorage,
  LocalStorageKeys,
} from "@/app/utils/managerLocalStorage";
import IAuthRepository from "@/useCases/repository/IAuthRepository";

export default class AuthLocalStorage implements IAuthRepository {
  login(user: User): Promise<User> {
    const value = {
      email: user.email,
      username: user.email
        ? user.email.substring(0, user.email?.indexOf("@"))
        : "",
    } as User;

    saveInLocalStorage(
      LocalStorageKeys.AUTH_STATE,
      JSON.stringify({ ...value, state: "true" })
    );
    return Promise.resolve(value);
  }
  disconnect(): Promise<void> {
    RemoveLocalStorage(LocalStorageKeys.AUTH_STATE);
    return new Promise((resolver) => setTimeout(resolver, 100));
  }
}
