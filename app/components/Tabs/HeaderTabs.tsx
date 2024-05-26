'use client';
import { TabsList, TabsTrigger } from '@/components/ui/tabs';

const HeaderTabs = () => (
  <TabsList className='grid w-full grid-cols-3'>
    <TabsTrigger
      value='users'
      onClick={(e) => {
        e.preventDefault();
        window.history.replaceState(null, '', '?section=users');
      }}
    >
      Users
    </TabsTrigger>
    <TabsTrigger
      value='parcs'
      onClick={(e) => {
        e.preventDefault();
        window.history.replaceState(null, '', '?section=parcs');
      }}
    >
      Parcs
    </TabsTrigger>
    <TabsTrigger
      value='bookings'
      onClick={(e) => {
        e.preventDefault();
        window.history.replaceState(null, '', '?section=bookings');
      }}
    >
      Bookings
    </TabsTrigger>
  </TabsList>
);

export default HeaderTabs;
