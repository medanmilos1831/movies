import { virtualEventProps, IMovie } from '../components';

export function movieNavigationService({
  event,
  next,
  collection,
}: virtualEventProps<IMovie, number[]>) {
  const events: {
    [key: string]: (
      next: virtualEventProps<unknown, number[]>['next'],
      collection: virtualEventProps<IMovie, unknown>['collection']
    ) => void;
  } = {
    ArrowUp(next) {
      next(([prev_xAxis, prev_yAxis]) => {
        if (prev_yAxis === 0) return [prev_xAxis, prev_yAxis];
        return [prev_xAxis, --prev_yAxis];
      });
    },
    ArrowDown(next, collection) {
      next(([prev_xAxis, prev_yAxis]) => {
        if (prev_yAxis === collection.length) return [prev_xAxis, prev_yAxis];
        return [prev_xAxis, ++prev_yAxis];
      });
    },
    ArrowRight(next) {
      next(([prev_xAxis, prev_yAxis]) => {
        if (prev_xAxis === 5) {
          return [0, ++prev_yAxis];
        }
        return [prev_xAxis + 1, prev_yAxis];
      });
    },
    ArrowLeft(next) {
      next(([prev_xAxis, prev_yAxis]) => {
        if (prev_xAxis === 0 && prev_yAxis === 0)
          return [prev_xAxis, prev_yAxis];
        if (prev_xAxis === 0) {
          return [5, --prev_yAxis];
        }
        return [--prev_xAxis, prev_yAxis];
      });
    },
  };
  if (!events[event.key]) return;
  events[event.key](next, collection);
}
