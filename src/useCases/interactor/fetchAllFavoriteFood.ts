import { TypeWithKey } from "@/app/models/TypeWithKey";
import IMemoryRepository from "../repository/IMemoryRepository";

export interface IFetchAllFavoriteFood {
  execute(user: string): TypeWithKey<any>;
}

export class FetchAllFavoriteFood implements IFetchAllFavoriteFood {
  private _memoryRepository: IMemoryRepository;
  constructor(memoryRepository: IMemoryRepository) {
    this._memoryRepository = memoryRepository;
  }
  execute(user: string): TypeWithKey<any> {
    return this._memoryRepository.fetchAllFavoriteRecipe(user);
  }
}
