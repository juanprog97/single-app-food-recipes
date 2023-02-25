import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";
import { Authenticate } from "@/usecases/interactor/authenticate";
import { ILogout, Logout } from "@/usecases/interactor/Logout";
import { User } from "../../domain/entity/index";
import AuthLocalStorage from "@/data/MemoryRepository/authLocalStorage";
import AuthExampleConsole from "../../data/MemoryRepository/authExampleConsole";

export interface UserState {
  user: string;
}

@Module({
  name: "user",
  namespaced: true,
})
export class UserStore extends VuexModule implements UserState {
  public user: string = "";

  private authenticate: Authenticate = new Authenticate(new AuthLocalStorage());
  private logout: Logout = new Logout(new AuthLocalStorage());
  private authenticate2: Authenticate = new Authenticate(
    new AuthExampleConsole()
  );
  @Mutation
  setUser(user: string) {
    this.user = user;
  }
  clearUser() {
    this.user = "";
  }
  @Action({ rawError: true })
  async login(user: User) {
    await this.authenticate.execute(user);
    await this.authenticate2.execute(user);
    this.setUser(user.email.substring(0, user.email.indexOf("@")));
  }
  async logoutExit() {
    await this.logout.execute();
    this.clearUser();
  }
}
