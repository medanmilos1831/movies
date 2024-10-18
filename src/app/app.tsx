import { Virtual } from '../components';

const App = () => {
  return (
    <div>
      <Virtual
        collection={[
          1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5,
          6, 1, 2, 3, 4, 5, 6,
        ]}
      />
    </div>
  );
};

export { App };
