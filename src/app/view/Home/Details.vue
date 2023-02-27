<template>
  <div class="ContainerDetails">
    <div class="ContainerCardDetailsFood">
      <section class="Description">
        <div class="SectionDescription">
          <h1>Chicken Steak</h1>
          <p class="descriptionFood">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
          <section>
            <h2>Ingredients</h2>
            <div>erda1</div>
          </section>
          <section>
            <h2>Nutrions</h2>
            <div>erdaa</div>
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
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTNYjVUIQlQ1AbR-BcTMqDPMtnGfQG3X5gOAO-2KFYZENVYZneK4QTaE99aDXQf18Df7s&usqp=CAU"
            alt=""
          />
        </div>
      </section>
    </div>
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
  background-color: var(--clr-normal-background);
  padding: 1em;

  .ContainerCardDetailsFood {
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: auto;
    height: 96vh;
    border-radius: 10px;
    border: 10px solid var(--clr-normal-white);
    background-color: var(--clr-normal-background);
    box-shadow: 0px 0px 10px 0px rgba(black, 0.2);
    padding: 1em;
    .Description {
      display: flex;
      flex-direction: row;
      gap: 0.6em;
      height: 100%;
      .SectionDescription {
        float: left;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        gap: 0.6em;
        .descriptionFood {
          text-align: justify;
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