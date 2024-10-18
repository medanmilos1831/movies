export interface IMovie {
  adult: boolean;
  backdrop_path: any;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string | null;
  title: string;
  video: boolean;
  ratings: { id: string; rating: number }[];
  release_date?: string;
}
