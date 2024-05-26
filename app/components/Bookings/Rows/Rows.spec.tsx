import { render } from '@testing-library/react';
import Rows, { BookingType } from './Rows';

jest.mock('./BookingRow/BookingRow', () =>
  jest.fn(() => <div>Mocked BookingRow</div>)
);
jest.mock('./ErrorRow/ErrorRow', () =>
  jest.fn(() => <div>Mocked ErrorRow</div>)
);

describe('Rows', () => {
  const mockData: BookingType[] = [
    {
      id: '1',
      bookingdate: '2022-01-01',
      user: 'User 1',
      parc: 'Parc 1',
      comments: 'Comment 1',
    },
    {
      id: '2',
      bookingdate: '2022-01-02',
      user: 'User 2',
      parc: 'Parc 2',
      comments: 'Comment 2',
    },
  ];

  it('renders BookingRow components when there are no errors and there is data', () => {
    const { getAllByText } = render(<Rows errors={[]} data={mockData} />);

    expect(getAllByText('Mocked BookingRow')).toHaveLength(mockData.length);
  });

  it('renders ErrorRow components when there are errors', () => {
    const mockErrors = ['Error 1', 'Error 2'];
    const { getAllByText } = render(<Rows errors={mockErrors} data={[]} />);

    expect(getAllByText('Mocked ErrorRow')).toHaveLength(mockErrors.length);
  });
});
