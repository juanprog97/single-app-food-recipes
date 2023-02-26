import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";
import { getModule, VuexModule } from "vuex-module-decorators";
import { UserStore, UserState } from "./authUser";
import { FoodState, FoodStore } from "./foodRecipes";

export interface RootState {
  user: UserState;
  food: FoodState;
}

export const key: InjectionKey<Store<RootState>> = Symbol();

export const store = createStore<RootState>({
  modules: {
    user: UserStore,
    food: FoodStore,
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
