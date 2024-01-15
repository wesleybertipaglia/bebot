import { Api } from "../../types/Api";

export const tenorApi: Api = {
  baseUrl: "https://api.tenor.com/v1/search",
  parameters: {
    key: undefined,
    q: "fail",
    limit: 1,
    contentfilter: "high",
    media_filter: "minimal",
  },
  key: process.env.TENOR_KEY,
};
