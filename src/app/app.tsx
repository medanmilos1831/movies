import { movieNavigationService } from '../services';
import { MovieBox, Virtual } from '../components';
import { movies } from '../data/movies';

const App = () => {
  const favorites = new Set();
  const parseDate = (value: string | undefined) => {
    if (!value) return '-';
    return value.split('-').reverse().join('.');
  };

  const onEnter = (id: number) => {
    favorites.has(id) ? favorites.delete(id) : favorites.add(id);
  };
  return (
    <>
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
            const isActive = virtualItem.index === yAxis && index === xAxis;
            return (
              <div
                key={item.id}
                className="relative transition-transform duration-[0.4s]"
                style={{
                  transform: `scale(${isActive ? 1.2 : 1})`,
                  zIndex: isActive ? 1000 : 0,
                }}
              >
                <MovieBox
                  title={item?.title}
                  release_date={parseDate(item?.release_date)}
                  poster_path={item?.poster_path}
                  isActive={isActive}
                  isFavorite={favorites.has(item.id)}
                  onEnter={() => onEnter(item.id)}
                />
              </div>
            );
          }}
        </Virtual>
      </div>
    </>
  );
};

export { App };
