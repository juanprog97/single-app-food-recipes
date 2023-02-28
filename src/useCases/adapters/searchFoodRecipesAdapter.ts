import { FoodRecipe, Ingredient } from "@/domain/entity";

export const searchFoodRecipesAdapter = (data: any): FoodRecipe[] => {
  const listResultFood: FoodRecipe[] = data.feed.map((food: any) => {
    const itemFood: FoodRecipe = {
      id: food["tracking-id"],
      image:
        food.display.images.length > 0
          ? food.display.images[0]
          : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTNYjVUIQlQ1AbR-BcTMqDPMtnGfQG3X5gOAO-2KFYZENVYZneK4QTaE99aDXQf18Df7s&usqp=CAU",
      name: food.display.displayName,
      nutrition: food.content.tags.nutrition
        ? food.content.tags.nutrition.map((item: any) => {
            return item["display-name"];
          })
        : [],
      ingredient: food.content.ingredientLines
        ? food.content.ingredientLines.map((item: any) => {
            const itemIngredient: Ingredient = {
              name: item.ingredient,
              description: item.wholeLine,
            };
            return itemIngredient;
          })
        : [],
      instructions: food.content.preparationSteps,
      description: food.seo.web["meta-tags"].description,
    };
    return itemFood;
  });
  return listResultFood;
};
