import Image from 'next/image';
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from '@heroicons/react/solid';
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline';

function Header() {
  return (
    <div>
      {/* left */}
      <div className='flex items-center'>
        <Image
          src='https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-facebook-2019-circle-512.png'
          width={40}
          height={40}
          layout='fixed'
        />
        <div className='flex ml-2 items-center rounded-full bg-gray-100 p-2'>
          <SearchIcon className='h-6 text-gray-600' />
          <input
            className='flex ml-2 items-center bg-transparent outline-none placeholder-gray-500'
            type='text'
            placeholder='Search on Facebook'
          />
        </div>
      </div>

      {/* center */}

      {/* Right */}
    </div>
  );
}

export default Header;
