import { Api } from "../../types/Api";

export const jokesApi: Api = {
  baseUrl: "https://v2.jokeapi.dev/joke/Any",
  parameters: {
    limit: 1,
    blacklistFlags: "nsfw,racist,sexist,explicit",
    safeSearch: true,
    lang: "en",
  },
  key: undefined,
};
