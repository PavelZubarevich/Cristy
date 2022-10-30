import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import './styles.scss';

function ProductBanner({
  title, description, image, route, reversed,
}) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(route);
  };

  return (
    <div className="productBanner">
      <div className="container">
        <div className={`productBanner__body ${reversed ? 'reversed' : ''}`}>
          <div className="productBanner__content">
            <h2 className="productBanner__title">{title}</h2>
            <p className="productBanner__description">{description}</p>
            <Button variant="contained" color="primary" onClick={handleButtonClick}>
              Buy now
            </Button>
          </div>
          <div className="productBanner__image">
            <div className="productBanner__image">
              <img src={image} alt={title} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductBanner;

ProductBanner.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  route: PropTypes.string,
  reversed: PropTypes.bool,
};

ProductBanner.defaultProps = {
  title: '',
  description: '',
  image: '',
  route: '',
  reversed: false,
};
