import { render, screen } from '@testing-library/react';
import Home from './page';

jest.mock('@/components/ui/tabs', () => ({
  Tabs: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  TabsContent: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));
jest.mock('./components/Bookings/Bookings', () => {
  const MockBookings = () => <div>Bookings</div>;
  MockBookings.displayName = 'MockBookings';
  return MockBookings;
});

jest.mock('./components/Parcs/Parcs', () => {
  const MockParcs = () => <div>Parcs</div>;
  MockParcs.displayName = 'MockParcs';
  return MockParcs;
});

jest.mock('./components/Users/Users', () => {
  const MockUsers = () => <div>Users</div>;
  MockUsers.displayName = 'MockUsers';
  return MockUsers;
});

jest.mock('./components/Tabs/HeaderTabs', () => {
  const MockHeaderTabs = () => <div>HeaderTabs</div>;
  MockHeaderTabs.displayName = 'MockHeaderTabs';
  return MockHeaderTabs;
});

describe('Home', () => {
  it('renders correctly', () => {
    render(<Home searchParams={{ section: 'parcs' }} />);

    expect(screen.getByText('Users')).toBeInTheDocument();
    expect(screen.getByText('Parcs')).toBeInTheDocument();
    expect(screen.getByText('Bookings')).toBeInTheDocument();
  });
  it('renders correctly with no section passed', () => {
    render(<Home searchParams={{ section: undefined }} />);

    expect(screen.getByText('Users')).toBeInTheDocument();
    expect(screen.getByText('Parcs')).toBeInTheDocument();
    expect(screen.getByText('Bookings')).toBeInTheDocument();
  });
});
