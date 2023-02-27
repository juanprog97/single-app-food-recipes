<template>
  <div ref="headerListFood" class="ContainerListFood">
    <div class="ContainerAllItem">
      <FoodItem
        v-for="(item, index) in DataRender"
        :key="index"
        :dataInfo="item"
      />
      <!-- <FoodItem />
      <FoodItem />
      <FoodItem />
      <FoodItem />
      <FoodItem />
      <FoodItem />
      <FoodItem />
      <FoodItem />
      <FoodItem /> -->
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
import { defineComponent } from "vue";
import FoodItem from "./FoodItem.vue";

export default defineComponent({
  props: {
    ListData: { type: Array<Object>, required: true },
    maxNumElem: {
      type: Number,
      required: true,
    },
  },
  setup() {
    let DataRender: Object[] = [];
    return {
      DataRender,
    };
  },
  data() {
    return {
      ListAllData: this.ListData,
      totalPage: 0,
      pageCurrently: 0,
    };
  },
  created() {
    this.totalPage = Math.ceil(this.ListData.length / this.maxNumElem);
    this.DataRender = this.ListAllData.slice(0, this.maxNumElem);
    if (this.totalPage > 1) {
      this.pageCurrently = 1;
    }
  },
  methods: {
    nextPage() {
      this.pageCurrently += 1;

      this.DataRender =
        this.pageCurrently == this.totalPage
          ? this.ListAllData.slice(
              (this.pageCurrently - 1) * this.maxNumElem,
              this.ListAllData.length
            )
          : this.ListAllData.slice(
              (this.pageCurrently - 1) * this.maxNumElem,
              this.pageCurrently * this.maxNumElem
            );
      this.scrollInit();
    },
    prevPage() {
      this.pageCurrently -= 1;
      this.DataRender =
        this.pageCurrently == 1
          ? this.ListAllData.slice(0, this.maxNumElem)
          : this.ListAllData.slice(
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
  max-height: 80%;
  overflow-y: auto;

  .ContainerAllItem {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1em;
    flex-direction: row;
    width: auto;
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