import { render, fireEvent } from '@testing-library/react';
import HeaderTabs from './HeaderTabs';
import { TabsList, TabsTrigger } from '@/components/ui/tabs';

jest.mock('@/components/ui/tabs', () => ({
  TabsList: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  TabsTrigger: ({
    children,
    onClick,
  }: {
    children: React.ReactNode;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  }) => <button onClick={onClick}>{children}</button>,
}));

describe('HeaderTabs', () => {
  const pushStateSpy = jest.spyOn(window.history, 'replaceState');

  afterEach(() => {
    pushStateSpy.mockClear();
  });

  it('renders tabs', () => {
    const { getByText } = render(<HeaderTabs />);

    expect(getByText('Users')).toBeInTheDocument();
    expect(getByText('Parcs')).toBeInTheDocument();
    expect(getByText('Bookings')).toBeInTheDocument();
  });

  it('updates the URL when a tab is clicked', () => {
    const { getByText } = render(<HeaderTabs />);

    fireEvent.click(getByText('Users'));
    expect(pushStateSpy).toHaveBeenCalledWith(null, '', '?section=users');

    fireEvent.click(getByText('Parcs'));
    expect(pushStateSpy).toHaveBeenCalledWith(null, '', '?section=parcs');

    fireEvent.click(getByText('Bookings'));
    expect(pushStateSpy).toHaveBeenCalledWith(null, '', '?section=bookings');
  });
});
