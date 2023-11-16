const { defineConfig } = require("cypress");
// const allureWriter = require("@shelex/cypress-allure-plugin/writer");
const {
  configureAllureAdapterPlugins,
} = require("@mmisty/cypress-allure-adapter/plugins");

module.exports = defineConfig({
  e2e: {
    // specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
    // baseUrl: "https://opensource-demo.orangehrmlive.com/web/index.php",
    setupNodeEvents(on: any, config: any) {
      // allureWriter(on, config);
      configureAllureAdapterPlugins(on, config);
      return config;
    },
    env: {
      allure: true,
      allureReuseAfterSpec: true,
    },
    videosFolder: "allure-results/",
    screenshotOnRunFailure: true,
  },
});
