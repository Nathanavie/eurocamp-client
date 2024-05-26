import { render, screen } from '@testing-library/react';
import Users from './Users';

jest.mock('@/components/ui/tabs', () => ({
  Table: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  TableBody: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  TableCaption: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  TableHead: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  TableHeader: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  TableRow: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

jest.mock('./Rows/Rows', () => {
  const MockRows = () => (
    <tr>
      <td>Mocked Row</td>
    </tr>
  );
  MockRows.displayName = 'MockRows';
  return MockRows;
});

jest.mock('./helpers', () => ({
  getData: async () => ({
    data: [{ name: 'John Doe', email: 'johnDoe@example.com' }],
    errors: [],
  }),
}));

describe('Users', () => {
  it('renders without crashing', async () => {
    render(await Users());
    expect(await screen.findByText('All available users.')).toBeInTheDocument();
    expect(screen.getByText('Mocked Row')).toBeInTheDocument();
  });
});
