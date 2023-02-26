<template>
  <div class="ContainerListMeals">
    <h2 class="TitleListMeal">Food Recipe List</h2>
    <input
      id="Input_Search_Food"
      class="input-style"
      type="text"
      placeholder="Search your recipe"
    />
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
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
    width: 22em;
    justify-self: center;
  }
}
</style>