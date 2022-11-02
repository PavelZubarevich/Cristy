import PropTypes from 'prop-types';
import './styles.scss';
import { IoEye, IoBagHandleOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import Button from '../../common/Button';
import ProductRating from '../ProductRating';

function ProductCard({
  id, title, price, rating, img,
}) {
  const navigate = useNavigate();

  const handleOpenProduct = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="productCard">
      <div className="productCard__image">
        <img src={img} alt={title} />
      </div>
      <div className="productCard__content">
        <h3 className="productCard__title">{title}</h3>
        <div className="productCard__price">
          $
          {price}
        </div>
        <div className="productCard__rating">
          <ProductRating rating={rating} />
        </div>
        <div className="productCard__hover">
          <Button variant="icon" color="primary" onClick={handleOpenProduct}><IoEye /></Button>
          <Button variant="icon" color="white" onClick={() => {}}><IoBagHandleOutline /></Button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  price: PropTypes.number,
  rating: PropTypes.number,
  img: PropTypes.string,
};

ProductCard.defaultProps = {
  title: '',
  price: 0,
  rating: 0,
  img: '',
};
