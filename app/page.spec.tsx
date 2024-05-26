import { render, screen } from '@testing-library/react';
import Home from './page';

jest.mock('@/components/ui/tabs', () => ({
  Tabs: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  TabsContent: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

const MockBookings = () => <div>Bookings</div>;
MockBookings.displayName = 'MockBookings';
jest.mock('./components/Bookings/Bookings', () => MockBookings);

const MockParcs = () => <div>Parcs</div>;
MockParcs.displayName = 'MockParcs';
jest.mock('./components/Parcs/Parcs', () => MockParcs);

const MockUsers = () => <div>Users</div>;
MockUsers.displayName = 'MockUsers';
jest.mock('./components/Users/Users', () => MockUsers);

const MockHeaderTabs = () => <div>HeaderTabs</div>;
MockHeaderTabs.displayName = 'MockHeaderTabs';
jest.mock('./components/Tabs/HeaderTabs', () => MockHeaderTabs);

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
