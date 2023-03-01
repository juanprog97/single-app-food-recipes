import { shallowMount, mount } from "@vue/test-utils";
import { Field } from "vee-validate";
import Login from "@/app/view/Login.vue";

import flushPromises from "flush-promises";
import waitForExpect from "wait-for-expect";
import { createStore } from "vuex";

jest.mock("vuex-module-decorators", () => {
  return {
    __esModule: true,
    getModule: jest.fn((a, b) => {
      return {
        login: jest.fn((dataLogin) => {}),
      };
    }),
  };
});
jest.mock("@/app/store/authUser", () => {
  return {
    __esModule: true,
    UserStore: "",
    FoodStore: "",
  };
});

jest.mock("@/app/store", () => {
  return {
    __esModule: true,
    key: "",
  };
});

jest.mock("vuex", () => {
  return {
    __esModule: true,
    useStore: jest.fn((a) => {}),
  };
});

describe("<Login/>", () => {
  beforeEach(() => {});
  test("Should Render", () => {
    expect(shallowMount(Login)).toBeTruthy();
  });
  test("type wrong email and password, messages alert", async () => {
    const component = mount(Login);
    const inputEmail = component.get("input#emailInput");
    await inputEmail.setValue("sdada");

    const inputPassword = component.get("input#passwordInput");
    await inputPassword.setValue("sdca");

    await flushPromises();
    await waitForExpect(() => {
      const spanElementErrorEmail = component.get(
        "span#Error_Message_Field_Email"
      );
      const spanElementErrorPass = component.get(
        "span#Error_Message_Field_Password"
      );
      expect(spanElementErrorEmail.text()).toEqual(
        "email must be a valid email"
      );
      expect(spanElementErrorPass.text()).toEqual(
        "password must be at least 8 characters"
      );
    });
  });
  test("when form in filled, and call router manager", async () => {
    const component = mount(Login);
    const inputEmail = component.get("input#emailInput");
    await inputEmail.setValue("sdad@dsds.com");

    const inputPassword = component.get("input#passwordInput");
    await inputPassword.setValue("sdcaadadasdadad");
    await flushPromises();
    const button = component.find("form");
    await button.trigger("submit.prevent");
  });
});
