import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CarouselItem from '../components/CarouselItem';

describe('CarouselItem', () => {
  it('should render carousel item', () => {
    render(
      <CarouselItem
        title="title"
        description="description"
        linkText="link text"
        image=""
        route="/test"
      />,
      { wrapper: BrowserRouter },
    );
    expect(document.body).toMatchSnapshot();
  });
});
