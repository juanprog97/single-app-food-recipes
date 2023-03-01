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
    <h1>Click your points to create the Shape</h1>
    <div class="ContainerDrawPaint">
      <canvas id="DrawPaintCanvas" width="800" height="500">
        Your browser not supported &lt;canvas&gt;.
      </canvas>
    </div>
    <div class="optionModal">
      <button
        class="primary"
        v-bind:data-state="numberDot.length < 2 || canPaint === false"
        v-bind:disabled="numberDot.length < 2 || canPaint === false"
        @click="FinishFigure"
      >
        Finish Shape
      </button>
      <button
        class="secondary"
        v-bind:onClick="ResetFigure"
        v-bind:disabled="numberDot.length == 0"
      >
        Reset Shape
      </button>
    </div>
  </dialog>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
  data() {
    return {
      numberDot: [] as any[],
      canPaint: true,
      ctx2dCanvas: null as any,
      ElementCanvas: null as HTMLCanvasElement | null,
    };
  },
  mounted() {
    const ElementCanvasIstance: HTMLCanvasElement = document.getElementById(
      "DrawPaintCanvas"
    ) as HTMLCanvasElement;
    ElementCanvasIstance.addEventListener("click", this.PaintFigure);
    this.ElementCanvas = ElementCanvasIstance;
    this.ctx2dCanvas = ElementCanvasIstance.getContext("2d");
  },
  beforeDestroy() {
    this.ElementCanvas?.removeEventListener("click", this.PaintFigure);
  },
  methods: {
    DrawDot(coord: any[]) {
      if (this.ctx2dCanvas != null) {
        this.ctx2dCanvas.beginPath();
        this.ctx2dCanvas.arc(coord[0], coord[1], 5, 0, 2 * Math.PI, true);
        this.ctx2dCanvas.fill();
      }
    },
    DrawRect(p1: any[], p2: any[]) {
      if (this.ctx2dCanvas != null) {
        this.ctx2dCanvas.beginPath();
        this.ctx2dCanvas.moveTo(p1[0], p1[1]);
        this.ctx2dCanvas.lineTo(p2[0], p2[1]);
        this.ctx2dCanvas.stroke();
      }
    },
    FinishFigure(event: any) {
      this.canPaint = false;
      let lastDot = this.numberDot[this.numberDot.length - 1];
      let firstDot = this.numberDot[0];

      this.DrawRect(lastDot, firstDot);
    },
    ResetFigure() {
      this.canPaint = true;
      this.numberDot = [];
      this.ctx2dCanvas.clearRect(
        0,
        0,
        this.ElementCanvas?.width,
        this.ElementCanvas?.height
      );
    },
    PaintFigure(event: any) {
      if (this.canPaint) {
        if (this.ElementCanvas != null) {
          let rect = this.ElementCanvas.getBoundingClientRect();

          let xPos = event.clientX - rect.left;
          let yPos = event.clientY - rect.top;
          this.numberDot.push([xPos, yPos]);

          this.DrawDot([xPos, yPos]);
          if (this.numberDot.length > 1) {
            let lastDot = this.numberDot[this.numberDot.length - 1];
            let penultimateDot = this.numberDot[this.numberDot.length - 2];
            this.DrawRect(penultimateDot, lastDot);
          }
        }
      }
    },

    closeModal() {
      const ElementModal = document.getElementById(
        "modalElementShape"
      ) as HTMLDialogElement;
      ElementModal.close();
      this.ResetFigure();
    },
  },
});
</script>

<style lang="scss" scoped>
.containerModal {
  border: none;
  visibility: hidden;
  pointer-events: none;
  height: auto;
  width: auto;
  display: flex;
  flex-direction: column;
  padding: 1em;
  gap: 0.2em;
  justify-content: space-between;
  align-items: center;
  background-color: var(--clr-normal-background);
  border-radius: 10px;
  .ContainerDrawPaint {
    border: 3px solid var(--clr-normal-primary);
    border-radius: 10px;
    #DrawPaintCanvas {
      &:hover {
        cursor: crosshair;
      }
    }
  }
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