<template>
  <div class="Container">
    <div class="Container_Logo_Side">
      <div class="Container_Img_logo">
        <img id="LogoPage" src="logo.png" />
        <h1 class="no-select-text">Food world</h1>
      </div>
      <p class="Description_Logo no-select-text">
        The best food recipe site, where you can find the recipes and keep the
        ones you like the most.
      </p>
    </div>
    <div class="Container_Login">
      <h2 class="LabelForm no-select-text">Log in</h2>
      <div class="Form_Container">
        <div class="Field_input">
          <label class="Label_input" for="emailInput">Email</label>
          <input class="input-style" id="emailInput" type="text" />
          <!-- <p class="Error_input">Error</p> -->
        </div>
        <div class="Field_input">
          <label class="Label_input" for="passwordInput">Password</label>
          <input
            id="passwordInput"
            class="input-style"
            type="password"
            placeholder="2sadas"
          />
          <!-- <p class="Error_input">Error</p> -->
        </div>
      </div>
      <a id="Label_ForgetPassword">Forget password?</a>
      <button class="primary">Login</button>
    </div>
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
.Container {
  display: grid;
  width: 100%;
  height: 100vh;
  font-family: Roboto;
  grid-template-columns: 600px auto;

  .Container_Logo_Side {
    grid-column: 1/2;
    display: flex;
    flex-direction: column;
    gap: 3em;
    justify-content: center;
    background-color: var(--clr-normal-primary);

    .Container_Img_logo {
      display: flex;
      flex-direction: column;
      #LogoPage {
        margin-left: auto;
        margin-right: auto;
        width: fit-content;
        height: fit-content;
        transform: scale(0.8);
      }
      h1 {
        text-align: center;
      }
    }
    .Description_Logo {
      font-size: var(--h3-font-size);
      font-weight: 500;
      line-height: 1.2em;

      margin: 0em 2em;
    }
  }
  .Container_Login {
    padding: 0em 2em;
    display: flex;
    flex-direction: column;
    grid-column: 2/2;
    justify-self: center;
    justify-content: center;
    gap: 1em;
    .LabelForm {
      text-align: center;
    }
    .Form_Container {
      width: 20em;
      display: flex;
      flex-direction: column;
      gap: 1em;
      .Field_input {
        display: flex;
        gap: 0.3em;
        flex-direction: column;
        .Label_input {
          font-weight: 500;
          margin-bottom: 0.2em;
        }
        .Error_input {
          font-size: var(--small-font-size);
          color: var(--clr-normal-red);
        }
      }
    }
    #Label_ForgetPassword {
      font-weight: 500;
      font-size: var(--small-font-size);
      align-self: flex-end;
    }
  }
}
</style>