import { FoodRecipe, User } from "@/domain/entity";

import {
  saveInLocalStorage,
  LocalStorageKeys,
  getObjectLocalStorage,
} from "@/app/utils/managerLocalStorage";
import IMemoryRepository from "@/useCases/repository/IMemoryRepository";
import { TypeWithKey } from "@/app/models/TypeWithKey";

export default class MemoryLocalStorage implements IMemoryRepository {
  addFavoriteFoodRecipe(foodRecipe: FoodRecipe, user: string): void {
    try {
      const dataFavorite: TypeWithKey<any> = JSON.parse(
        getObjectLocalStorage(LocalStorageKeys.FAVORITE_FOODS)
      );

      let key: string = foodRecipe.id;
      let newItem: TypeWithKey<any> = {};
      newItem[key] = foodRecipe;

      const newAddItem = { ...dataFavorite[user], ...newItem };
      const newDataFavorite = { ...dataFavorite, [user]: newAddItem };
      saveInLocalStorage(
        LocalStorageKeys.FAVORITE_FOODS,
        JSON.stringify(newDataFavorite)
      );
    } catch (error: any) {
      console.log(error);
    }
  }
  deleteFavoriteFoodRecipe(id: string, user: string): void {
    try {
      const dataFavorite: TypeWithKey<any> = JSON.parse(
        getObjectLocalStorage(LocalStorageKeys.FAVORITE_FOODS)
      );
      const dataUserExactly = dataFavorite[user];
      const { [id]: value, ...newDataDeleteFavorite } = dataUserExactly;
      const newDataList = {
        ...dataUserExactly,
        [user]: newDataDeleteFavorite,
      };
      saveInLocalStorage(
        LocalStorageKeys.FAVORITE_FOODS,
        JSON.stringify(newDataList)
      );
    } catch (error: any) {
      console.log(error);
    }
  }
  fetchAllFavoriteRecipe(user: string): TypeWithKey<any> {
    const AllListUserFavorite: TypeWithKey<any> = JSON.parse(
      getObjectLocalStorage(LocalStorageKeys.FAVORITE_FOODS)
    );

    return AllListUserFavorite[user];
  }
}
