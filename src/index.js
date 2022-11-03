import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import './i18n';
import 'swiper/swiper-bundle.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import {
  ErrorPage, Root, HomePage, ProductListingPage,
} from './routes';
import { loader as homeLoader } from './routes/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: homeLoader,
      },
      {
        path: '/products',
        element: <ProductListingPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
