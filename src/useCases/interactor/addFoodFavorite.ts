import { FoodRecipe } from "@/domain/entity";
import IMemoryRepository from "../repository/IMemoryRepository";

export interface IAddFoodFavorite {
  execute(foodRecipe: FoodRecipe, user: string): void;
}

export class AddFoodFavorite implements IAddFoodFavorite {
  private _memoryRepository: IMemoryRepository;
  constructor(memoryRepository: IMemoryRepository) {
    this._memoryRepository = memoryRepository;
  }
  execute(foodRecipe: FoodRecipe, user: string): void {
    return this._memoryRepository.addFavoriteFoodRecipe(foodRecipe, user);
  }
}
