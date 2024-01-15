import { Api } from "../../types/Api";

export const giphyApi: Api = {
  baseUrl: "https://api.giphy.com/v1/gifs/random",
  parameters: {
    tag: "fail",
    rating: "pg-13",
  },
  key: process.env.GIPHY_KEY,
};
