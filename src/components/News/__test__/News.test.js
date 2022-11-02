import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import News from '..';
import NewsItem from '../components/NewsItem';
import { getLastNews } from '../../../api/news';

const news = [
  {
    id: 1,
    title: 'Get 20% OFF on Nike Air Uomo',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut',
    date: '2022-10-30T16:31:00Z',
    image: 'https://as2.ftcdn.net/v2/jpg/04/19/14/17/1000_F_419141782_2mv5HVpvCW4IbixYdJOasaUZfQVfaMAS.jpg',
  },
  {
    id: 2,
    title: 'Get 20% OFF on Nike Air Uomo',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut',
    date: '2022-09-30T16:31:00Z',
    image: 'https://as2.ftcdn.net/v2/jpg/04/19/14/17/1000_F_419141782_2mv5HVpvCW4IbixYdJOasaUZfQVfaMAS.jpg',
  },
  {
    id: 3,
    title: 'Get 20% OFF on Nike Air Uomo',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut',
    date: '2022-08-30T16:31:00Z',
    image: 'https://as2.ftcdn.net/v2/jpg/04/19/14/17/1000_F_419141782_2mv5HVpvCW4IbixYdJOasaUZfQVfaMAS.jpg',
  },
];

jest.mock('../../../api/news', () => ({
  getLastNews: jest.fn(),
}));

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (str) => str,
    i18n: {
      changeLanguage: () => new Promise(() => { }),
      options: {
        supportedLngs: ['ru', 'en', 'cimode'],
      },
    },
  }),
}));

describe('News', () => {
  it('should render with news', () => {
    getLastNews.mockImplementation(() => news);
    render(
      <News />,
      { wrapper: BrowserRouter },
    );
    expect(document.body).toMatchSnapshot();
  });

  it('should render without news', () => {
    getLastNews.mockImplementation(() => []);
    render(
      <News />,
      { wrapper: BrowserRouter },
    );
    expect(document.body).toMatchSnapshot();
  });
});

describe('News item', () => {
  it('should render news item', () => {
    render(
      <NewsItem
        id={1}
        title="title"
        description="description"
        image=""
        date="2022-09-30T16:31:00Z"
      />,
      { wrapper: BrowserRouter },
    );
    expect(document.body).toMatchSnapshot();
  });
});
