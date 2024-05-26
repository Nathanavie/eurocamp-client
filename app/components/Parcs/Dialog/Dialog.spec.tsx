import { render } from '@testing-library/react';
import DialogComponent from './Dialog';
import { DialogContent } from '@/components/ui/dialog';
import { ParcType } from '../Rows/Rows';

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
  const mockParc: ParcType = {
    id: 1,
    name: 'Parc 1',
    description: 'Description 1',
  };

  it('renders parc data', () => {
    const { getByText } = render(<DialogComponent parc={mockParc} />);

    expect(getByText(mockParc.name)).toBeInTheDocument();
    expect(getByText(mockParc.description)).toBeInTheDocument();
  });
});
