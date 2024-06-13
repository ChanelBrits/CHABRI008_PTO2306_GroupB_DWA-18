export type Preview = {
    id: string;
    title: string;
    description: string;
    seasons: number;
    image: string;
    genres: number[];
    updated: string;
  }

export type Show = {
  id: number;
  title: string;
  description: string;
  seasons: Season[];
}

export type Season = {
  id: number;
  title: string;
  image: string;
  episodes: Episode[];
}

export type Episode = {
  id: number;
  file: string;
  title: string;
}

// const GENRE_MAP = {
//   1: "Personal Growth",
//   2: "True Crime and Investigative Journalism",
//   3: "History",
//   4: "Comedy",
//   5: "Entertainment",
//   6: "Business",
//   7: "Fiction",
//   8: "News",
//   9: "Kids and Family"
// }
