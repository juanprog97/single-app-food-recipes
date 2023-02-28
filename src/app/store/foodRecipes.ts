import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";
import { SearchFood } from "@/usecases/interactor/searchFood";

import { FoodRecipe } from "../../domain/entity/index";
import { TypeWithKey } from "../models/TypeWithKey";
import { FetchAllFavoriteFood } from "@/useCases/interactor/fetchAllFavoriteFood";
import FoodRepository from "@/data/FoodRepository/foodRepository";
import MemoryLocalStorage from "@/data/MemoryRepository/memoryLocalStorage";
import { DeleteFoodFavorite } from "@/useCases/interactor/deleteFoodFavorite";
import { AddFoodFavorite } from "@/useCases/interactor/addFoodFavorite";

export interface FoodState {
  searchResultFood: FoodRecipe[];
  listFavoriteFood: TypeWithKey<FoodRecipe>;
  isLoading: Boolean;
}

@Module({
  name: "food",
  namespaced: true,
})
export class FoodStore extends VuexModule implements FoodState {
  searchResultFood: FoodRecipe[] = [];
  isLoading: boolean = false;

  private foodRepositoryInstance: FoodRepository = new FoodRepository();

  private memoryRepositoryInstance: MemoryLocalStorage =
    new MemoryLocalStorage();

  private searchFoodRecipe: SearchFood = new SearchFood(
    this.foodRepositoryInstance
  );

  private deleteFoodFavorite: DeleteFoodFavorite = new DeleteFoodFavorite(
    this.memoryRepositoryInstance
  );
  private addFoodFavorite: AddFoodFavorite = new AddFoodFavorite(
    this.memoryRepositoryInstance
  );

  private fetchAllFavoriteFoodRecipe: FetchAllFavoriteFood =
    new FetchAllFavoriteFood(this.memoryRepositoryInstance);

  listFavoriteFood: TypeWithKey<FoodRecipe> = {};

  get getListSearchFood() {
    return this.searchResultFood;
  }
  get getLisAllFavoriteFood() {
    return Object.keys(this.listFavoriteFood).map((id: string) => {
      return this.listFavoriteFood[id];
    });
  }
  get getListAllDictionary() {
    return this.listFavoriteFood;
  }

  get isLoadingState() {
    return this.isLoading;
  }

  @Mutation
  DeleteFavoriteStore(id: string) {
    //Delete Favorite Food
    const { [id]: value, ...newData } = this.listFavoriteFood;
    this.listFavoriteFood = newData;
  }

  @Mutation
  IsLoading() {
    this.isLoading = true;
  }
  @Mutation
  NotLoading() {
    this.isLoading = false;
  }

  @Mutation
  AddFavoriteStore(data: FoodRecipe) {
    //Add Favorite Food
    const keya = data.id;
    const newData = { ...this.listFavoriteFood, [keya]: data };
    this.listFavoriteFood = newData;
  }
  @Mutation
  setListFavoriteFoodRecipes(data: TypeWithKey<FoodRecipe>) {
    this.listFavoriteFood = data;
  }

  @Mutation
  SetListSearchFoodRecipes(data: FoodRecipe[]) {
    this.searchResultFood = data;
  }

  @Action({ rawError: true })
  async fetchAllFavoriteFoodRecipes(user: string) {
    this.IsLoading();
    const resultsFavoriteFoodRecipe =
      await this.fetchAllFavoriteFoodRecipe.execute(user);
    this.setListFavoriteFoodRecipes(resultsFavoriteFoodRecipe);
    this.NotLoading();
  }

  @Action({ rawError: true })
  async searchFoodRecipes(value: string) {
    this.IsLoading();
    const resultsSearchFoodRecipe = await this.searchFoodRecipe.execute(value);
    this.SetListSearchFoodRecipes(resultsSearchFoodRecipe);
    this.NotLoading();
  }

  @Action({ rawError: true })
  async addFavoriteRecipe(foodRecipe: any) {
    await this.addFoodFavorite.execute(foodRecipe.value, foodRecipe.user);
    this.AddFavoriteStore(foodRecipe.value);
  }
  @Action({ rawError: true })
  async DeleteFavoriteRecipe(foodRecipe: any) {
    await this.deleteFoodFavorite.execute(foodRecipe.value, foodRecipe.user);
    this.DeleteFavoriteStore(foodRecipe.value);
  }
}
