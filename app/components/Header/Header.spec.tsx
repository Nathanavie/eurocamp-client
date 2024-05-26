import { render } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('renders the header', () => {
    const { getByText } = render(<Header />);

    expect(getByText('Eurocamp')).toBeInTheDocument();
  });
});
