export interface User {
  username?: string;
  state?: boolean;
  email: string;
  password?: string;
}

export interface Ingredient {
  name: string;
  description: string;
}

export interface FoodRecipe {
  id: string;
  image: string;
  name: string;
  nutrition: string[];
  instructions?: string[];
  ingredient: Ingredient[];
  description: string;
}
