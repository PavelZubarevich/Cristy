import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IoArrowForward } from 'react-icons/io5';

function CarouselItem({
  title, description, linkText, image, route,
}) {
  return (
    <div className="carouselItem">
      <div className="carouselItem__content">
        <h2 className="carouselItem__title">{title}</h2>
        <p className="carouselItem__description">{description}</p>
        <Link to={route} className="carouselItem__link">
          {linkText}
          <IoArrowForward />
        </Link>
      </div>
      <div className="carouselItem__image">
        <img src={image} alt={title} />
      </div>
    </div>
  );
}

export default CarouselItem;

CarouselItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  linkText: PropTypes.string,
  image: PropTypes.string,
  route: PropTypes.string,
};

CarouselItem.defaultProps = {
  title: '',
  description: '',
  linkText: '',
  image: '',
  route: '',
};
