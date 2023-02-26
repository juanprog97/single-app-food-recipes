import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";
import { SearchFood } from "@/usecases/interactor/searchFood";

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
  private searchFoodRecipe: SearchFood = new SearchFood(new foodRepository());

  @Mutation
  clearSearch() {
    this.listFavoriteFood = [];
  }

  @Action({ rawError: true })
  async searchFoodRecipes(value: string) {
    // const resultsSearchFoodRecipe = await this.searchFoodRecipe.execute(value);
  }
}
