import StoryCard from './StoryCard';

const stories = [
  {
    name: 'Andrea Coluzzi',
    src: 'https://lh3.googleusercontent.com/-dl0LZ_soxgXx_YqJQuodWtlXMw-MkpdkgG6hGet4_nrWX2j0Vz_qSDcTfTftRHMDTkudV5XzVC3o5XaTF_kDSHDNAqYSF8m1e5Ht1hcQxCEX5QoHel_0iAEGebGfUdOO-_SVqfIweU=w2400',
    profile:
      'https://lh3.googleusercontent.com/XKevQY8_VmbqvYi8TekVJIP1WiP4D9eHcYrH3clJJPVe7niP9-8LCl1Exv9TVekJFthnIsAGv0u0jibmQx7jMY8pFmvPrt3TKnjGB1JX4kinswvE2c6Vi-J6_S1P8xA45C8r2W6nwLo=w2400',
  },
  {
    name: 'Elon Musk',
    src: 'https://i.gadgets360cdn.com/large/elon_musk_reuters_1610084738222.jpg?downsize=950:*&output-quality=80',
    profile:
      'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg',
  },
  {
    name: 'Jeff Bezoz',
    src: 'https://www.rollingstone.com/wp-content/uploads/2018/06/jeff-bezos-richest-man-2018-read-7977aa13-c046-420a-b20d-c9bf45ab8ec0.jpg?resize=1800,1200&w=1800',
    profile:
      'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY2NzA3ODE3OTgwMzcyMjYw/jeff-bezos-andrew-harrer_bloomberg-via-getty-images.jpg',
  },
  {
    name: 'Mark Zuckerberg',
    src: 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iHe1Y3DC0V3U/v1/1000x-1.jpg',
    profile:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/1200px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg',
  },
  {
    name: 'Bill Gates',
    src: 'https://images.wsj.net/im-299011/square',
    profile:
      'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f4ebe0c87612dab4f12a597%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D292%26cropX2%3D3684%26cropY1%3D592%26cropY2%3D3987',
  },
];

function Stories() {
  return (
    <div className='flex justify-center space-x-3 mx-auto'>
      {stories.map((story) => {
        return (
          <StoryCard
            key={story.src}
            name={story.name}
            src={story.src}
            profile={story.profile}
          />
        );
      })}
    </div>
  );
}

export default Stories;
