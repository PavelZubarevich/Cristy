import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { ErrorPage, Root, Home } from './routes';
import './i18n';
import { loader as homeLoader } from './routes/home';
import 'swiper/swiper-bundle.min.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader,
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
