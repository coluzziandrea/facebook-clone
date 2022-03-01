import { useSession } from 'next-auth/react';
function Sidebar() {
  const { data: session } = useSession();
  return <div className='p-2'></div>;
}

export default Sidebar;
