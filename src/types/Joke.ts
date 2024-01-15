export interface Joke {
  category: string;
  type: string;
  joke: string;
  flags: {
    nsfw: boolean;
    religious: boolean;
    political: boolean;
    racist: boolean;
    sexist: boolean;
    explicit: boolean;
  };
  lang: string;
}

export interface JokesParameters {
  limit: number;
  blacklistFlags: string;
  safeSearch: boolean;
  lang: string;
}
