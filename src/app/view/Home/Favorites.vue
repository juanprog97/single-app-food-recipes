<template>
  <div class="ContainerFavoriteFood">
    <h2 class="TitleListFavoriteFood">All my favorite food recipes</h2>
    <ListFood
      v-bind:ListData="[
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
      ]"
      v-bind:maxNumElem="20"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ListFood from "@/app/components/ItemFoodComponents/ListFood.vue";
export default defineComponent({
  components: {
    ListFood,
  },
  setup() {
    return {};
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