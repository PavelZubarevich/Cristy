import {
  RouterProvider,
  createMemoryRouter,
} from 'react-router-dom';
import {
  render,
  waitFor,
  screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HomeCollection from '..';

const mockedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
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

describe('HomeCollection', () => {
  it('should render component', async () => {
    const fakeData = [];
    const routes = [
      {
        path: '/',
        element: <HomeCollection />,
        loader: () => ({ products: fakeData }),
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
      initialIndex: 1,
    });

    render(<RouterProvider router={router} />);
    await waitFor(() => screen.getByRole('heading'));
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  it('should render products', async () => {
    const fakeData = [{
      id: 1,
      title: 'title',
      rating: 10,
      price: 10,
      image: '',
    },
    {
      id: 2,
      title: 'title',
      rating: 20,
      price: 20,
      image: '',
    }];
    const routes = [
      {
        path: '/',
        element: <HomeCollection />,
        loader: () => ({ products: fakeData }),
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
      initialIndex: 1,
    });

    render(<RouterProvider router={router} />);
    await waitFor(() => screen.getAllByRole('heading'));
    expect(document.body).toMatchSnapshot();
  });

  it('should handle viewAllProducts button click', async () => {
    const fakeLoader = [];
    const routes = [
      {
        path: '/',
        element: <HomeCollection />,
        loader: () => fakeLoader,
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
      initialIndex: 1,
    });

    render(<RouterProvider router={router} />);
    await waitFor(() => screen.getByRole('button'));

    userEvent.click(screen.getByRole('button'));
    expect(mockedNavigate).toBeCalledWith('/products');
  });
});
