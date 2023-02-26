import { FoodRecipe } from "@/domain/entity";
import axios from "axios";
import IFoodRepository from "@/useCases/repository/IFoodRepository";
import { loadAbort } from "@/app/utils/loadAbortAxios";
import { AxiosCall } from "@/app/models/AxiosCallModel";
import { searchFoodRecipesAdapter } from "@/useCases/adapters/searchFoodRecipesAdapter";

export default class FoodRepository implements IFoodRepository {
  async searchFoodRecipes(value: string): Promise<FoodRecipe[]> {
    const options = {
      method: "GET",
      url: "https://yummly2.p.rapidapi.com/feeds/search",
      params: {
        start: "0",
        limit: "60",
        maxTotalTimeInSeconds: "7200",
        q: value,
      },
    };

    const response = await axios.request(options);
    return searchFoodRecipesAdapter(response.data);
  }
  foodCompleteSuggestion(value: string): AxiosCall<any> {
    const controller = loadAbort();

    const options = {
      method: "GET",
      url: "https://yummly2.p.rapidapi.com/feeds/auto-complete",
      params: {
        q: value,
      },
      signal: controller.signal,
    };

    //Adapter
    return {
      call: axios.request(options),
      controller,
    };
  }
}
