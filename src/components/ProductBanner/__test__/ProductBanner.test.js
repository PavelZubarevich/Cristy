import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import ProductBanner from '..';

const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockedNavigate,
}));

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (str) => str,
    i18n: {
      changeLanguage: () => new Promise(() => { }),
      options: {
        supportedLngs: ['ru', 'en', 'cimode'],
      },
    },
  }),
}));

describe('ProductBanner', () => {
  it('should render product banner', () => {
    render(
      <ProductBanner
        title="title"
        description="description"
        image=""
        route="testroute/1"
      />,
      { wrapper: BrowserRouter },
    );

    expect(document.body).toMatchSnapshot();
  });

  it('should render reversed product banner', () => {
    render(
      <ProductBanner
        title="title"
        description="description"
        image=""
        route="testroute/1"
        reversed
      />,
      { wrapper: BrowserRouter },
    );

    expect(document.body).toMatchSnapshot();
  });

  it('should handle navagate to product page', () => {
    render(
      <ProductBanner
        title="title"
        description="description"
        image=""
        route="testroute/1"
        reversed
      />,
      { wrapper: BrowserRouter },
    );

    userEvent.click(screen.getByRole('button', { text: /BuyNowLabel/i }));

    expect(mockedNavigate).toHaveBeenCalledTimes(1);
    expect(mockedNavigate).toHaveBeenCalledWith('testroute/1');
  });
});
