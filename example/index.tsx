import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductImage, ProductTitle, ProductButton, ProductCard } from '../.';

const product1 = {
  id: "1",
  title: "Coffe Mug - Card!",
  img: "./coffee-mug.png",
};

const App = () => {
  return (
    <>
      <ProductCard
        product={product1}
        initialValue={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({ count, isMaxReached, maxCount, product, increasBy, reset }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButton />
          </>
        )}
      </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
