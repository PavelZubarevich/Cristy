import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../components';

function Root() {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Root;
