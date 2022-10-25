import PropTypes from 'prop-types';
import './styles.scss';

function Button({
  text, variant, color, className, size,
}) {
  return (
    <button type="button" className={`button button_${size} button_${variant} button_${variant}_${color} ${className}`}>{text}</button>
  );
}

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['contained', 'text']),
  color: PropTypes.oneOf(['primary', 'primaryText']),
  className: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'lg']),
};

Button.defaultProps = {
  variant: 'primary',
  color: 'primary',
  className: '',
  size: 'lg',
};
