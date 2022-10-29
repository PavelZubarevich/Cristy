import { IoCartOutline, IoSearchOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

function HeaderBottom() {
  return (
    <div className="header__bottom container">
      <div className="burger">
        <span />
      </div>
      <h1 className="header__logo"><Link to="/">Cristy</Link></h1>
      <div className="header__buttons">
        <IoCartOutline className="header__cart" />
        <IoSearchOutline className="header__search" />
      </div>
    </div>
  );
}

export default HeaderBottom;
