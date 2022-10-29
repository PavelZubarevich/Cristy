import { useLoaderData } from 'react-router-dom';
import ProductCard from '../product/ProductCard';
import './styles.scss';

function ProductsListing() {
  const { products } = useLoaderData();

  return (
    <ul className="productsListing">
      {
        products?.length && products.map((elem) => (
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
