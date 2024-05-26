// Loading.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import Loading from './Loading';
import PropagateLoader from 'react-spinners/PropagateLoader';

jest.mock('react-spinners/PropagateLoader', () => () => <div>MockLoader</div>);

describe('Loading', () => {
  it('renders the PropagateLoader component', () => {
    const { getByText } = render(<Loading />);
    expect(getByText('MockLoader')).toBeInTheDocument();
  });
});
