import React from 'react';
import TitlePage from '../../layouts/TitlePage';
import ProfileBox from '../../components/ProfileBox';
import star from '../../assets/images/star/star.png';
import pin from '../../assets/images/HostProfile/pin.png';
import world from '../../assets/images/HostProfile/world.png';
import Review from '../../components/Review';
import ProductCard from '../../components/ProductCard';

const HostProfile = {
  name: 'Aerichan U.',
  id: '123123123',
  rating: '4.8',
  review: '301',
  hosting: '3',
  language: 'English and Thai',
  location: 'Bangkok, Thailand',
  profileDetail: `I'm Aerichan , your host, and I've been living in this vibrant city for over a decade. I love sharing my cozy space with travelers from around the world. Our house is located in a serene neighborhood, just a stone's throw away from all the bustling attractions.

  You'll have access to a comfortable room with modern amenities, and I'll be here to provide you with local tips and hidden gems. Whether you're here for business or leisure, my home is the perfect retreat.
  
  Come experience the warmth of Thai hospitality and make your stay in Bangkok truly unforgettable. 
  
  Looking forward to hosting you soon!`,
};

const productData = Array(15).fill({
  title: 'THE STANDARD HUAHIN',
  price: '$1999/D',
  rating: 5,
  imageUrl:
    'https://i.pinimg.com/originals/06/2b/75/062b75b3c882ce0ba9644cb0143a9f18.jpg',
});

const HostProfilePage = () => {
  return (
    <div>
      <div className='p-8  min-h-screen mx-16 text-fg-text-black'>
        <div>
          <p>Breadcrum / Breadcrum</p>
        </div>
        <div className='mt-8'>
          <TitlePage>Host Profile</TitlePage>
        </div>

        {/* Left Part */}
        <div className='h-[900px] border-[2px] border-fg-grey/50 rounded-[40px] mt-10 pt-14 pb-2 px-10 flex gap-8'>
          <ProfileBox>
            <div className='px-10 py-4'>
              <div className='flex flex-col items-center'>
                <div className='text-3xl'>{HostProfile.name}</div>
                <div className='font-light'>Host ID: {HostProfile.id}</div>
              </div>

              <div className='mt-4'>
                <div className='flex justify-between'>
                  <h3>Rating</h3>
                  <div className='flex gap-2'>
                    <div>{HostProfile.rating}</div>
                    <img
                      src={star}
                      alt=''
                      className='-translate-y-[0.6px] w-[20px] h-[20px]'
                    />
                  </div>
                </div>
                <div className='flex justify-between'>
                  <h3>Review</h3>
                  <div>{HostProfile.review}</div>
                </div>
                <div className='flex justify-between'>
                  <h3>Years Hosting</h3>
                  <div>{HostProfile.hosting}</div>
                </div>
              </div>
            </div>
          </ProfileBox>

          {/* Right Part */}
          <div className='h-[800px] w-[100%] border-[2px] border-fg-grey/50 rounded-[40px]'>
            <div className='p-10'>
              <div className=' w-[100%] h-[160px] rounded-[20px] bg-fg-primary-03 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]'>
                <div className='pt-6 px-4 flex flex-col'>
                  <div className='text-3xl pl-16 font-semibold'>
                    About {HostProfile.name}
                  </div>
                  <div className='flex items-center gap-4'>
                    <img src={world} alt='' className='pl-2' />
                    <div>Speaks fluently : {HostProfile.language}</div>
                  </div>
                  <div className='flex items-center gap-4'>
                    <img src={pin} alt='' className='pl-2' />
                    <div>Lives in : {HostProfile.location}</div>
                  </div>
                </div>
              </div>

              <div>
                <div className='mt-4 whitespace-pre-line text-base'>
                  {HostProfile.profileDetail}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle part */}
        <hr className='mt-10 mb-24 border-[1px]' />
        <div>
          <TitlePage>{HostProfile.name} Reviews</TitlePage>
          <div className='relative'>
            <div className='absolute z-20 left-0 w-[300px] h-[400px] bg-gradient-to-r from-fg-white/100 pointer-events-none'></div>
            <div className='absolute z-20 right-0 w-[300px] h-[400px] bg-gradient-to-l from-fg-white/100 pointer-events-none'></div>

            <Review />
          </div>
        </div>

        {/* Bottom Part */}
        <hr className='mt-10 mb-24 border-[1px]' />
        <TitlePage>{HostProfile.name} Listings</TitlePage>
        <div className='flex w-[100%] overflow-auto my-20 '>
          <div className='flex flex-wrap gap-10 justify-center'>
            {productData.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostProfilePage;
