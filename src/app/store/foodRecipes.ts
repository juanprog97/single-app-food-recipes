import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";
import { GetListAllFood } from "@/usecases/interactor/getListAllFood";

import { FoodRecipe } from "../../domain/entity/index";
import foodRepository from "@/data/FoodRepository/foodRepository";

export interface FoodState {
  listAllFood: FoodRecipe[];
  searchResultFood: FoodRecipe[];
  listFavoriteFood: FoodRecipe[];
}

@Module({
  name: "food",
  namespaced: true,
})
export class FoodStore extends VuexModule implements FoodState {
  listAllFood: FoodRecipe[] = [];
  searchResultFood: FoodRecipe[] = [];
  listFavoriteFood: FoodRecipe[] = [];
  private getListAllFood: GetListAllFood = new GetListAllFood(
    new foodRepository()
  );

  @Mutation
  clearSearch() {
    this.listFavoriteFood = [];
  }

  @Action({ rawError: true })
  async getAllFoodRecipes() {
    const listAllFood = await this.getListAllFood.execute();
  }
}
