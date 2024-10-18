import { PartialKeys, VirtualizerOptions } from '@tanstack/react-virtual';

export interface IVirtual<T = unknown> {
  collection: T[];
  config?: PartialKeys<
    VirtualizerOptions<any, Element>,
    'observeElementRect' | 'observeElementOffset' | 'scrollToFn'
  >;
  perRow?: number;
}

interface IMovie {
  adult: boolean;
  backdrop_path: any;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  title: string;
  video: boolean;
  ratings: { id: string; rating: number }[];
  release_date: string;
}
