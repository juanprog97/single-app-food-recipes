import { inject, injectable } from "inversify";

import AuthRepository from "@/useCases/repository/IAuthRepository";
export interface ILogout {
  execute(): Promise<void>;
}

export class Logout implements ILogout {
  private _authRepository: AuthRepository;
  constructor(authRepository: AuthRepository) {
    this._authRepository = authRepository;
  }
  execute(): Promise<void> {
    return this._authRepository.disconnect();
  }
}
