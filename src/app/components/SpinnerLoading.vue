<template>
  <div class="Container_Loading">
    <span class="spinner spinner--dotted"></span>
    <p class="textLoading">Loading...</p>
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

<style lang="css" scoped>
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.Container_Loading {
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 0.2em;
  width: 100%;
  height: 100%;
}
.textLoading {
  font-size: 1.2em;
  font-weight: 400;
  text-align: center;
  color: var(--clr-normal-grey);
}
.spinner {
  aspect-ratio: 1/1;
  border-radius: 50%;

  animation-name: spin;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

.spinner--dotted {
  width: 10em;
  border: 5px dotted var(--clr-normal-primary);

  animation-duration: 5s;
}
</style>