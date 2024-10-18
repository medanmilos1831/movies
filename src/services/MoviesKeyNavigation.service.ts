import { eventProps } from '../components/Virtual/types';

class MoviesKeyNavigationService {
  static xAxisMoveOnArrowDown({ event, next, collection }: eventProps) {
    if (event.key === 'ArrowDown') {
      next(([prev_xAxis, prev_yAxis]: any) => {
        if (prev_yAxis === collection.length) return [prev_xAxis, prev_yAxis];
        return [prev_xAxis, ++prev_yAxis];
      });
    }
  }
}

export { MoviesKeyNavigationService };
