import {
  PartialKeys,
  VirtualItem,
  VirtualizerOptions,
} from '@tanstack/react-virtual';
import { ReactNode } from 'react';

export interface IVirtual<T = unknown, S = any> {
  collection: T[];
  config?: PartialKeys<
    VirtualizerOptions<any, Element>,
    'observeElementRect' | 'observeElementOffset' | 'scrollToFn'
  >;
  perRow?: number;
  children: (virtualItem: VirtualItem, index: number, state: any) => ReactNode;
  service(props: eventProps): void;

  initState: any;
}

export type eventProps = {
  event: KeyboardEvent;
  next: React.Dispatch<React.SetStateAction<any>>;
  collection: any;
};

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

export type coordinates = [xAxis: number, yAxis: number];
