enum Category {
  'all',
  'mmorpg',
  'shooter',
  'strategy',
  'action',
  'racing',
  'sports',
  'mmo',
  'survival',
  'social',
}

enum Platform {
  'pc',
  'browser',
  'all',
}

enum SortBy {
  'release-date',
  'popularity',
  'alphabetical',
  'relevance',
}
export type CategoryStrings = keyof typeof Category;

export type PlatformStrings = keyof typeof Platform;

export type SortByStrings = keyof typeof SortBy;

export interface IGame {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: CategoryStrings;
  platform: PlatformStrings;
  publisher: string;
  developer: string;
  release_date: Date;
  freetogame_profile_url: string;
}

export interface IRecord {
  fails: number;
  gameId: string;
  playTime: number;
  wins: number;
}
