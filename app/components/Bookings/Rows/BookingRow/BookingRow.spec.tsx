import { render, waitFor } from '@testing-library/react';
import BookingRow from './BookingRow';
import { TableCell, TableRow } from '@/components/ui/table';
import { format } from 'date-fns';
import { getData } from './helpers';
import { BookingType } from '../Rows';

jest.mock('@/components/ui/table', () => ({
  TableCell: ({ children }: { children: React.ReactNode }) => (
    <td>{children}</td>
  ),
  TableRow: ({ children }: { children: React.ReactNode }) => (
    <tr>{children}</tr>
  ),
}));

jest.mock('./helpers', () => ({
  getData: jest.fn(),
}));

describe('BookingRow', () => {
  const mockBooking: BookingType = {
    id: '1',
    bookingdate: '2022-01-01',
    user: 'User 1',
    parc: 'Parc 1',
    comments: 'Comment 1',
  };

  beforeEach(() => {
    (getData as jest.Mock).mockResolvedValue({
      parc: mockBooking.parc,
      user: mockBooking.user,
      userErrors: [],
      parcErrors: [],
    });
  });

  it('renders booking data', async () => {
    const { getByText } = render(await BookingRow({ booking: mockBooking }));

    await waitFor(() => {
      expect(
        getByText(
          format(new Date(mockBooking.bookingdate), 'dd-MMM-yy @ hh:mm a')
        )
      ).toBeInTheDocument();
      expect(getByText(mockBooking.user)).toBeInTheDocument();
      expect(getByText(mockBooking.parc)).toBeInTheDocument();
      expect(getByText(mockBooking.comments)).toBeInTheDocument();
    });
  });

  it('renders error messages when there are user or parc errors', async () => {
    const mockErrors = ['Error 1'];
    (getData as jest.Mock).mockResolvedValueOnce({
      parc: mockBooking.parc,
      user: mockBooking.user,
      userErrors: mockErrors,
      parcErrors: mockErrors,
    });

    const { getAllByText } = render(await BookingRow({ booking: mockBooking }));

    await waitFor(() => {
      mockErrors.forEach((error) => {
        expect(getAllByText(error)).toHaveLength(2);
      });
    });
  });
});
