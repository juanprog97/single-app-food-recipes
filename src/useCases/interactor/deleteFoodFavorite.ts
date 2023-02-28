import IMemoryRepository from "../repository/IMemoryRepository";

export interface IDeleteFoodFavorite {
  execute(id: string, user: string): void;
}

export class DeleteFoodFavorite implements IDeleteFoodFavorite {
  private _memoryRepository: IMemoryRepository;
  constructor(memoryRepository: IMemoryRepository) {
    this._memoryRepository = memoryRepository;
  }
  execute(id: string, user: string): void {
    return this._memoryRepository.deleteFavoriteFoodRecipe(id, user);
  }
}
