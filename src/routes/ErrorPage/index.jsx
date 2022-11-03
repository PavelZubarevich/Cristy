import { useRouteError } from 'react-router-dom';
import { Header, Footer } from '../../components';
import './styles.scss';

function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <div className="errorPage">
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
      </main>
      <Footer />
    </div>

  );
}

export default ErrorPage;
