import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Rows from './Rows/Rows';
import { getData } from './helpers';

const Bookings = async () => {
  const { data, errors } = await getData();

  return (
    <div>
      <Table>
        <TableCaption>All Bookings.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead className='min-w-[7rem]'>User</TableHead>
            <TableHead className='min-w-[7rem]'>Parc</TableHead>
            <TableHead className='text-right'>Comments</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <Rows errors={errors} data={data} />
        </TableBody>
      </Table>
    </div>
  );
};

export default Bookings;
