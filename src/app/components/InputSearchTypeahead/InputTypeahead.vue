

<template>
  <div class="Container_Typeahead">
    <div class="Container_Input_Search">
      <input
        class="input-style"
        id="SearchInputFood"
        type="text"
        v-model="inputValueSearch"
        placeholder="Search your recipe"
      />
      <button class="primary Button_Search" :onClick="confirmSearch">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 96 960 960"
          width="24"
          fill="white"
        >
          <path
            d="M784 936 532 684q-30 24-69 38t-83 14q-109 0-184.5-75.5T120 476q0-109 75.5-184.5T380 216q109 0 184.5 75.5T640 476q0 44-14 83t-38 69l252 252-56 56ZM380 656q75 0 127.5-52.5T560 476q0-75-52.5-127.5T380 296q-75 0-127.5 52.5T200 476q0 75 52.5 127.5T380 656Z"
          />
        </svg>
        <p>Search</p>
      </button>
    </div>
    <div id="ListSuggestFood">
      <button
        class="ButtonSuggestOption"
        v-for="(suggest, index) in listSuggestionFood"
        :key="index"
        @click="changeValueInput(suggest)"
      >
        {{ suggest }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { SuggestionFood } from "@/useCases/interactor/suggestionFood";
import FoodRepository from "@/data/FoodRepository/foodRepository";
import { foodCompleteSuggestionAdapter } from "@/useCases/adapters/foodCompleteSuggestionAdapter";

export default defineComponent({
  setup() {
    const autoCompleteService = new SuggestionFood(new FoodRepository());
    const controllerAbort = autoCompleteService.execute("").controller;
    let listSuggestionFood: string[] = [];
    return {
      autoCompleteService,
      controllerAbort,
      listSuggestionFood,
    };
  },
  watch: {
    async inputValueSearch(newValue) {
      this.controllerAbort?.abort();

      const callEndpoint = this.autoCompleteService.execute(newValue);
      this.controllerAbort = callEndpoint.controller;
      const response = await callEndpoint.call;
      this.listSuggestionFood = foodCompleteSuggestionAdapter(response.data);
    },
  },
  data() {
    return {
      inputValueSearch: "",
    };
  },
  methods: {
    changeValueInput(value: string) {
      this.inputValueSearch = value;
      this.listSuggestionFood = [];
    },
    confirmSearch() {
      this.$emit("confirmSearch", this.inputValueSearch);
    },
  },
});
</script>

<style lang="scss" scoped>
.Container_Typeahead {
  display: block;

  position: relative;
  .Container_Input_Search {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5em;
    #SearchInputFood {
      width: 22em;
    }
    button.Button_Search {
      display: flex;
      flex-direction: row;
      gap: 0.3em;
    }
  }
  #ListSuggestFood {
    display: flex;
    position: absolute;
    width: 100%;
    top: 110%;
    flex-direction: column;
    gap: 0.2em;
    height: fit-content;
    max-height: 200px;
    overflow-y: auto;
    justify-content: flex-start;
    background-color: var(--clr-normal-white);
    border: 1px solid var(--clr-normal-whiteGrey);
    .ButtonSuggestOption {
      cursor: pointer;
      padding: 0.2em 0.4em;
      border: none;
      background: transparent;
      outline: none;
      color: var(--clr-normal-grey);
      font-weight: 400;
      text-align: start;
      z-index: 10;
    }
  }
}
</style>