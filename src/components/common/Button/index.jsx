import PropTypes from 'prop-types';
import './styles.scss';

function Button({
  variant, color, className, size, onClick, children,
}) {
  return (
    <button type="button" onClick={onClick} className={`button button_${size} button_${variant} button_${variant}_${color} ${className}`.trim()}>{children}</button>
  );
}

export default Button;

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  variant: PropTypes.oneOf(['contained', 'text', 'icon', 'outlined']),
  color: PropTypes.oneOf(['primary', 'primaryText', 'white']),
  className: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'lg']),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  children: '',
  variant: 'contained',
  color: 'primary',
  className: '',
  size: 'lg',
  onClick: () => {},
};
