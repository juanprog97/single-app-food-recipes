import { FoodRecipe } from "@/domain/entity";

import IFoodRepository from "@/useCases/repository/IFoodRepository";

export interface GetListAllFoodI {
  execute(): Promise<FoodRecipe[]>;
}

export class GetListAllFood implements GetListAllFoodI {
  private _foodRepository: IFoodRepository;
  constructor(foodRepository: IFoodRepository) {
    this._foodRepository = foodRepository;
  }
  execute(): Promise<FoodRecipe[]> {
    return this._foodRepository.getAllListFoodRecipes();
  }
}
