import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import ProductCard from '..';

const mockedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigate,
}));

describe('Product card', () => {
  it('should render product card', () => {
    render(
      <ProductCard
        id={1}
        title="test title"
        price={30}
        rating={4.4}
        img=""
      />,
      { wrapper: BrowserRouter },
    );
    expect(document.body).toMatchSnapshot();
  });

  it('should handle navagate to product page', () => {
    render(
      <ProductCard
        id={1}
        title="test title"
        price={30}
        rating={4.4}
        img=""
      />,
      { wrapper: BrowserRouter },
    );
    userEvent.click(screen.getAllByRole('button')[0]);
    expect(mockedNavigate).toBeCalledWith('/product/1');
  });
});
