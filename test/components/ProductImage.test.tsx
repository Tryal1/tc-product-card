import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard,ProductImage } from '../../src/components';
import { product2 } from '../data/producto';

describe('ProductImage', () => {
  test('Debe de mostrar el componente correctamente con la Imagen personalizado', () => {
    const wrapper = renderer.create(<ProductImage img="http://hola.jpg" />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('Debe de mostrar el componente correctamentecon la Imagen del producto', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
