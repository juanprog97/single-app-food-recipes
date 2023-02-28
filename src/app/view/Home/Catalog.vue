<template>
  <div class="ContainerListMeals">
    <h2 class="TitleListMeal">Food Recipe List</h2>
    <InputTypeahead id="Input_Search_Food" @confirmSearch="searchFood" />
    <ListFood
      v-bind:labelEmptyData="'No results found'"
      v-bind:ListData="foodAction.getListSearchFood"
      v-bind:maxNumElem="5"
      v-if="foodAction.isLoadingState == false && foodAction.getListSearchFood"
    />
    <SpinnerLoading v-else />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InputTypeahead from "../../components/InputSearchTypeahead/InputTypeahead.vue";
import ListFood from "@/app/components/ItemFoodComponents/ListFood.vue";
import { getModule } from "vuex-module-decorators";
import { FoodStore } from "@/app/store/foodRecipes";
import { store } from "@/app/store";
import SpinnerLoading from "@/app/components/SpinnerLoading.vue";

export default defineComponent({
  async setup() {
    const foodAction = getModule(FoodStore, store);

    return { foodAction };
  },
  async mounted() {
    //await this.foodAction.searchFoodRecipes("");
  },
  components: {
    InputTypeahead,
    ListFood,
    SpinnerLoading,
  },
  methods: {
    async searchFood(value: string) {
      await this.foodAction.searchFoodRecipes(value);
    },
  },
});
</script>

<style lang="scss" scoped>
.ContainerListMeals {
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
  .TitleListMeal {
    font-family: "Arima Madurai";
    font-size: var(--h1-font-size);
    color: var(--clr-normal-grey);
    font-weight: bold;
  }
  #Input_Search_Food {
    justify-self: center;
  }
}
</style>