<template>
  <div class="ContainerFavoriteFood">
    <h2 class="TitleListFavoriteFood">All my favorite food recipes</h2>
    <ListFood
      v-bind:labelEmptyData="'You have no favorite food recipes'"
      v-bind:ListData="foodAction.getLisAllFavoriteFood"
      v-bind:maxNumElem="20"
      v-if="foodAction.isLoadingState == false"
    />
    <SpinnerLoading v-else />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ListFood from "@/app/components/ItemFoodComponents/ListFood.vue";
import { store } from "@/app/store";
import { FoodStore } from "@/app/store/foodRecipes";
import { getModule } from "vuex-module-decorators";
import { UserStore } from "@/app/store/authUser";
import SpinnerLoading from "@/app/components/SpinnerLoading.vue";
export default defineComponent({
  components: {
    ListFood,
    SpinnerLoading,
  },
  async setup() {
    const foodAction = getModule(FoodStore, store);
    const userAction = getModule(UserStore, store);
    await foodAction.fetchAllFavoriteFoodRecipes(userAction.userMail);
    return { foodAction };
  },
});
</script>

<style lang="scss" scoped>
.ContainerFavoriteFood {
  display: flex;
  margin: 1em;
  width: auto;
  height: 96vh;
  border-radius: 10px;
  border: 10px solid var(--clr-normal-white);
  background-color: var(--clr-normal-background);
  box-shadow: 0px 0px 10px 0px rgba(black, 0.2);
  padding: 1em;
  align-items: center;
  gap: 2em;
  flex-direction: column;
  .TitleListFavoriteFood {
    font-family: "Arima Madurai";
    font-size: var(--h1-font-size);
    color: var(--clr-normal-grey);
    font-weight: bold;
  }
}
</style>