<template>
  <div class="ContainerFoodItem">
    <div
      class="FoodRecipesImg"
      v-bind:data-state="isLoadingImage ? 'show' : 'hide'"
    >
      <img
        v-show="isLoadImage"
        :src="dataFood.image"
        v-bind:onLoad="loadedImage"
        alt="img-food-recipe"
      />
    </div>

    <h2 class="TitleFood">{{ dataFood.name }}</h2>
    <p class="DescriptionFood">{{ dataFood.description }}</p>
    <router-link
      :to="{
        name: 'Details',
        query: {
          description: JSON.stringify(dataFood.description),
          img: JSON.stringify(dataFood.image),
          ingredient: JSON.stringify(dataFood.ingredient),
          nutrition: JSON.stringify(dataFood.nutrition),
          instructions: JSON.stringify(dataFood.instructions),
          userEmail: JSON.stringify(userEmail),
          id: JSON.stringify(dataFood.id),
        },
        params: { name: JSON.stringify(dataFood.name) },
      }"
      target="_blank"
    >
      <button class="primary ButtonFood">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 96 960 960"
          width="24"
          class="IconDetails"
        >
          <path
            d="M440 776h80V536h-80v240Zm40-320q17 0 28.5-11.5T520 416q0-17-11.5-28.5T480 376q-17 0-28.5 11.5T440 416q0 17 11.5 28.5T480 456Zm0 520q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576q0-83 31.5-156T197 293q54-54 127-85.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 83-31.5 156T763 859q-54 54-127 85.5T480 976Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
          />
        </svg>
        <p>Details</p>
      </button>
    </router-link>

    <button class="primary ButtonFood" @click="ActionFavoriteFoodRecipe()">
      <svg
        class="favoriteIconFoodYes"
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 96 960 960"
        width="24"
        v-if="isFavorite"
      >
        <path
          d="m480 936-58-52q-101-91-167-157T150 608.5Q111 556 95.5 512T80 422q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810 608.5Q771 661 705 727T538 884l-58 52Z"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 96 960 960"
        width="24"
        class="favoriteIconFoodNot"
        v-else
      >
        <path
          d="m480 936-58-52q-101-91-167-157T150 608.5Q111 556 95.5 512T80 422q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810 608.5Q771 661 705 727T538 884l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518 376h-76q-15-41-55-67.5T300 282q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480 828Zm0-273Z"
        />
      </svg>

      <p>
        {{ isFavorite ? "Favorite" : "Add Favorite" }}
      </p>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { FoodRecipe } from "@/domain/entity";
import type { PropType } from "vue";
import { getModule } from "vuex-module-decorators";
import { FoodStore } from "@/app/store/foodRecipes";
import { store } from "@/app/store";
import { UserStore } from "@/app/store/authUser";

export default defineComponent({
  setup() {
    const foodAction = getModule(FoodStore, store);
    const userAction = getModule(UserStore, store);
    const userEmail = userAction.userMail;
    return { foodAction, userAction, userEmail };
  },
  mounted() {},
  props: {
    dataFood: { type: Object as PropType<FoodRecipe>, required: true },
  },
  data() {
    return {
      isLoadImage: false,
      isLoadingImage: true,
    };
  },
  methods: {
    loadedImage() {
      this.isLoadImage = true;
      this.isLoadingImage = false;
    },
    ActionFavoriteFoodRecipe() {
      this.isFavorite
        ? this.removeFavoriteFoodRecipe()
        : this.addFavoriteFoodRecipe();
    },
    addFavoriteFoodRecipe() {
      this.foodAction.addFavoriteRecipe({
        value: this.dataFood,
        user: this.userAction.userMail,
      });
    },
    removeFavoriteFoodRecipe() {
      this.foodAction.DeleteFavoriteRecipe({
        value: this.dataFood.id,
        user: this.userAction.userMail,
      });
    },
  },
  computed: {
    isFavorite() {
      return this.foodAction.getListAllDictionary
        ? this.foodAction.getListAllDictionary.hasOwnProperty(this.dataFood.id)
        : false;
    },
  },
});
</script>

<style lang="scss" scoped>
.ContainerFoodItem {
  display: flex;
  text-align: center;
  width: 300px;
  align-items: center;
  font-family: "Arima Madurai";
  flex-direction: column;
  background-color: var(--clr-normal-background);
  border: 10px solid white;
  gap: 0.5em;
  box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 20%);
  padding: 1em;
  border-radius: 10px;
  .FoodRecipesImg {
    display: flex;
    border: 5px solid white;
    border-radius: 10px;
    min-width: 200px;
    align-items: center;
    position: relative;
    min-height: 200px;
    width: fit-content;
    height: fit-content;
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
  .TitleFood {
    font-weight: bold;
  }
  .DescriptionFood {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    width: 100%;
    max-height: 4em;
    color: var(--clr-normal-grey);
    font-weight: 500;
    margin-bottom: 1.2em;
  }

  .ButtonFood {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 0.3em;
    justify-content: center;
    svg.favoriteIconFoodNot {
      pointer-events: none;
      fill: var(--clr-normal-white);
    }
    svg.IconDetails {
      pointer-events: none;
      fill: var(--clr-normal-white);
    }
    svg.favoriteIconFoodYes {
      pointer-events: none;
      fill: var(--clr-normal-redLike);
    }
  }
}
</style>