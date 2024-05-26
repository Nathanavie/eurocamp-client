import { render } from '@testing-library/react';
import Parcs from './Parcs';
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

describe('Parcs', () => {
  const mockData = [
    { id: 1, name: 'Parc 1', description: 'Description 1' },
    { id: 2, name: 'Parc 2', description: 'Description 2' },
  ];

  beforeEach(() => {
    (getData as jest.Mock).mockResolvedValue({
      data: mockData,
      errors: [],
    });
  });

  it('renders without crashing', async () => {
    const { findByText } = render(await Parcs());

    expect(await findByText('All Parcs.')).toBeInTheDocument();
    expect(await findByText('Mocked Row')).toBeInTheDocument();
  });
});
