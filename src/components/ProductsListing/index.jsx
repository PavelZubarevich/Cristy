import PropTypes from 'prop-types';
import ProductCard from '../product/ProductCard';
import './styles.scss';

function ProductsListing({ products }) {
  return (
    <ul className="productsListing">
      {
        products?.length > 0 && products.map((elem) => (
          <li key={elem.id} className="productsListing__product">
            <ProductCard
              id={elem.id}
              title={elem.title}
              price={elem.price}
              rating={elem.rating}
              img={elem.thumbnail}
            />
          </li>
        ))
      }
    </ul>
  );
}

export default ProductsListing;

ProductsListing.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    rating: PropTypes.number,
    price: PropTypes.number,
    image: PropTypes.string,
  })),
};

ProductsListing.defaultProps = {
  products: [],
};
