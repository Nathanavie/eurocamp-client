import { render, fireEvent } from '@testing-library/react';
import Rows, { UserType } from './Rows';
import revalidateCacheFromTag from '@/app/actions';

jest.mock('@/app/actions', () => jest.fn());

describe('Rows', () => {
  const mockData: UserType[] = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com' },
  ];

  it('renders user data when there are no errors', () => {
    const { getByText } = render(<Rows errors={[]} data={mockData} />);

    mockData.forEach((user) => {
      expect(getByText(user.name)).toBeInTheDocument();
      expect(getByText(user.email)).toBeInTheDocument();
    });
  });

  it('renders errors when there are errors', () => {
    const mockErrors = ['Error 1', 'Error 2'];
    const { getByText } = render(<Rows errors={mockErrors} data={[]} />);

    mockErrors.forEach((error) => {
      expect(getByText(error)).toBeInTheDocument();
    });
  });

  it('calls revalidateCacheFromTag when the Retry button is clicked', () => {
    const mockErrors = ['Error 1'];
    const { getByText } = render(<Rows errors={mockErrors} data={[]} />);

    fireEvent.click(getByText('Retry'));

    expect(revalidateCacheFromTag).toHaveBeenCalledWith('users');
  });
});
