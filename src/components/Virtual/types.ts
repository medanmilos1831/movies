import {
  PartialKeys,
  VirtualItem,
  Virtualizer,
  VirtualizerOptions,
} from '@tanstack/react-virtual';
import { ReactNode } from 'react';

export type virtualEventProps<C = unknown, S = unknown> = {
  event: React.KeyboardEvent<HTMLDivElement>;
  next: React.Dispatch<React.SetStateAction<S>>;
  collection: C[];
};
export interface IVirtual<C = unknown, S = unknown> {
  collection: C[];
  config?: PartialKeys<
    VirtualizerOptions<any, Element>,
    'observeElementRect' | 'observeElementOffset' | 'scrollToFn'
  >;
  perRow?: number;
  children: (virtualItem: VirtualItem, index: number, state: S) => ReactNode;
  service(props: virtualEventProps<C, S>): void;
  onChange: (rowVirtualizer: Virtualizer<any, Element>, state: S) => void;

  initState: S;
}
