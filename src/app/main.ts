import { createApp } from "vue";
import { store, key } from "@/app/store";
import router from "@/app/router";
import "./global.scss";
import App from "./App.vue";

const app = createApp(App).use(store, key).use(router).mount("#app");
