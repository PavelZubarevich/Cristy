import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '..';

describe('Button', () => {
  describe('button contained', () => {
    it('should render large primary button', () => {
      render(<Button
        variant="contained"
      />);
      expect(document.body).toMatchSnapshot();
    });
    it('should render small primary button', () => {
      render(<Button
        variant="contained"
        size="sm"
      />);
      expect(document.body).toMatchSnapshot();
    });
  });
  describe('button text', () => {
    it('should render large primary button', () => {
      render(<Button
        variant="text"
      />);
      expect(document.body).toMatchSnapshot();
    });

    it('should render small primary button', () => {
      render(<Button
        variant="text"
        size="sm"
      />);
      expect(document.body).toMatchSnapshot();
    });

    it('should render large primaryText button', () => {
      render(<Button
        variant="text"
      />);
      expect(document.body).toMatchSnapshot();
    });

    it('should render small primaryText button', () => {
      render(<Button
        variant="text"
        size="sm"
      />);
      expect(document.body).toMatchSnapshot();
    });
  });
  describe('button icon', () => {
    it('should render primary button', () => {
      render(<Button
        variant="icon"
      />);
      expect(document.body).toMatchSnapshot();
    });

    it('should render white button', () => {
      render(<Button
        variant="icon"
        color="white"
      />);
      expect(document.body).toMatchSnapshot();
    });
  });
  describe('button outlined', () => {
    it('should render button', () => {
      render(<Button
        variant="outlined"
      />);
      expect(document.body).toMatchSnapshot();
    });
  });

  it('should handle click', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} />);
    userEvent.click(screen.getByRole('button'));
    expect(handleClick).toBeCalledTimes(1);
  });

  it('should be default onCkick handler', () => {
    expect(Button.defaultProps.onClick()).toBe(undefined);
  });
});
