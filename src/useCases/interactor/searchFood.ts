import IFoodRepository from "@/useCases/repository/IFoodRepository";
import { FoodRecipe } from "../../domain/entity/index";

export interface SearchFoodI {
  execute(value: string): Promise<FoodRecipe[]>;
}

export class SearchFood implements SearchFoodI {
  private _foodRepository: IFoodRepository;
  constructor(foodRepository: IFoodRepository) {
    this._foodRepository = foodRepository;
  }
  execute(value: string): Promise<FoodRecipe[]> {
    return this._foodRepository.searchFoodRecipes(value);
  }
}
