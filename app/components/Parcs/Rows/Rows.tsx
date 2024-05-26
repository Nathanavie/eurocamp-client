'use client';
import revalidateCacheFromTag from '@/app/actions';
import { Button } from '@/components/ui/button';
import { TableCell, TableRow } from '@/components/ui/table';
import DialogComponent from '../Dialog/Dialog';

export interface ParcType {
  id: number;
  name: string;
  description: string;
}

interface ErrorProps {
  errors: string[];
  data: ParcType[];
}
const Rows = ({ errors, data }: ErrorProps) => {
  if (!errors.length && data.length > 0) {
    return (
      <>
        {data.map((parc) => (
          <TableRow key={parc.id}>
            <TableCell className='font-medium'>{parc.name}</TableCell>
            <TableCell className='text-right'>{parc.description}</TableCell>
            <TableCell className='w-[2em]'>
              <DialogComponent parc={parc} />
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
                revalidateCacheFromTag('parcs');
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
