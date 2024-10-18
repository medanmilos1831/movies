import { useVirtualizer } from '@tanstack/react-virtual';
import { IVirtual } from './types';
import { useRef, useState } from 'react';

function Virtual<T = unknown>({ collection, config }: IVirtual<T>) {
  const parentRef = useRef(null);
  const defaultConfig = useRef({
    count: Math.ceil(collection.length / 6),
    getScrollElement: () => parentRef.current,
    estimateSize: () => 450,
  });
  const [[xAxis, yAxis], setActive] = useState<[xAxis: number, yAxis: number]>([
    0, 0,
  ]);

  const rowVirtualizer = useVirtualizer({
    ...defaultConfig.current,
    ...config,
  });
  return (
    <div
      ref={parentRef}
      style={{
        height: `100vh`,
        overflow: 'auto',
      }}
      onKeyDown={(e) => {}}
    >
      <div
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
          position: 'relative',
          width: '100%',
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualItem) => {
          return (
            <div
              key={virtualItem.key}
              ref={rowVirtualizer.measureElement}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: `${virtualItem.size}px`,
                transform: `translateY(${virtualItem.start}px)`,
                display: 'grid',
                gridTemplateColumns: 'repeat(6, 1fr)',
                gap: '10px',
                padding: '10px',
                zIndex: virtualItem.index === yAxis ? 1 : 0,
              }}
            >
              {/* {Array(6)
                .fill(0)
                .map((_, index) => {
                  const movieIndex = virtualItem.index * 3 + index;
                  if (movieIndex >= movies.length) return null;

                  return (
                    <div
                      key={movies[movieIndex].id}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        maxWidth: '100%',
                      }}
                    >
                      <div
                        className="relative h-full w-full"
                        style={{
                          background: 'green',
                          transform: `scale(${
                            virtualItem.index === yAxis && index === xAxis
                              ? 1.2
                              : 1
                          })`,
                          transition: '.4s',
                          zIndex: 2,
                        }}
                      >
                        <div>
                          <img
                            src={`https://image.tmdb.org/t/p/w500${movies[movieIndex].poster_path}`}
                          />
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            padding: '.5rem',
                          }}
                        >
                          <span
                            style={
                              {
                                // whiteSpace: 'nowrap',
                                // overflow: 'hidden',
                                // textOverflow: 'ellipsis',
                                // // maxWidth: '100%',
                                // width: '200px',
                                // display: 'inline-block',
                              }
                            }
                          >
                            {movies[movieIndex].title}
                          </span>
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                            }}
                          >
                            <span>
                              {parseDate(movies[movieIndex].release_date)}
                            </span>
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                                fill="currentColor"
                                stroke="black"
                                stroke-width="1"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })} */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export { Virtual };
