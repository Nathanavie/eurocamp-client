import { render, fireEvent } from '@testing-library/react';
import DialogComponent from './Dialog';
import { UserType } from '../Rows/Rows';

jest.mock('@/components/ui/dialog', () => ({
  Dialog: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  DialogTrigger: ({ children }: { children: React.ReactNode }) => (
    <button>{children}</button>
  ),
  DialogContent: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  DialogHeader: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  DialogTitle: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  DialogDescription: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

describe('DialogComponent', () => {
  const mockUser: UserType = {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
  };

  it('renders user data', () => {
    const { getByText } = render(<DialogComponent user={mockUser} />);

    expect(getByText(mockUser.name)).toBeInTheDocument();
    expect(getByText(mockUser.email)).toBeInTheDocument();
  });

  it('opens the dialog when the trigger is clicked', () => {
    const { getByRole, getByText } = render(
      <DialogComponent user={mockUser} />
    );

    fireEvent.click(getByRole('button'));

    expect(getByText(mockUser.name)).toBeInTheDocument();
    expect(getByText(mockUser.email)).toBeInTheDocument();
  });
});
