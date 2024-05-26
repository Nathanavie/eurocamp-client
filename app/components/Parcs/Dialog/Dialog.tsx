import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { ParcType } from '../Rows/Rows';

interface DialogComponentProps {
  parc: ParcType;
}

const DialogComponent = ({ parc }: DialogComponentProps) => {
  return (
    <Dialog>
      <DialogTrigger>
        <MdOutlineRemoveRedEye />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{parc.name}</DialogTitle>
        </DialogHeader>
        <DialogDescription>{parc.description}</DialogDescription>
      </DialogContent>
    </Dialog>
  );
};
export default DialogComponent;
