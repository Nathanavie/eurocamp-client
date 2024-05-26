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

const Users = async () => {
  const { data, errors } = await getData();

  return (
    <div>
      <Table>
        <TableCaption>All available users.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[50%]'>Name</TableHead>
            <TableHead className='text-right'>Email</TableHead>
            <TableHead />
          </TableRow>
        </TableHeader>
        <TableBody>
          <Rows errors={errors} data={data} />
        </TableBody>
      </Table>
    </div>
  );
};

export default Users;
