'use client';

import PropagateLoader from 'react-spinners/PropagateLoader';

const Loading = () => {
  return (
    <div className='flex justify-center items-center w-full h-[90vh]'>
      <PropagateLoader color='#d0d7fe' />
    </div>
  );
};
export default Loading;
