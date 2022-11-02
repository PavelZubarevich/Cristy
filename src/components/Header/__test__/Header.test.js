import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Header from '..';
import HeaderDropDown from '../components/HeaderDropDown';
import HeaderTop from '../components/HeaderTop';
import HeaderBottom from '../components/HeaderBottom';

const mockChangeLanguage = jest.fn();

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (str) => str,
    i18n: {
      changeLanguage: mockChangeLanguage,
      options: {
        supportedLngs: ['ru', 'en', 'cimode'],
      },
      language: 'ru',
    },
  }),
}));

describe('Header', () => {
  it('header is rendered', () => {
    render(<Header />, { wrapper: BrowserRouter });
  });
});

describe('Header top', () => {
  it('header top is rendered', () => {
    render(<HeaderTop />, { wrapper: BrowserRouter });
    expect(document.body).toMatchSnapshot();
  });

  it('header top is', () => {
    render(<HeaderTop />, { wrapper: BrowserRouter });
    userEvent.click(screen.getByText('ru'));
    userEvent.click(screen.getByText('en'));
    expect(mockChangeLanguage).toBeCalledWith('en');
  });
});

describe('Header bottom', () => {
  it('header is rendered', () => {
    render(<HeaderBottom />, { wrapper: BrowserRouter });
  });
});

describe('Header dropdown', () => {
  it('dropdown is renders', () => {
    render(<HeaderDropDown>test</HeaderDropDown>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('dropdown renders with default title', () => {
    render(<HeaderDropDown>test</HeaderDropDown>);
    expect(screen.getByText(/Default title/i)).toBeInTheDocument();
  });

  it('dropdown renders with title', () => {
    render(<HeaderDropDown title="my title">test</HeaderDropDown>);
    expect(screen.getByText(/my title/i)).toBeInTheDocument();
  });

  it('dropdown works', () => {
    render(<HeaderDropDown title="my title">test</HeaderDropDown>);
    userEvent.click(screen.getByRole('button'));
    expect(screen.getByText(/test/i)).toBeInTheDocument();
    userEvent.click(screen.getByRole('button'));
    expect(screen.queryByText(/test/i)).not.toBeInTheDocument();
  });

  it('dropdown closes on click outside', () => {
    render(<HeaderDropDown title="my title">test</HeaderDropDown>);
    userEvent.click(screen.getByRole('button'));
    expect(screen.getByText(/test/i)).toBeInTheDocument();
    userEvent.click(document.body);
    expect(screen.queryByText(/test/i)).not.toBeInTheDocument();
  });
});
