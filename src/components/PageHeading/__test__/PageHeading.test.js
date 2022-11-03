import { render, waitFor, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import PageHeading from '..';

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

describe('PageHeading', () => {
  it('should render component heading', async () => {
    const routes = [
      {
        path: '/products',
        element: <PageHeading title="test" />,
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ['/', '/products'],
      initialIndex: 1,
    });

    render(<RouterProvider router={router} />);
    await waitFor(() => screen.getAllByRole('heading'));
    expect(screen.getByText(/test/i)).toBeInTheDocument();
  });

  it('should render home heading', async () => {
    const routes = [
      {
        path: '/',
        element: <PageHeading title="home" />,
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
      initialIndex: 0,
    });

    render(<RouterProvider router={router} />);
    await waitFor(() => screen.getAllByRole('heading'));
    expect(screen.getByText(/HomeLabel/i)).toBeInTheDocument();
  });

  it('should render for any route', async () => {
    const routes = [
      {
        path: '/testRoute',
        element: <PageHeading title="test" />,
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ['/testRoute'],
      initialIndex: 0,
    });

    render(<RouterProvider router={router} />);
    await waitFor(() => screen.getAllByRole('heading'));
    expect(screen.getByText(/testRoute/i)).toBeInTheDocument();
  });
});
