import Image from "next/image";
function Contact({ src, name }) {
  return (
    <div className='flex items-center space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer rounded-xl p-2'>
      <Image
        className='rounded-full'
        objectFit='cover'
        src={src}
        width={50}
        height={50}
        layout='fixed'
      ></Image>

      <div className='absolute bottom-2 left-7 bg-green-500 h-3 w-3 rounded-full animate-bounce'></div>
      <p>{name}</p>
    </div>
  );
}

export default Contact;
