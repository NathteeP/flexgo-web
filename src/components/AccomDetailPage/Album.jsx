import React from 'react';
import CustomModal from '../Modal'; // นำเข้า CustomModal
import Button from '../Button';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const picAlbum = {
  image: [
    'https://res.cloudinary.com/dtlwfpitf/image/upload/v1719561703/accomAlbumSeed/qzuf6jbvaognt61waw3a.webp',
    'https://res.cloudinary.com/dtlwfpitf/image/upload/v1719561703/accomAlbumSeed/avzjktrcma2giv0ysugb.jpg',
    'https://res.cloudinary.com/dtlwfpitf/image/upload/v1719561703/accomAlbumSeed/mb1fsux7jf1dg8jshnur.webp',

    'https://res.cloudinary.com/dtlwfpitf/image/upload/v1719561702/accomAlbumSeed/i5i1nf0er26gdkxjmvsl.webp',
    'https://res.cloudinary.com/dtlwfpitf/image/upload/v1719561702/accomAlbumSeed/owj36wnvyjo9dyxag9lz.jpg',
    'https://res.cloudinary.com/dtlwfpitf/image/upload/v1719561702/accomAlbumSeed/mdzemsefo6vthfgtqcr5.jpg',
    'https://res.cloudinary.com/dtlwfpitf/image/upload/v1719561703/accomAlbumSeed/togxqji3fqllvfrs4mb9.jpg',
    'https://res.cloudinary.com/dtlwfpitf/image/upload/v1719561702/accomAlbumSeed/lan2i0i417d07vbyodk7.webp',
    'https://res.cloudinary.com/dtlwfpitf/image/upload/v1719561702/accomAlbumSeed/lvm7kqpcw9qgqsw99naz.jpg',
    'https://res.cloudinary.com/dtlwfpitf/image/upload/v1719561701/accomAlbumSeed/a56cylgegpbx2vl2udib.webp',
    'https://res.cloudinary.com/dtlwfpitf/image/upload/v1719561701/accomAlbumSeed/akqcskbuwlvmt16owy2b.webp',
    'https://res.cloudinary.com/dtlwfpitf/image/upload/v1719561701/accomAlbumSeed/zsd0mqpwvgzfr070fwpi.webp',
    'https://res.cloudinary.com/dtlwfpitf/image/upload/v1719561701/accomAlbumSeed/fdkzu9eu89qjzpdoj96g.webp',
    'https://res.cloudinary.com/dtlwfpitf/image/upload/v1719561701/accomAlbumSeed/lh72g0s5waw5nh9rojkq.webp',
    'https://res.cloudinary.com/dtlwfpitf/image/upload/v1719561700/accomAlbumSeed/pvuskw8kt1onrowe3t7m.webp',
    'https://res.cloudinary.com/dtlwfpitf/image/upload/v1719561700/accomAlbumSeed/v7ab3n4ocjzwb0jejn5g.jpg',
    'https://res.cloudinary.com/dtlwfpitf/image/upload/v1719561700/accomAlbumSeed/suvx7w6kf9tjp4loaerp.jpg',
    'https://res.cloudinary.com/dtlwfpitf/image/upload/v1719561700/accomAlbumSeed/ldjtbfymo7yhawhkuqin.jpg',
    'https://res.cloudinary.com/dtlwfpitf/image/upload/v1719561700/accomAlbumSeed/e8kd2xmrmtlfmytiuyek.webp',
    'https://res.cloudinary.com/dtlwfpitf/image/upload/v1719561700/accomAlbumSeed/cgj7lylbbgndwhtxp5fg.webp',
  ],
};

const Album = () => {
  return (
    <div className='p-4'>
      <div className='grid grid-cols-4 grid-rows-4 gap-2 h-[600px] relative'>
        {picAlbum.image.slice(0, 5).map((src, index) => (
          <div
            key={index}
            className={`overflow-hidden relative flex ${
              index === 0
                ? 'col-span-2 row-span-4 rounded-l-[40px]'
                : index === 1
                  ? 'row-span-2 col-start-3 '
                  : index === 2
                    ? 'row-span-2 col-start-4 rounded-tr-[40px]'
                    : index === 3
                      ? 'row-span-2 col-start-3 row-start-3 '
                      : 'row-span-2 col-start-4 row-start-3 rounded-br-[40px]'
            }`}
          >
            <CustomModal
              trigger={
                <div className='flex items-center justify-center w-full h-full'>
                  <img
                    src={src}
                    alt={`album ${index + 1}`}
                    className='w-full h-full object-cover'
                  />
                </div>
              }
            >
              <div className='flex items-center justify-center w-full h-full'>
                <img
                  src={src}
                  alt={`album ${index + 1}`}
                  className='w-full h-full object-cover'
                />
              </div>
            </CustomModal>
          </div>
        ))}
      </div>
      <CustomModal
        trigger={
          <Button className=' bg-black/10 ring-[2px] ring-fg-secondary-02 absolute bottom-10 right-14 text-white backdrop-blur-[2px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:bg-fg-secondary-02'>
            Show all photos
          </Button>
        }
      >
        <Box className='lg:w-[1000px] md:w-[700px] w-[700px] overflow-y-scroll h-[700px]'>
          <ImageList variant='masonry' cols={3} gap={8}>
            {picAlbum.image.map((item) => (
              <>
                <ImageListItem key={item.img}>
                  <img
                    srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item}?w=248&fit=crop&auto=format`}
                    alt={item.title}
                    loading='lazy'
                  />
                </ImageListItem>
              </>
            ))}
          </ImageList>
        </Box>
      </CustomModal>

      <div></div>
    </div>
  );
};

export default Album;
