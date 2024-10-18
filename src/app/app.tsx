import { MovieBox, Virtual } from '../components';
import { movies } from '../data/movies';

const App = () => {
  const parseDate = (value: string | undefined) => {
    if (!value) return '-';
    return value.split('-').reverse().join('.');
  };
  return (
    <div>
      <Virtual collection={movies}>
        {(virtualItem, index: number) => {
          return (
            <MovieBox
              title={movies[index]?.title}
              release_date={parseDate(movies[index]?.release_date)}
              poster_path={movies[index]?.poster_path}
            />
          );
        }}
      </Virtual>
    </div>
  );
};

export { App };
