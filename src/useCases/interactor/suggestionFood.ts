import IFoodRepository from "@/useCases/repository/IFoodRepository";
import { AxiosCall } from "../../app/models/AxiosCallModel";

export interface SuggestionFoodI {
  execute(value: string): AxiosCall<any>;
}

export class SuggestionFood implements SuggestionFoodI {
  private _foodRepository: IFoodRepository;
  constructor(foodRepository: IFoodRepository) {
    this._foodRepository = foodRepository;
  }
  execute(value: string): AxiosCall<any> {
    return this._foodRepository.foodCompleteSuggestion(value);
  }
}
