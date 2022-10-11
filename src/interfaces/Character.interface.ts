export interface ICharacter {
  _id: number;
  name: string;
  imageUrl: string;
  films: Array<string>;
  videoGames: Array<string>;
  tvShows: Array<string>;
  shortFilms: Array<string>;
}
