import { movieNavigationService } from '../services';
import { MovieBox, Virtual } from '../components';
import { movies } from '../data/movies';

const App = () => {
  const parseDate = (value: string | undefined) => {
    if (!value) return '-';
    return value.split('-').reverse().join('.');
  };
  return (
    <div className="h-screen w-screen bg-gray-200">
      <Virtual
        collection={movies}
        service={(props) => {
          movieNavigationService(props);
        }}
        initState={[0, 0]}
        onChange={(rowVirtualizer, [_, yAxis]) => {
          rowVirtualizer.scrollToIndex(yAxis);
        }}
      >
        {(virtualItem, index: number, [xAxis, yAxis]) => {
          const movieIndex = virtualItem.index * 3 + index;
          if (movieIndex >= movies.length) return null;
          return (
            <div
              className="relative transition-transform duration-[0.4s]"
              style={{
                transform: `scale(${
                  virtualItem.index === yAxis && index === xAxis ? 1.2 : 1
                })`,
                zIndex: virtualItem.index === yAxis && index === xAxis ? 2 : 1,
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
