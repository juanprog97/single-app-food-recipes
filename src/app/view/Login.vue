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
      <Form
        class="Form_Container"
        :validation-schema="schema"
        @submit="handleSubmit"
        data-testid="t_form_login"
      >
        <div class="Field_input">
          <label class="Label_input" for="emailInput">Email</label>
          <Field
            name="email"
            v-model="emailInput"
            class="input-style"
            id="emailInput"
            placeholder="example@organization.com"
            type="text"
          />
          <ErrorMessage
            class="Error_Message_Field"
            id="Error_Message_Field_Email"
            name="email"
          />
        </div>

        <div class="Field_input">
          <label class="Label_input" for="passwordInput">Password</label>
          <Field
            name="password"
            v-model="passwordInput"
            id="passwordInput"
            class="input-style"
            type="password"
          />
          <ErrorMessage
            class="Error_Message_Field"
            id="Error_Message_Field_Password"
            name="password"
          />
        </div>

        <a id="Label_ForgetPassword">Forget password?</a>

        <button type="submit" class="primary">Login</button>
      </Form>
      <p v-if="!!errorInfo" id="Error_Message_Field">{{ errorInfo }}</p>
    </div>
  </div>
</template>

<script  lang="ts">
import { defineComponent } from "vue";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { useStore } from "vuex";
import { key } from "../store";
import { getModule } from "vuex-module-decorators";
import { UserStore } from "@/app/store/authUser";

export default defineComponent({
  setup() {
    const store = useStore(key);
    const userLoginAction = getModule(UserStore, store);
    return { userLoginAction };
  },

  mounted() {
    this.schema = yup.object({
      email: yup.string().required().email(),
      password: yup.string().required().min(8),
    });
  },
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      schema: {},
      emailInput: "",
      passwordInput: "",
      errorInfo: "",
    };
  },
  methods: {
    async handleSubmit() {
      this.errorInfo = "";
      try {
        await this.userLoginAction.login({
          email: this.emailInput,
          password: this.passwordInput,
        });
        this.$router.push({ name: "Dash" });
      } catch (error: any) {
        this.errorInfo = error;
      }
    },
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
        .Error_Message_Field {
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