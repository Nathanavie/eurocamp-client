import { render, fireEvent } from '@testing-library/react';
import ErrorRow from './ErrorRow';
import revalidateCacheFromTag from '@/app/actions';

jest.mock('@/app/actions', () => jest.fn());
jest.mock('../../../../../components', () => ({
  Button: ({
    children,
    onClick,
  }: {
    children: React.ReactNode;
    onClick: () => void;
  }) => <button onClick={onClick}>{children}</button>,
  TableCell: ({ children }: { children: React.ReactNode }) => (
    <td>{children}</td>
  ),
  TableRow: ({ children }: { children: React.ReactNode }) => (
    <tr>{children}</tr>
  ),
}));

describe('ErrorRow', () => {
  const mockError = 'Error 1';

  it('renders error message', () => {
    const { getByText } = render(<ErrorRow error={mockError} />);

    expect(getByText(mockError)).toBeInTheDocument();
  });

  it('calls revalidateCacheFromTag when the Retry button is clicked', () => {
    const { getByText } = render(<ErrorRow error={mockError} />);

    fireEvent.click(getByText('Retry'));

    expect(revalidateCacheFromTag).toHaveBeenCalledWith('bookings');
  });
});
