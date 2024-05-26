import { render, screen } from '@testing-library/react';
import Home from './page';

jest.mock('@/components/ui/tabs', () => ({
  Tabs: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  TabsContent: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

jest.mock('./components/Bookings/Bookings', () => () => <div>Bookings</div>);
jest.mock('./components/Parcs/Parcs', () => () => <div>Parcs</div>);
jest.mock('./components/Users/Users', () => () => <div>Users</div>);
jest.mock('./components/Tabs/HeaderTabs', () => () => <div>HeaderTabs</div>);

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
