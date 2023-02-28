<template>
  <div ref="headerListFood" class="ContainerListFood">
    <div class="ContainerAllItem">
      <FoodItem
        v-for="(item, index) in DataRender"
        :key="index + item.id"
        :dataFood="item"
      />
      <!-- <h1 class="NotFoundText" v-show="ListDataComp.length == 0">
        {{ labelEmptyData }}
      </h1> -->
    </div>
    <div class="PaginationOption" v-if="totalPage > 1">
      <button class="primary" v-if="pageCurrently > 1" :onClick="prevPage">
        Prev
      </button>
      <p>Page {{ pageCurrently }} of {{ totalPage }}</p>
      <button
        class="primary"
        v-if="pageCurrently < totalPage"
        :onClick="nextPage"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { FoodRecipe } from "@/domain/entity";
import { defineComponent } from "vue";
import FoodItem from "./FoodItem.vue";

export default defineComponent({
  props: {
    ListData: { type: Array<FoodRecipe>, required: true },
    maxNumElem: {
      type: Number,
      required: true,
    },
    labelEmptyData: {
      type: String,
      required: true,
    },
  },
  setup() {
    let DataRender: FoodRecipe[] = [];

    return {
      DataRender,
    };
  },

  data() {
    return {
      pageCurrently: 0,
    };
  },
  created() {
    if (this.totalPage > 1) {
      this.pageCurrently = 1;
    }

    console.log(this.maxNumElem > this.ListDataComp.length);
    this.DataRender =
      this.maxNumElem <= this.ListDataComp.length
        ? this.ListDataComp.slice(0, this.maxNumElem)
        : this.ListDataComp;
    console.log(this.DataRender);
  },
  computed: {
    ListDataComp(): any {
      return this.ListData;
    },
    totalPage(): number {
      return Math.ceil(this.ListDataComp.length / this.maxNumElem);
    },
  },
  methods: {
    nextPage() {
      this.pageCurrently += 1;

      this.DataRender =
        this.pageCurrently == this.totalPage
          ? this.ListDataComp.slice(
              (this.pageCurrently - 1) * this.maxNumElem,
              this.ListData.length
            )
          : this.ListDataComp.slice(
              (this.pageCurrently - 1) * this.maxNumElem,
              this.pageCurrently * this.maxNumElem
            );
      this.scrollInit();
    },
    prevPage() {
      this.pageCurrently -= 1;
      this.DataRender =
        this.pageCurrently == 1
          ? this.ListDataComp.slice(0, this.maxNumElem)
          : this.ListDataComp.slice(
              (this.pageCurrently - 1) * this.maxNumElem,
              this.pageCurrently * this.maxNumElem
            );
      this.scrollInit();
    },
    scrollInit() {
      const element = this.$refs.headerListFood as HTMLElement;
      element.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
  components: {
    FoodItem,
  },
});
</script>

<style lang="scss" scoped>
.ContainerListFood {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  padding: 1em;
  height: auto;
  width: 100%;
  max-height: 95%;
  overflow-y: auto;

  .ContainerAllItem {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    gap: 1em;
    flex-direction: row;
    width: auto;
    .NotFoundText {
      color: var(--clr-normal-grey);
      font-weight: 400;
    }
  }
  .PaginationOption {
    margin-top: 1em;
    margin-bottom: 0.5em;
    display: flex;
    font-weight: 400;
    font-size: 1.2em;
    flex-direction: row;
    align-self: center;
    gap: 0.5em;
    align-items: center;
  }
}
</style>