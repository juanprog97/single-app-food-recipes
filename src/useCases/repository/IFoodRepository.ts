import { AxiosCall } from "@/app/models/AxiosCallModel";
import { FoodRecipe } from "@/domain/entity";

export default interface IFoodRepository {
  searchFoodRecipes(name: string): Promise<FoodRecipe[]>;
  foodCompleteSuggestion(value: string): AxiosCall<any>;
}
