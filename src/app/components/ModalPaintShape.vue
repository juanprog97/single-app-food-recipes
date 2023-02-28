<template>
  <dialog class="containerModal" id="modalElementShape">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 96 960 960"
      width="24"
      v-bind:onClick="closeModal"
      class="ButtonClose"
    >
      <path
        d="m256 856-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
      />
    </svg>
    <div>sadasdmasñdkaskdasldñalskñdlak</div>
    <div class="optionModal">
      <button class="primary">Finish Shape</button>
      <button class="secondary">Reset Shape</button>
    </div>
  </dialog>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
  methods: {
    closeModal() {
      const ElementModal = document.getElementById(
        "modalElementShape"
      ) as HTMLDialogElement;
      ElementModal.close();
    },
  },
});
</script>

<style lang="scss" scoped>
.containerModal {
  border: none;
  visibility: hidden;
  pointer-events: none;
  height: 50%;
  width: 60%;
  display: flex;
  flex-direction: column;
  padding: 1em;
  justify-content: space-between;
  align-items: center;
  background-color: var(--clr-normal-background);
  border-radius: 10px;
  .optionModal {
    display: none;
  }
  .ButtonClose {
    cursor: pointer;
    fill: var(--clr-normal-grey);
    align-self: self-end;
  }
  &[open] {
    visibility: visible;
    pointer-events: all;
    .optionModal {
      display: flex;
      gap: 1em;
      flex-direction: row;
    }
  }
}
</style>