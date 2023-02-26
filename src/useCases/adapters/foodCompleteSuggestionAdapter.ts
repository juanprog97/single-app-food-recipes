import { FoodRecipe } from "@/domain/entity";

export const foodCompleteSuggestionAdapter = (data: any): string[] => {
  return data.searches;
};
