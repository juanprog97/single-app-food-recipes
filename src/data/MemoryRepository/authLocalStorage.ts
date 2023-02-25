import { User } from "@/domain/entity";

import { clearLocalStorage } from "../../app/utils/managerLocalStorage";
import {
  saveInLocalStorage,
  LocalStorageKeys,
} from "@/app/utils/managerLocalStorage";
import IAuthRepository from "@/useCases/repository/IAuthRepository";

export default class AuthLocalStorage implements IAuthRepository {
  login(user: User): Promise<void> {
    const value = JSON.stringify({
      user: user.email,
      state: "true",
    });
    saveInLocalStorage(LocalStorageKeys.AUTH_STATE, value);
    return new Promise((resolver) => setTimeout(resolver, 100));
  }
  disconnect(): Promise<void> {
    clearLocalStorage();
    return new Promise((resolver) => setTimeout(resolver, 100));
  }
}
