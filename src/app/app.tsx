import { movieNavigationService } from '../services';
import { MovieBox, Virtual } from '../components';
import { movies } from '../data/movies';

const App = () => {
  const parseDate = (value: string | undefined) => {
    if (!value) return '-';
    return value.split('-').reverse().join('.');
  };
  console.log('ssss', movies);
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
        {(virtualItem, index: number, [xAxis, yAxis], item) => {
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
                title={item?.title}
                release_date={parseDate(item?.release_date)}
                poster_path={item?.poster_path}
              />
            </div>
          );
        }}
      </Virtual>
    </div>
  );
};

export { App };
