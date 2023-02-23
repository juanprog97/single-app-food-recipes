module.export = {
  preset: "ts-jest",
  moduleFileExtensions: ["vue", "js", "ts"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.vue$": "@vue/vue3-jest",
    "^.+\\js$": "babel-jest",
    "^.+\\.ts$": "ts-jest",
  },
};
