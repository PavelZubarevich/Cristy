import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProductListing from '..';

const products = [
  {
    id: 0,
    title: 'test',
    price: 11,
    rating: 1.1,
    img: '',
  },
  {
    id: 2,
    title: 'test2',
    price: 22,
    rating: 2.2,
    img: '',
  },
  {
    id: 3,
    title: 'test3',
    price: 33,
    rating: 3.3,
    img: '',
  },
];

describe('Product listing', () => {
  it('should render with products', () => {
    render(<ProductListing products={products} />, { wrapper: BrowserRouter });
    expect(document.body).toMatchSnapshot();
  });

  it('should render without products', () => {
    render(<ProductListing />, { wrapper: BrowserRouter });
    expect(document.body).toMatchSnapshot();
  });
});
