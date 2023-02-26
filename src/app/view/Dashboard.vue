<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { FoodStore } from "../store/foodRecipes";
import { useStore } from "vuex";
import { getModule } from "vuex-module-decorators";
import { key } from "../store";
export default {
  setup() {
    const store = useStore(key);
    const foodActions = getModule(FoodStore, store);

    return { foodActions };
  },
  async created() {
    // await this.foodActions.getAllFoodRecipes();
  },
};
</script>

<style lang="scss" scoped>
</style>