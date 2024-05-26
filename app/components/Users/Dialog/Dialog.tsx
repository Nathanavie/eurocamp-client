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
import { UserType } from '../Rows/Rows';

interface DialogComponentProps {
  user: UserType;
}

const DialogComponent = ({ user }: DialogComponentProps) => {
  return (
    <Dialog>
      <DialogTrigger>
        <MdOutlineRemoveRedEye />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{user.name}</DialogTitle>
        </DialogHeader>
        <DialogDescription>{user.email}</DialogDescription>
      </DialogContent>
    </Dialog>
  );
};
export default DialogComponent;
