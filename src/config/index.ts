import AppConfig from "./app.config.json";

class Config {
  appConfig: typeof AppConfig;
  LANGUAGE: "en";
  THEME: "light" | "dark";
  THEMES: (typeof AppConfig)["THEMES"];

  constructor() {
    this.appConfig = AppConfig;
    this.LANGUAGE = AppConfig["LANGUAGE"] as "en";
    this.THEME = AppConfig["THEME"] as "light";
    this.THEMES = AppConfig["THEMES"] as (typeof AppConfig)["THEMES"];
  }
}

export default new Config();
