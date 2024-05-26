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

const Parcs = async () => {
  const { data, errors } = await getData();

  return (
    <div>
      <Table>
        <TableCaption>All Parcs.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead className='w-[70%] text-right'>Description</TableHead>
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

export default Parcs;
