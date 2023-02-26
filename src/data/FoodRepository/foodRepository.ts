import { FoodRecipe } from "@/domain/entity";
import axios from "axios";
import IFoodRepository from "@/useCases/repository/IFoodRepository";

export default class FoodRepository implements IFoodRepository {
  async getAllListFoodRecipes(): Promise<FoodRecipe[]> {
    const options = {
      method: "GET",
      url: "https://yummly2.p.rapidapi.com/feeds/list",
      params: {
        start: "0",
        limit: "60",
      },
    };

    const response = await axios.request(options);

    console.log(await response.data);
    return [] as Array<FoodRecipe>;
  }
  searchFoodRecipes(name: string): Promise<FoodRecipe[]> {
    throw new Error("Method not implemented.");
  }
  foodCompleteSuggestion(letter: string): Promise<string[]> {
    throw new Error("Method not implemented.");
  }
}
