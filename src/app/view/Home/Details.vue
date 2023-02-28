

<template>
  <div class="ContainerDetails">
    <div class="ContainerCardDetailsFood">
      <section class="Description">
        <div class="SectionDescription">
          <h1>{{ nameFood }}</h1>
          <p class="descriptionFood">
            {{ description }}
          </p>
          <section class="SectionIngredientPreparation">
            <div class="InstIngredient">
              <h2>Ingredients</h2>
              <div class="ListIngredient">
                <ul>
                  <li
                    v-for="(ingredient, index) in Ingredient"
                    v-bind:key="index"
                  >
                    <div class="ItemIngredient">
                      <p class="nameIngredient">{{ ingredient.name }}</p>
                      <p class="descriptionIngredient">
                        {{ ingredient.description }}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="InstPreparation">
              <h2>Preparation steps</h2>
              <ol v-if="instructions">
                <li v-for="(instru, index) in instructions" v-bind:key="index">
                  {{ instru }}
                </li>
              </ol>
              <p v-else>Coming Soon!!</p>
            </div>
          </section>
          <section class="SectionNutrition">
            <h2>Nutrition</h2>
            <div class="ListNutrition" v-if="nutrition">
              <p v-for="(nutEl, index) in nutrition" v-bind:key="index">
                {{ nutEl }}
              </p>
            </div>
            <p v-else>Coming Soon!!</p>
          </section>
        </div>
        <div class="containerImage">
          <img :src="imgUrl" alt="" />
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { store } from "@/app/store";

import { defineComponent } from "vue";
import { getModule } from "vuex-module-decorators";
import { Ingredient } from "../../../domain/entity/index";
export default defineComponent({
  setup() {
    let Ingredient: Ingredient[] = [];
    return { Ingredient };
  },
  data() {
    return {
      nameFood: "",
      description: "",
      nutrition: [],
      imgUrl: "",
      instructions: [],

      id: "",
    };
  },
  created() {
    //@ts-ignore
    this.id = JSON.parse(this.$route.query.id);
    //@ts-ignore
    this.nameFood = JSON.parse(this.$route.params.name);
    //@ts-ignore
    this.description = JSON.parse(this.$route.query.description);
    //@ts-ignore
    this.nutrition = JSON.parse(this.$route.query.nutrition);
    //@ts-ignore
    this.Ingredient = JSON.parse(this.$route.query.ingredient);
    //@ts-ignore
    this.imgUrl = JSON.parse(this.$route.query.img);
    //@ts-ignore
    this.instructions = JSON.parse(this.$route.query.instructions);
  },
});
</script>

<style lang="scss" scoped>
h1,
h2 {
  font-family: "Arima Madurai";
}
h1 {
  color: var(--clr-normal-grey);
  font-weight: bold;
  font-size: 2.5em;
  text-align: center;
}
h2 {
  color: var(--clr-normal-greyLow);
  font-weight: bold;
}
.ContainerDetails {
  font-family: "Arima Madurai";
  background-color: var(--clr-normal-background);
  padding: 1em;

  .ContainerCardDetailsFood {
    display: flex;
    flex-direction: column;
    gap: 1em;

    width: auto;
    height: 95vh;
    border-radius: 10px;
    border: 10px solid var(--clr-normal-white);
    background-color: var(--clr-normal-background);
    box-shadow: 0px 0px 10px 0px rgba(black, 0.2);
    padding: 1em;
    .Description {
      display: grid;

      gap: 1em;
      grid-template-columns: 1fr 40em;
      height: 100%;
      width: 100%;
      .SectionDescription {
        float: left;
        display: flex;
        padding: 2em;
        overflow-y: auto;
        max-height: 90%;
        flex-direction: column;

        gap: 0.6em;
        .descriptionFood {
          text-align: justify;
        }
        .SectionIngredientPreparation {
          display: grid;
          grid-template-columns: 0.5fr 1fr;
          gap: 1em;
          .InstIngredient {
            .ListIngredient {
              margin-left: 2em;
              ul {
                list-style-type: circle !important;

                li {
                  list-style: circle !important;
                  .ItemIngredient {
                    .nameIngredient {
                      font-size: 1.2em;
                      font-weight: bold;
                    }
                  }
                }
              }
            }
          }
          .InstPreparation {
            text-align: center;
            ol {
              li {
                list-style: auto;
                font-size: 1.2em;
                text-align: initial;
              }
            }
          }
        }
        .addFavoriteButton {
          display: flex;
          flex-direction: row;
          gap: 0.4em;
          align-content: center;
          width: fit-content;
          align-self: center;
          svg.favoriteIconFoodNot {
            pointer-events: none;
            fill: var(--clr-normal-white);
          }
          svg.favoriteIconFoodYes {
            pointer-events: none;
            fill: var(--clr-normal-redLike);
          }
        }
      }
      .SectionNutrition {
        .ListNutrition {
          display: flex;
          flex-direction: row;
          gap: 1em;
          flex-wrap: wrap;
          font-size: 1.6em;
          justify-content: space-between;
        }
      }
      .containerImage {
        width: 100%;
        height: fit-content;
        align-self: center;
        border: 10px solid var(--clr-normal-white);
        border-radius: 10px;
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>