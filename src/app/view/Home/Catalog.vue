<template>
  <div class="ContainerListMeals">
    <h2 class="TitleListMeal">Food Recipe List</h2>
    <InputTypeahead id="Input_Search_Food" @confirmSearch="searchFood" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InputTypeahead from "../../components/InputSearchTypeahead/InputTypeahead.vue";
export default defineComponent({
  components: {
    InputTypeahead,
  },
  methods: {
    searchFood(value: string) {
      console.log(value);
    },
  },
  setup() {
    return {};
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