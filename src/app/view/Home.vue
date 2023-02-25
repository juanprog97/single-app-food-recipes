<template>
  <div class="Container_Home">
    <div class="Container_SideBar">
      <div>
        <p>User account</p>
        <p>Example123</p>
      </div>
      <div class="Container_Routes">
        <router-link to="/">Food Catalog</router-link>
        <router-link to="/">Food Favorite</router-link>
      </div>

      <button id="Logout_Button" class="secondary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 96 960 960"
          width="24"
        >
          <path
            d="M200 936q-33 0-56.5-23.5T120 856V296q0-33 23.5-56.5T200 216h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585 434l55-58 200 200-200 200Z"
          />
        </svg>
        <p>Logout</p>
      </button>
    </div>
    <div class="Container_Content"><router-view></router-view></div>
    <button id="AppDraw_button" class="primary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 96 960 960"
        width="24"
        fill="white"
      >
        <path
          d="M200 856h56l345-345-56-56-345 345v56Zm572-403L602 285l56-56q23-23 56.5-23t56.5 23l56 56q23 23 24 55.5T829 396l-57 57Zm-58 59L290 936H120V766l424-424 170 170Zm-141-29-28-28 56 56-28-28Z"
        />
      </svg>
      <p id="textShape">Create Shape</p>
    </button>
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
    justify-content: space-between;
    grid-column: 1/2;
    border-radius: 10px;
    background-color: var(--clr-normal-background);
    border: 10px solid var(--clr-normal-white);
    box-shadow: 0px 0px 10px 0px rgba(black, 0.2);

    #Logout_Button {
      display: flex;
      align-items: center;
      svg {
        fill: var(--clr-normal-primary);
        transition: 0.2s fill ease-out;
      }
      &:hover {
        svg {
          fill: var(--clr-normal-white);
          transition: 0.2s fill ease-in;
        }
      }
    }
  }
  .Container_Content {
    grid-column: 2/2;
  }
}
#AppDraw_button {
  position: fixed;
  top: 92%;
  right: calc(5% - 4vw);
  width: 7em;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.7em;
  p#textShape {
    white-space: nowrap;
    width: fit-content;
  }
}
</style>