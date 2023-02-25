import { createApp } from "vue";
import { store, key } from "@/app/store";

import "./global.scss";
import App from "./App.vue";

const app = createApp(App).use(store, key).mount("#app");
