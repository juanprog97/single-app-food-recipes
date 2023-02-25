import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";
import { Authenticate } from "@/usecases/interactor/authenticate";
import { ILogout, Logout } from "@/usecases/interactor/Logout";
import { User } from "../../domain/entity/index";
import AuthLocalStorage from "@/data/MemoryRepository/authLocalStorage";
import { LocalStorageKeys } from "../utils/managerLocalStorage";
export interface UserState {
  user: User | null;
}

@Module({
  name: "user",
  namespaced: true,
})
export class UserStore extends VuexModule implements UserState {
  public user: User = localStorage.getItem(LocalStorageKeys.AUTH_STATE)
    ? JSON.parse(localStorage.getItem(LocalStorageKeys.AUTH_STATE) as string)
    : "";

  private authenticate: Authenticate = new Authenticate(new AuthLocalStorage());
  private logout: Logout = new Logout(new AuthLocalStorage());

  @Mutation
  setUser(user: string) {
    this.user = { user: user, state: true };
  }
  clearUser() {
    this.user = {};
  }
  @Action({ rawError: true })
  async login(user: User) {
    await this.authenticate.execute(user);

    this.setUser(
      user.email ? user.email.substring(0, user.email?.indexOf("@")) : ""
    );
  }

  @Action({ rawError: true })
  async logoutExit() {
    await this.logout.execute();
    this.clearUser();
  }
}
