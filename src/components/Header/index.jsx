import HeaderBottom from './components/HeaderBottom';
import HeaderTop from './components/HeaderTop';
import './styles.scss';

function Header() {
  return (
    <header className="header">
      <HeaderTop />
      <HeaderBottom />
    </header>
  );
}

export default Header;
