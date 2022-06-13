import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard } from '../../src/components';
import { product1 } from '../data/producto';

const { act } = renderer;

describe('ProductImage', () => {
  test('Debe de mostrar el componente correctamente con la Imagen personalizado', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {() => <h1>Product Card</h1>}
      </ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('Debe Incrementar el contador', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {({ count, increasBy }) => (
          <>
            <h1>product card</h1>
            <span>{count}</span>
            <button onClick={() => increasBy(1)}></button>
          </>
        )}
      </ProductCard>
    );

    let tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
    act(() => {
      (tree as any).children[2].props.onClick();
    });

    tree = wrapper.toJSON();

    expect((tree as any).children[1].children[0]).toBe('1');
  });
});
