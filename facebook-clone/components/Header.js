import Image from 'next/image';
function Header() {
  return (
    <div>
      <h1>Header</h1>

      {/* left */}
      <div>
        <Image
          src='https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-facebook-2019-circle-512.png'
          width={40}
          height={40}
          layout='fixed'
        />
      </div>

      {/* center */}

      {/* Right */}
    </div>
  );
}

export default Header;
