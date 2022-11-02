import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { IoChevronForwardCircleOutline, IoChevronBackCircleOutline } from 'react-icons/io5';
import CarouselItem from './components/CarouselItem';
import './styles.scss';

const items = [
  {
    id: 1,
    title: 'New Arrivals',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed  minim eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad veniam, quis nostrud.',
    linkText: 'View Collection',
    route: '/products/category/smartphones',
    image: 'https://caviar-phone.ru/uploads/promo/20221001/max_violet/01.png',
  },
  {
    id: 2,
    title: 'IPhone 9 ',
    description: 'Ut enim ad veniam, quis nostrud. exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
    linkText: 'View product',
    route: '/products/1',
    image: 'https://caviar-phone.ru/uploads/promo/20221001/max_violet/01.png',
  },
  {
    id: 3,
    title: 'New 2',
    description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
    linkText: 'view Collection',
    route: '/products/category/motorcycle',
    image: 'https://caviar-phone.ru/uploads/promo/20221001/max_violet/01.png',
  },
];

function BannerCarousel() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className="bannerCarousel">
      <div className="bannerCarousel__container">
        <button type="button" ref={navigationPrevRef} className="bannerCarousel__controls">
          <IoChevronBackCircleOutline />
        </button>
        <Swiper
          slidesPerView={1}
          loop
          modules={[Navigation]}
          autoHeight
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper) => {
            // eslint-disable-next-line
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            // eslint-disable-next-line
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
        >
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="container">
                <CarouselItem
                  title={item.title}
                  description={item.description}
                  linkText={item.linkText}
                  image={item.image}
                  route={item.route}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button type="button" ref={navigationNextRef} className="bannerCarousel__controls">
          <IoChevronForwardCircleOutline />
        </button>
      </div>
    </div>
  );
}

export default BannerCarousel;
