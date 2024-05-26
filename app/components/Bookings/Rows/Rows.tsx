import BookingRow from './BookingRow/BookingRow';
import ErrorRow from './ErrorRow/ErrorRow';

export interface BookingType {
  bookingdate: string;
  comments: string;
  id: string;
  parc: string;
  user: string;
}

interface ErrorProps {
  errors: string[];
  data: BookingType[];
}
const Rows = ({ errors, data }: ErrorProps) => {
  if (!errors.length && data.length > 0) {
    return (
      <>
        {data.map((booking) => (
          <BookingRow key={booking.id} booking={booking} />
        ))}
      </>
    );
  }
  return (
    <>
      {errors.map((error: string) => (
        <ErrorRow key={error} error={error} />
      ))}
    </>
  );
};

export default Rows;
