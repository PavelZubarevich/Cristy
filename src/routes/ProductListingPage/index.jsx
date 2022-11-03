import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ProductsListing, PageHeading, Button,
} from '../../components';
import { getProducts } from '../../api/products';
import './styles.scss';

function ProductListingPage() {
  const { t } = useTranslation();

  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState({ limit: 20, skip: 0 });

  useEffect(() => {
    setLoading(true);
    getProducts(options.limit, options.skip)
      .then((data) => {
        setTotalProducts(data.total);
        setProducts(data.products);
        setLoading(false);
      });
  }, []);

  const loadMoreProducts = () => {
    getProducts(options.limit, options.skip + options.limit)
      .then((data) => {
        setProducts((prev) => [...prev, ...data.products]);
        setOptions((prev) => ({
          limit: prev.limit,
          skip: prev.skip + prev.limit,
        }));
      });
  };

  return (
    <div className="productListingPage">
      <div className="productListingPage__heading">
        <PageHeading title={t('AllProductsLabel')} />
      </div>
      <div className="container">
        <div className="productListingPage__listing">
          {loading ? (
            <div className="loading-spinner" />) : (
              <>
                <p className="productListingPage__summary">{t('ShowingOfTatalLabel', { products: products.length, total: totalProducts })}</p>
                <ProductsListing products={products} />
                <Button variant="outlined" onClick={loadMoreProducts}>{t('ViewMoreLabel')}</Button>
              </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductListingPage;
