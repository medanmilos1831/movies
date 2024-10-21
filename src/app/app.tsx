import { MovieBox, Virtual } from '../components';
import { movies } from '../data/movies';
import { movieNavigationService } from '../services';

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
      <div className="h-screen w-screen bg-gray-200 p-5">
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
          {(
            virtualItem,
            rowVirtualizer,
            [xAxis, yAxis],
            collection,
            perRow
          ) => {
            return (
              <div
                key={virtualItem.key}
                ref={rowVirtualizer.measureElement}
                className={`absolute top-0 left-0 w-full grid grid-cols-6 gap-2.5 p-2 ${
                  virtualItem.index === yAxis ? 'z-10' : 'z-0'
                }`}
                style={{
                  height: `${virtualItem.size}px`,
                  transform: `translateY(${virtualItem.start}px)`,
                }}
              >
                {Array(perRow)
                  .fill(null)
                  .map((_, index) => {
                    const isActive =
                      virtualItem.index === yAxis && index === xAxis;
                    const item = collection[virtualItem.index * 6 + index];
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
                  })}
              </div>
            );
          }}
        </Virtual>
      </div>
    </>
  );
};

export { App };
