import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../components';

function Root() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Root;
