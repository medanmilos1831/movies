const MovieBox = ({
  title,
  release_date,
  poster_path,
}: {
  title: string;
  release_date: any;
  poster_path: any;
}) => {
  return (
    <div
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
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            height: '75%',
          }}
        >
          <img
            style={{
              height: '100%',
            }}
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '.5rem',
            background: 'gray',
            flexGrow: '1',
          }}
        >
          <span>{title}</span>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
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
};
export { MovieBox };
