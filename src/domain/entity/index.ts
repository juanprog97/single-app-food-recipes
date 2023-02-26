export interface User {
  username?: string;
  state?: boolean;
  email?: string;
  password?: string;
}

interface Ingredient {
  name: string;
  quantity: number;
}

export interface FoodRecipe {
  id: string;
  image: string;
  name: string;
  phrase: string;
  instructions: string[];
  ingredient: Ingredient[];
  description: string;
}
