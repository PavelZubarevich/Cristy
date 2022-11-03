import {
  HomeCollection, BannerCarousel, ProductBanner, News,
} from '../../components';
import { getProducts } from '../../api/products';

export async function loader() {
  // 8 - number of items to display
  const data = await getProducts(8);
  return { products: data.products };
}

function HomePage() {
  return (
    <>
      <BannerCarousel />
      <HomeCollection />
      <ProductBanner
        title="2016 Apple The Best Classical"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
        route="/product"
        image="https://www.pngmart.com/files/15/Apple-iPhone-11-PNG-Image.png"
      />
      <News />
      <ProductBanner
        title="2016 Apple The Best Classical"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
        route="/product"
        image="https://www.pngmart.com/files/15/Apple-iPhone-11-PNG-Image.png"
        reversed
      />
    </>
  );
}

export default HomePage;
