import {
  IoStar, IoStarHalfOutline, IoStarOutline,
} from 'react-icons/io5';
import PropTypes from 'prop-types';
import './styles.scss';

function ProductRating({ rating }) {
  return (
    <div className="productRating">
      {[...Array(5)].map((e, i) => {
        if (i + 1 <= rating || i + 1 - rating <= 0.3) return <IoStar key={Math.random()} className="productRating__star" />;
        if ((i + 1 - rating) <= 0.7 && (i + 1 - rating) >= 0.3) return <IoStarHalfOutline key={Math.random()} className="productRating__star" />;
        return <IoStarOutline key={Math.random()} className="productRating__star" />;
      })}
    </div>
  );
}

export default ProductRating;

ProductRating.propTypes = {
  rating: PropTypes.number,
};

ProductRating.defaultProps = {
  rating: 0,
};
