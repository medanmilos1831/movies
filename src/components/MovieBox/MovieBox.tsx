import { useEffect, useRef, useState } from 'react';
import styles from './style.module.css';
import { IMovie } from './types';
const MovieBox = ({
  title,
  release_date,
  poster_path,
  isActive,
  isFavorite = false,
  onEnter,
}: {
  title: IMovie['title'];
  release_date: IMovie['release_date'];
  poster_path: IMovie['poster_path'];
  isActive: boolean;
  isFavorite: boolean;
  onEnter: () => void;
}) => {
  const [favorite, setFavorite] = useState(isFavorite);
  const handler = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      onEnter();
      setFavorite((prev) => !prev);
    }
  };
  const starFill = favorite ? 'black' : 'white';
  let element = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (isActive) {
      element.current!.focus();
      return;
    }
    element.current!.blur();
  }, [isActive]);
  return (
    <div
      ref={element}
      tabIndex={0}
      onKeyDown={handler}
      className={`flex items-center justify-center text-white max-w-full h-full ${styles.boxShadow}`}
    >
      <div className="relative h-full w-full flex flex-col">
        <div
          className="relative"
          style={{
            paddingTop: '150%',
          }}
        >
          <div className="absolute left-0 top-0 h-full w-full">
            <img
              className="h-full w-full"
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            />
          </div>
        </div>
        <div className="p-2 flex-grow relative bg-white">
          <div className="absolute left-0 top-0 flex flex-col h-full justify-between p-2 w-full">
            <span className="text-nowrap overflow-hidden text-ellipsis inline-block text-black w-[200px]">
              {title}
            </span>
            <div className="relative flex text-black justify-between">
              <span>{release_date}</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                  fill={starFill}
                  stroke="black"
                  stroke-width="1"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export { MovieBox };
