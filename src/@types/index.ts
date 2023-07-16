export type ApiData = {
    id: string;
    developer: string;
    freetogame_profile_url: string;
    game_url: string;
    genre: string;
    platform: string;
    publisher: string;
    release_date: Date;
    short_description: string;
    thumbnail: string;
    title: string;
  };
  export type Favorito = {
    gameId: string;
  };
  
  export type GameRated = {
    gameId: string;
    rate: number;
  };
  export type UserData = {
    userId: string;
    userName: string;
    favorites: Favorito[];
    gamesRate: GameRated[];
  };