import { render } from '@testing-library/react';
import Bookings from './Bookings';
import Rows from './Rows/Rows';
import { getData } from './helpers';

jest.mock('./helpers', () => ({
  getData: jest.fn(),
}));

jest.mock('./Rows/Rows', () =>
  jest.fn(() => (
    <tr>
      <td>Mocked Row</td>
    </tr>
  ))
);

describe('Bookings', () => {
  const mockData = [
    {
      id: 1,
      date: '2022-01-01',
      user: 'User 1',
      parc: 'Parc 1',
      comments: 'Comment 1',
    },
    {
      id: 2,
      date: '2022-01-02',
      user: 'User 2',
      parc: 'Parc 2',
      comments: 'Comment 2',
    },
  ];

  beforeEach(() => {
    (getData as jest.Mock).mockResolvedValue({
      data: mockData,
      errors: [],
    });
  });

  it('renders without crashing', async () => {
    const { findByText } = render(await Bookings());

    expect(await findByText('All Bookings.')).toBeInTheDocument();
    expect(await findByText('Mocked Row')).toBeInTheDocument();
  });
});
