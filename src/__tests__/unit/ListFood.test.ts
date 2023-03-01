import { render, fireEvent, cleanup, waitFor } from "@testing-library/vue";

import ListFood from "@/app/components/ItemFoodComponents/ListFood.vue";
import { FoodRecipe } from "../../domain/entity/index";

describe("<ListFood/>", () => {
  beforeEach(() => {});

  test("Should Render", () => {
    expect(
      render(ListFood, {
        props: {
          ListData: [],
          maxNumElem: 1,
          labelEmptyData: "",
        },
      })
    ).toBeTruthy();
  });
  test("must show the maximum number of elements to show defined", async () => {
    const ListFoodMock = [
      {
        id: "1a",
        image: "",
        name: "",
        nutrition: [],
        instructions: [],
        ingredient: [],
        description: "",
      },
      {
        id: "2b",
        image: "",
        name: "",
        nutrition: [],
        instructions: [],
        ingredient: [],
        description: "",
      },
      {
        id: "3c",
        image: "",
        name: "",
        nutrition: [],
        instructions: [],
        ingredient: [],
        description: "",
      },
      {
        id: "4d",
        image: "",
        name: "",
        nutrition: [],
        instructions: [],
        ingredient: [],
        description: "",
      },
      {
        id: "5e",
        image: "",
        name: "",
        nutrition: [],
        instructions: [],
        ingredient: [],
        description: "",
      },
    ] as FoodRecipe[];
    const maxView = 4;
    const component = render(ListFood, {
      props: {
        ListData: ListFoodMock,
        maxNumElem: maxView,
        labelEmptyData: "xd",
      },
    });
    const children = component.getByTestId("listElementTest");
    expect(children.childElementCount).toBe(maxView);
  });
  test("should show the pagination option when the total number of items is greater than the maximum to display", async () => {
    const ListFoodMock = [
      {
        id: "1a",
        image: "",
        name: "",
        nutrition: [],
        instructions: [],
        ingredient: [],
        description: "",
      },
      {
        id: "2b",
        image: "",
        name: "",
        nutrition: [],
        instructions: [],
        ingredient: [],
        description: "",
      },
      {
        id: "3c",
        image: "",
        name: "",
        nutrition: [],
        instructions: [],
        ingredient: [],
        description: "",
      },
      {
        id: "4d",
        image: "",
        name: "",
        nutrition: [],
        instructions: [],
        ingredient: [],
        description: "",
      },
      {
        id: "5e",
        image: "",
        name: "",
        nutrition: [],
        instructions: [],
        ingredient: [],
        description: "",
      },
    ] as FoodRecipe[];
    const maxView = 3;
    const component = render(ListFood, {
      props: {
        ListData: ListFoodMock,
        maxNumElem: maxView,
        labelEmptyData: "xd",
      },
    });
    expect(component.queryByTestId("PaginationTest")).toBeTruthy();
  });
  test("when the number of elements is equal to or less than the maximum number to display, no pagination should appear", async () => {
    const ListFoodMock = [
      {
        id: "1a",
        image: "",
        name: "",
        nutrition: [],
        instructions: [],
        ingredient: [],
        description: "",
      },
      {
        id: "2b",
        image: "",
        name: "",
        nutrition: [],
        instructions: [],
        ingredient: [],
        description: "",
      },
      {
        id: "3c",
        image: "",
        name: "",
        nutrition: [],
        instructions: [],
        ingredient: [],
        description: "",
      },
      {
        id: "4d",
        image: "",
        name: "",
        nutrition: [],
        instructions: [],
        ingredient: [],
        description: "",
      },
      {
        id: "5e",
        image: "",
        name: "",
        nutrition: [],
        instructions: [],
        ingredient: [],
        description: "",
      },
    ] as FoodRecipe[];
    const maxView = 10;
    const component = render(ListFood, {
      props: {
        ListData: ListFoodMock,
        maxNumElem: maxView,
        labelEmptyData: "xd",
      },
    });
    component.debug();
    expect(component.queryByTestId("PaginationTest")).toBeNull();
  });
  test("When there is no element, the message I define how much is empty should appear", () => {
    const textMessage = "Hello a";
    const comp = render(ListFood, {
      props: {
        ListData: [],
        maxNumElem: 1,
        labelEmptyData: textMessage,
      },
    });
    expect(comp.getByTestId("messageEmpty")).toBeTruthy();
    expect(comp.getByTestId("messageEmpty").textContent).toBe(textMessage);
  });
});
