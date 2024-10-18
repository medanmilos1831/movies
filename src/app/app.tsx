import { MoviesKeyNavigationService } from '../services';
import { MovieBox, Virtual } from '../components';
import { movies } from '../data/movies';

const App = () => {
  const parseDate = (value: string | undefined) => {
    if (!value) return '-';
    return value.split('-').reverse().join('.');
  };
  return (
    <div>
      <Virtual
        collection={movies}
        service={(props) => {
          MoviesKeyNavigationService.xAxisMoveOnArrowDown(props);
        }}
        initState={[0, 0]}
      >
        {(virtualItem, index: number, [xAxis, yAxis]) => {
          const movieIndex = virtualItem.index * 3 + index;
          if (movieIndex >= movies.length) return null;
          return (
            <div
              className="relative h-full w-full"
              style={{
                border:
                  virtualItem.index === yAxis && index === xAxis
                    ? '1rem solid red'
                    : 'none',
              }}
            >
              <MovieBox
                title={movies[index]?.title}
                release_date={parseDate(movies[movieIndex]?.release_date)}
                poster_path={movies[movieIndex]?.poster_path}
              />
            </div>
          );
        }}
      </Virtual>
    </div>
  );
};

export { App };
