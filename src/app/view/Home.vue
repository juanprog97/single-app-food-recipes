<template>
  <div class="Container_Home">
    <div class="Container_SideBar">
      <div class="User_Details">
        <div
          class="Container_img_profile"
          v-bind:data-state="isLoadingImage ? 'show' : 'hide'"
        >
          <img
            v-show="isloadImage"
            v-bind:src="imgAvatarSrc"
            v-bind:onLoad="loadedImage"
          />
        </div>

        <p class="details_user">User Account</p>
        <p class="username_logged no-select-text">
          {{ userLoginAction.user.username }}
        </p>
      </div>
      <div class="Container_Routes">
        <router-link
          class="Option_Link"
          v-bind:data-activeItem="$route.name === 'Catalog' ? 'true' : null"
          :to="{ name: 'Catalog' }"
          >Food Catalog</router-link
        >
        <router-link
          class="Option_Link"
          v-bind:data-activeItem="$route.name === 'Favorites' ? 'true' : null"
          :to="{ name: 'Favorites' }"
          >Food Favorite</router-link
        >
      </div>

      <button id="Logout_Button" class="secondary" v-bind:onClick="logout">
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
import { useStore } from "vuex";
import { getModule } from "vuex-module-decorators";
import { key } from "../store";
import { UserStore } from "../store/authUser";
import imgUrl from "../assets/images/avatarDefault.webp";

export default defineComponent({
  setup() {
    const store = useStore(key);
    const userLoginAction = getModule(UserStore, store);

    return { userLoginAction };
  },
  mounted() {
    if (this.imgAvatarSrc == "") {
      this.isloadImage = false;
      this.isLoadingImage = true;
      this.imgAvatarSrc = imgUrl;
    }
  },
  methods: {
    async logout() {
      await this.userLoginAction.logoutExit();
      this.$router.push({ name: "Login" });
    },
    loadedImage() {
      this.isloadImage = true;
      this.isLoadingImage = false;
    },
  },
  data() {
    return {
      imgAvatarSrc: "",
      isloadImage: false,
      isLoadingImage: false,
    };
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
    .User_Details {
      display: flex;
      flex-direction: column;
      gap: 0.4em;
      text-align: center;
      margin-bottom: 1.02em;
      .Container_img_profile {
        display: block;
        min-width: 100px;
        min-height: 100px;
        width: fit-content;
        height: fit-content;
        position: relative;
        overflow: hidden;
        border-radius: 20px;
        box-shadow: 0px 0px 0px 7px var(--clr-normal-white);
        &[data-state="show"] {
          &::after {
            display: block;
            content: "";
            position: absolute;
            inset: 50%;
            transform: translate(-50%, -50%);

            width: 70px;
            height: 70px;
            border-radius: 100%;
            border-right: 10px solid var(--clr-normal-white);
            border-left: 10px solid var(--clr-normal-white);
            border-top: 10px solid transparent;
            border-bottom: 10px solid var(--clr-normal-white);
            animation: moveWheel 0.8s infinite linear;
          }
          @keyframes moveWheel {
            0% {
              transform: translate(-50%, -50%) rotate(0deg);
            }
            100% {
              transform: translate(-50%, -50%) rotate(360deg);
            }
          }
        }
        &[data-state="hide"] {
          &::after {
            display: none;
          }
        }
      }
      .details_user {
        font-weight: 400;
        color: var(--clr-normal-greyLow);
      }
      .username_logged {
        color: var(--clr-normal-grey);
        font-weight: 700;
        font-size: 1.3em;
      }
    }
    .Container_Routes {
      align-self: flex-start;
      display: flex;
      flex-direction: column;
      flex: auto;
      gap: 1em;
      .Option_Link {
        position: relative;
        font-weight: 500;
        font-size: 1.1em;
        color: var(--clr-normal-greyLow);
        transition: font-weight 0.2s ease-out;
        &[data-activeItem="true"] {
          transition: all 0.2s ease-in;
          font-weight: bold;
          color: var(--clr-normal-black);
          &::after {
            display: block;
            position: absolute;
            content: "";
            left: 110%;
            top: 25%;
            border-radius: 100%;
            width: 17px;
            height: 17px;
            background-color: var(--clr-normal-primary);
          }
        }
      }
    }
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