import { inject, injectable } from "inversify";
import { User } from "@/domain/entity";

import IAuthRepository from "@/useCases/repository/IAuthRepository";

export interface AuthenticateI {
  execute(user: User): Promise<User>;
}

export class Authenticate implements AuthenticateI {
  private _authRepository: IAuthRepository;
  constructor(authRepository: IAuthRepository) {
    this._authRepository = authRepository;
  }
  execute(user: User): Promise<User> {
    return this._authRepository.login(user);
  }
}
