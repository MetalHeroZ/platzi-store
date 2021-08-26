import { shallow, mount } from 'enzyme';
import React from 'react';
import { create } from 'react-test-renderer';
import Header from '../../components/Header';
import ProviderMock from '../../__mocks__/ProviderMock';

describe('<Header />', () => {
  test('should render the <Header/>', () => {
    const header = shallow(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );
    expect(header.length).toEqual(1);
  });

  test('should render the title', () => {
    const header = mount(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );
    expect(header.find('.Header-title').text()).toEqual('Platzi Store');
  });
});

describe('<Header /> Snapshot', () => {
  test('check the ui', () => {
    const footer = create(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );
    expect(footer.toJSON()).toMatchSnapshot();
  });
});
