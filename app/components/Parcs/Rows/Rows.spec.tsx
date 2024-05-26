import { render, fireEvent } from '@testing-library/react';
import Rows, { ParcType } from './Rows';
import revalidateCacheFromTag from '@/app/actions';
import userEvent from '@testing-library/user-event';

jest.mock('@/app/actions', () => jest.fn());

describe('Rows', () => {
  const mockData: ParcType[] = [
    { id: 1, name: 'Parc 1', description: 'Description 1' },
    { id: 2, name: 'Parc 2', description: 'Description 2' },
  ];

  it('renders parc data when there are no errors', () => {
    const { getByText } = render(<Rows errors={[]} data={mockData} />);

    mockData.forEach((parc) => {
      expect(getByText(parc.name)).toBeInTheDocument();
      expect(getByText(parc.description)).toBeInTheDocument();
    });
  });

  it('renders errors when there are errors', () => {
    const mockErrors = ['Error 1', 'Error 2'];
    const { getByText } = render(<Rows errors={mockErrors} data={[]} />);

    mockErrors.forEach((error) => {
      expect(getByText(error)).toBeInTheDocument();
    });
  });

  it('calls revalidateCacheFromTag when the Retry button is clicked', async () => {
    const user = userEvent.setup();
    const mockErrors = ['Error 1'];
    const { getByText } = render(<Rows errors={mockErrors} data={[]} />);

    await user.click(getByText('Retry'));

    expect(revalidateCacheFromTag).toHaveBeenCalledWith('parcs');
  });
});
