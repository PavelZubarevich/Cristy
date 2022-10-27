import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';

function HeaderDropDown({ title, children }) {
  const [show, setShow] = useState(false);
  const ref = useRef();

  const handleButtonClick = () => {
    setShow((prev) => !prev);
  };

  const closeDropDown = (e) => {
    if (e.target.closest('.headerDropDown') !== ref.current)setShow(false);
  };

  useEffect(() => {
    document.addEventListener('click', closeDropDown);

    return () => {
      document.removeEventListener('click', closeDropDown);
    };
  }, []);

  return (
    <div className="headerDropDown" ref={ref}>
      <button type="button" className={`headerDropDown__title ${show ? 'active' : ''}`} onClick={handleButtonClick} aria-haspopup="true" aria-expanded={show}>{title}</button>
      {show && <div className="headerDropDown__content">{children}</div>}
    </div>
  );
}

export default HeaderDropDown;

HeaderDropDown.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

HeaderDropDown.defaultProps = {
  title: 'Default title',
};
