'use client';
import revalidateCacheFromTag from '@/app/actions';
import { Button } from '@/components/ui/button';
import { TableCell, TableRow } from '@/components/ui/table';
import DialogComponent from '../Dialog/Dialog';

export interface UserType {
  id: number;
  name: string;
  email: string;
}

interface ErrorProps {
  errors: string[];
  data: UserType[];
}
const Rows = ({ errors, data }: ErrorProps) => {
  if (!errors.length && data.length > 0) {
    return (
      <>
        {data.map((user) => (
          <TableRow className='w-full' key={user.id}>
            <TableCell className='font-medium w-[50%]'>{user.name}</TableCell>
            <TableCell className='text-right w-[50%]'>{user.email}</TableCell>
            <TableCell className='w-[2em]'>
              <DialogComponent user={user} />
            </TableCell>
          </TableRow>
        ))}
      </>
    );
  }
  return (
    <>
      {errors.map((error: string) => (
        <TableRow key={error}>
          <TableCell
            colSpan={2}
            className='text-red-500 font-bold text-center '
          >
            {error}
            <Button
              variant='ghost'
              className='p-0 ml-2 font-bold'
              onClick={() => {
                revalidateCacheFromTag('users');
              }}
            >
              Retry
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};

export default Rows;
