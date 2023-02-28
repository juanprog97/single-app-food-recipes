import { Ingredient } from '../../../domain/entity/index';
<template>
  <div class="ContainerDetails">
    <div class="ContainerCardDetailsFood">
      <section class="Description">
        <div class="SectionDescription">
          <h1>{{ name }}</h1>
          <p class="descriptionFood">
            {{ description }}
          </p>
          <section class="SectionIngredientPreparation">
            <div class="InstIngredient">
              <h2>Ingredients</h2>
              <div class="ListIngredient">
                <ul>
                  <li
                    v-for="(ingredient, index) in ingredients"
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
              <ol v-if="instructions.length > 0">
                <li v-for="(instru, index) in instructions" v-bind:key="index">
                  {{ instru }}
                </li>
              </ol>
              <p v-else>Coming Soon!!</p>
            </div>
          </section>
          <section class="NutritionSection">
            <h2>Nutrition</h2>
            <div class="ListNutrition" v-if="nutrition.length > 0">
              <p v-for="(nutEl, index) in nutrition" v-bind:key="index">
                {{ nutEl }}
              </p>
            </div>
            <p v-else>Coming Soon!!</p>
          </section>
          <button class="primary addFavoriteButton">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 96 960 960"
              width="24"
              class="favoriteIconFoodNot"
            >
              <path
                d="m480 936-58-52q-101-91-167-157T150 608.5Q111 556 95.5 512T80 422q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810 608.5Q771 661 705 727T538 884l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518 376h-76q-15-41-55-67.5T300 282q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480 828Zm0-273Z"
              />
            </svg>
            <svg
              class="favoriteIconFoodYes"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 96 960 960"
              width="24"
            >
              <path
                d="m480 936-58-52q-101-91-167-157T150 608.5Q111 556 95.5 512T80 422q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810 608.5Q771 661 705 727T538 884l-58 52Z"
              />
            </svg>

            <p>Add Favorite</p>
          </button>
        </div>

        <div class="containerImage">
          <img :src="imgUrl" alt="" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      description: "",
      nutrition: [],
      ingredients: [],
      imgUrl: "",
      instructions: [],
    };
  },
  mounted() {
    this.name = this.$route.params.name;
    this.description = JSON.parse(this.$route.query.description);
    this.nutrition = JSON.parse(this.$route.query.nutrition);
    this.ingredients = JSON.parse(this.$route.query.ingredient);
    this.imgUrl = JSON.parse(this.$route.query.img);
    this.instructions = JSON.parse(this.$route.query.instructions);
  },
};
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