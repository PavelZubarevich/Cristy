import { IoCartOutline, IoSearchOutline } from 'react-icons/io5';

function HeaderBottom() {
  return (
    <div className="header__bottom container">
      <div className="burger">
        <span />
      </div>
      <div className="header__logo">Cristy</div>
      <div className="header__buttons">
        <IoCartOutline className="header__cart" />
        <IoSearchOutline className="header__search" />
      </div>
    </div>
  );
}

export default HeaderBottom;
