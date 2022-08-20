import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";

import Contact from "./Contact";

const contacts = [
  {
    src: "https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg",
    name: "Harry Potter",
  },
  {
    src: "https://i.pinimg.com/originals/6c/f0/0a/6cf00a244af7680b8364a4b5385df5c6.jpg",
    name: "Frodo Beggins",
  },
  {
    src: "https://pbs.twimg.com/profile_images/1533830032312909828/sSJXYnXP_400x400.jpg",
    name: "The Queen",
  },
  {
    src: "https://pbs.twimg.com/profile_images/507818697180708864/bpbsKGfM_400x400.jpeg",
    name: "Papa Francesco",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
    name: "Mark Zuckerberg",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Bill_Gates_June_2015.jpg/640px-Bill_Gates_June_2015.jpg",
    name: "Bill Gates",
  },
];

function Widget() {
  return (
    <div className='hidden lg:flex flex-col w-60 p-2 mt-5'>
      <div className='flex justify-between items-center text-gray-500 mb-5'>
        <h2 className='text-xl'>Contacts</h2>
        <div className='flex space-x-2'>
          <VideoCameraIcon className='h-6' />
          <SearchIcon className='h-6' />
          <DotsHorizontalIcon className='h-6' />
        </div>
      </div>

      {contacts.map((contact) => {
        return <Contact key={contact.src} src={contact.src} name={contact.name}></Contact>;
      })}
    </div>
  );
}

export default Widget;
