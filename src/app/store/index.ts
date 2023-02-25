import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";
import { getModule, VuexModule } from "vuex-module-decorators";
import { UserStore, UserState } from "./authUser";

export interface RootState {
  user: UserState;
}

export const key: InjectionKey<Store<RootState>> = Symbol();

export const store = createStore<RootState>({
  modules: {
    user: UserStore,
  },
});

function useStore() {
  return baseUseStore(key);
}
declare type ConstructorOf<C> = {
  new (...args: any[]): C;
};

export function useModule<M extends VuexModule>(
  moduleClass: ConstructorOf<M>
): M {
  const store = useStore();
  const moduleStore: M = getModule(moduleClass, store);
  return moduleStore;
}
