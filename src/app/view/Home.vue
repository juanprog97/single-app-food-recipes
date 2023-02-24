<template>
  <div class="Container_Home">
    <div class="Container_SideBar">
      <div class="Container_Routes">
        <router-link to="/">Food Catalog</router-link>
        <router-link to="/">Food Favorite</router-link>
      </div>
      <div>Mini app Draw</div>
      <div>User Content</div>
    </div>
    <div class="Container_Content">Content</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.Container_Home {
  display: grid;
  grid-template-columns: 200px auto;
  background: var(--clr-normal-background);
  width: 100%;
  height: 100vh;
  .Container_SideBar {
    display: flex;
    flex-direction: column;
    align-content: center;
    padding: 1em;
    align-items: center;
    grid-column: 1/2;
    border-radius: 10px;
    background-color: var(--clr-normal-background);
    border: 10px solid var(--clr-normal-white);
    box-shadow: 0px 0px 10px 0px rgba(black, 0.2);
  }
  .Container_Content {
    grid-column: 2/2;
  }
}
</style>