<template>
  <div class="ContainerListFood">
    <FoodItem />
    <FoodItem />
    <FoodItem />
    <FoodItem />
    <FoodItem />
    <FoodItem />
    <FoodItem />
    <FoodItem />
    <FoodItem />
    <FoodItem />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FoodItem from "./FoodItem.vue";

export default defineComponent({
  setup() {
    return {};
  },
  components: {
    FoodItem,
  },
});
</script>

<style lang="scss" scoped>
.ContainerListFood {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1em;
  flex-direction: row;
  width: auto;
}
</style>