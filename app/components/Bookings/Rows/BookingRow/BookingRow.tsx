import { TableCell, TableRow } from '@/components/ui/table';
import { BookingType } from '../Rows';
import { Suspense } from 'react';
import { format } from 'date-fns';
import { getData } from './helpers';

interface BookingRowProps {
  booking: BookingType;
}

const BookingRow = async ({ booking }: BookingRowProps) => {
  const { parc, user, userErrors, parcErrors } = await getData(
    booking.user,
    booking.parc
  );

  return (
    <TableRow>
      <TableCell className='font-medium whitespace-nowrap'>
        {format(new Date(booking.bookingdate), 'dd-MMM-yy @ hh:mm a')}
      </TableCell>
      <Suspense fallback={<TableCell>Loading...</TableCell>}>
        <TableCell className='text-red-500 font-bold whitespace-nowrap'>
          {userErrors.length ? <span>{userErrors}</span> : user}
        </TableCell>
      </Suspense>
      <Suspense fallback={<TableCell>Loading...</TableCell>}>
        <TableCell className='text-red-500 font-bold whitespace-nowrap'>
          {parcErrors.length ? (
            <span className='text-red-500 font-bold'>{parcErrors}</span>
          ) : (
            parc
          )}
        </TableCell>
      </Suspense>
      <TableCell className='text-right whitespace-nowrap'>
        {booking.comments}
      </TableCell>
    </TableRow>
  );
};

export default BookingRow;
