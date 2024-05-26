'use client';

import revalidateCacheFromTag from '@/app/actions';
import { Button } from '@/components/ui/button';
import { TableCell, TableRow } from '@/components/ui/table';

interface ErrorRowProps {
  error: string;
}

const ErrorRow = ({ error }: ErrorRowProps) => (
  <TableRow>
    <TableCell colSpan={2} className='text-red-500 font-bold text-center '>
      {error}
      <Button
        variant='ghost'
        className='p-0 ml-2 font-bold'
        onClick={() => {
          revalidateCacheFromTag('bookings');
        }}
      >
        Retry
      </Button>
    </TableCell>
  </TableRow>
);

export default ErrorRow;
