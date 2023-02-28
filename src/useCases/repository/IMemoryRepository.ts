import { TypeWithKey } from "@/app/models/TypeWithKey";
import { FoodRecipe } from "@/domain/entity";

export default interface IMemoryRepository {
  addFavoriteFoodRecipe(foodRecipe: FoodRecipe, user: string): void;
  deleteFavoriteFoodRecipe(id: string, user: string): void;
  fetchAllFavoriteRecipe(user: string): TypeWithKey<any>;
}
