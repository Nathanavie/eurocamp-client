import { Tabs, TabsContent } from '@/components/ui/tabs';
import Bookings from './components/Bookings/Bookings';
import Parcs from './components/Parcs/Parcs';
import HeaderTabs from './components/Tabs/HeaderTabs';
import Users from './components/Users/Users';
interface HomeProps {
  searchParams: {
    section: string | undefined;
  };
}

const Home = ({ searchParams }: HomeProps) => {
  return (
    <div className='w-screen min-h-[90vh] flex justify-center my-2'>
      <div className='flex justify-center'>
        <Tabs
          className='w-[80vw] min-h-[150px] bg-gray-100 rounded-lg p-2'
          defaultValue={searchParams.section || 'users'}
        >
          <HeaderTabs />
          <TabsContent value='users'>
            <Users />
          </TabsContent>
          <TabsContent value='parcs'>
            <Parcs />
          </TabsContent>
          <TabsContent value='bookings'>
            <Bookings />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
export default Home;
