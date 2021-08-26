import { mount, shallow } from 'enzyme';
import React from 'react';
import Product from '../../components/Product';
import ProductMock from '../../__mocks__/ProductMock';
import ProviderMock from '../../__mocks__/ProviderMock';

describe('<Product />', () => {
  test('should render <Product />', () => {
    const product = shallow(
      <ProviderMock>
        <Product />
      </ProviderMock>,
    );
    expect(product.length).toEqual(1);
  });

  test('should add to cart when is clicked', () => {
    const handleAddToCart = jest.fn();
    const wrapper = mount(
      <ProviderMock>
        <Product
          product={ProductMock}
          handleAddToCart={handleAddToCart}
        />
      </ProviderMock>,
    );
    wrapper.find('button').simulate('click');
    expect(handleAddToCart).toHaveBeenCalledTimes(1);
  });

});
