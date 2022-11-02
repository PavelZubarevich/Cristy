import { render } from '@testing-library/react';
import Footer from '..';
import FooterTop from '../components/FooterTop';
import FooterBottom from '../components/FooterBottom';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (str) => str,
    i18n: {
      changeLanguage: () => new Promise(() => { }),
      options: {
        supportedLngs: ['ru', 'en'],
      },
    },
  }),
}));

describe('Footer', () => {
  it('Footer rendered', () => {
    render(<Footer />);
    expect(document.body).toMatchSnapshot();
  });
});

describe('Footer top', () => {
  it('Footer rendered', () => {
    render(<FooterTop />);
    expect(document.body).toMatchSnapshot();
  });
});

describe('Footer bottom', () => {
  it('Footer rendered', () => {
    render(<FooterBottom />);
    expect(document.body).toMatchSnapshot();
  });
});
