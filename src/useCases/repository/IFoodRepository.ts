import { FoodRecipe } from "@/domain/entity";

export default interface IAuthRepository {
  getAllListFoodRecipes(): Promise<FoodRecipe[]>;
  searchFoodRecipes(name: string): Promise<FoodRecipe[]>;
  foodCompleteSuggestion(letter: string): Promise<string[]>;
}
