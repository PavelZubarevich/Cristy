import { render } from '@testing-library/react';
import ProductRating from '..';

describe('Product rating', () => {
  it('displays with rating 0', () => {
    render(<ProductRating rating={0} />);
    expect(document.bodym).toMatchSnapshot();
  });

  it('displays with rating 0.1', () => {
    render(<ProductRating rating={0.1} />);
    expect(document.body).toMatchSnapshot();
  });

  it('displays with rating 0.4', () => {
    render(<ProductRating rating={0.4} />);
    expect(document.body).toMatchSnapshot();
  });

  it('displays with rating 0.6', () => {
    render(<ProductRating rating={0.6} />);
    expect(document.body).toMatchSnapshot();
  });

  it('displays with rating 0.9', () => {
    render(<ProductRating rating={0.9} />);
    expect(document.body).toMatchSnapshot();
  });

  it('displays with rating 3.34', () => {
    render(<ProductRating rating={3.34} />);
    expect(document.body).toMatchSnapshot();
  });

  it('displays with rating 4.71', () => {
    render(<ProductRating rating={4.71} />);
    expect(document.body).toMatchSnapshot();
  });

  it('displays with rating 5', () => {
    render(<ProductRating rating={5} />);
    expect(document.body).toMatchSnapshot();
  });
});
