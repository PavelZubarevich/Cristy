import { useTranslation } from 'react-i18next';
import { useNavigate, useLoaderData } from 'react-router-dom';
import ProductsListing from '../ProductsListing';
import Button from '../common/Button';
import './styles.scss';

function HomeCollection() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { products } = useLoaderData();

  const handleViewProducts = () => {
    navigate('/products');
  };

  return (
    <div className="homeCollection">
      <div className="container">
        <div className="homeCollection__collection">
          <h2 className="homeCollection__collectionLabel">{t('OurCollectionsLabel')}</h2>
          <p className="homeCollection__collectionText">{t('ColectionDescriptionText')}</p>
          <div className="homeCollection__listing">
            <ProductsListing products={products} />
          </div>
          <Button variant="outlined" onClick={handleViewProducts}>{t('ViewAllProductsLabel')}</Button>
        </div>
      </div>

    </div>
  );
}

export default HomeCollection;
