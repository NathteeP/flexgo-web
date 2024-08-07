import React, { useEffect, useState } from 'react';
import TitlePage from '../../layouts/TitlePage';
import ProfileBox from '../../components/ProfileBox';
import star from '../../assets/images/star/star.png';
import pin from '../../assets/images/HostProfile/pin.png';
import Review from '../../components/Review';
import ProductCard from '../../components/ProductCard';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../../store/slices/users-slice';
import { updateUserStatus } from '../../store/slices/user-slice';
import { toast } from 'sonner';
import Button from '../Button';
import ReviewBy from './ReviewBy';

const UserManagementCard = ({ user }) => {
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(user.isActive);
  const defaultAvatar =
    'https://t3.ftcdn.net/jpg/05/70/71/06/360_F_570710660_Jana1ujcJyQTiT2rIzvfmyXzXamVcby8.jpg';
  const avatar =
    user.userPhoto?.length > 0 && user.userPhoto[0].imagePath
      ? user.userPhoto[0].imagePath
      : defaultAvatar;

  const toggleUserStatus = async () => {
    const newStatus = !isActive;
    const promise = dispatch(
      updateUserStatus({ userId: user.id, isActive: newStatus })
    ).unwrap();
    toast.promise(promise, {
      loading: 'Updating status...',
      success: 'Status updated successfully!',
      error: 'Failed to update status.',
    });

    try {
      await promise;
      setIsActive(newStatus);
      dispatch(
        fetchUsers({
          page: 1,
          sortKey: 'createdAt',
          sortOrder: 'asc',
          searchTerm: '',
        })
      ); // Refresh user list after status update
    } catch (error) {
      console.error('Update failed', error);
    }
  };

  return (
    <div className='w-[65vh] sm:w-[65vh] lg:w-[140vh] h-[80vh] overflow-y-auto'>
      <div className='p-8 text-fg-text-black'>
        <div className='mt-8'>
          <TitlePage>User Profile</TitlePage>
        </div>
        <div className='flex justify-end my-4'>
          <Button
            className={`bg-white ring-[1px] ${isActive ? 'ring-red-300 text-red-500' : 'ring-green-300 text-green-500 bg-green-50'} hover:scale-110 hover:ring-[3px] transition-all duration-300 active:scale-90`}
            onClick={toggleUserStatus}
          >
            {isActive ? 'Deactivate User' : 'Activate User'}
          </Button>
        </div>

        {/* Left Part */}
        <div className='border-[2px] border-fg-grey/50 rounded-[40px] pt-14 pb-2 px-10 flex flex-col lg:flex-row gap-8'>
          <div>
            <ProfileBox src={avatar}>
              <div className='px-10 py-4'>
                <div className='flex flex-col items-center'>
                  <div className='text-3xl'>{user.fullName}</div>
                  <div className='font-light'>User ID: {user.id}</div>
                </div>
                <div className='mt-4'>
                  <div className='flex justify-between'>
                    <div>Email:</div>
                    <div>{user.email}</div>
                  </div>
                  <div className='flex justify-between'>
                    <div>Phone Number:</div>
                    <div>{user.phoneNumber}</div>
                  </div>
                  <div className='flex justify-between'>
                    <div>Date of birth:</div>
                    <div>{user.birthDate || 'N/A'}</div>
                  </div>
                  <div className='flex justify-between'>
                    <div>Nationality:</div>
                    <div>{user.nationality || 'N/A'}</div>
                  </div>
                  <div className='flex justify-between'>
                    <div>Gender:</div>
                    <div>{user.gender || 'N/A'}</div>
                  </div>

                  <br />

                  <div className='my-2 h-[2px] bg-fg-text-black/25 rounded-full'></div>

                  <div className='flex justify-between'>
                    <h3>Rating</h3>
                    <div className='flex gap-2'>
                      <div>{user.rating?.overAll || 'N/A'}</div>
                      <img
                        src={star}
                        alt=''
                        className='-translate-y-[0.6px] w-[20px] h-[20px]'
                      />
                    </div>
                  </div>
                  <div className='flex justify-between'>
                    <h3>Review</h3>
                    <div>{user.rating?.count || 'N/A'}</div>
                  </div>
                  <div className='flex justify-between'>
                    <h3>Years Hosting</h3>
                    <div>{user.hostTime || 'N/A'}</div>
                  </div>
                </div>
              </div>
            </ProfileBox>
          </div>

          {/* Right Part */}
          <div className='border-[2px] border-fg-grey/50 rounded-[40px] w-full'>
            <div className='p-10'>
              <div className='rounded-[20px] bg-fg-primary-03 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]'>
                <div className='pt-6 px-4 flex flex-col'>
                  <div className='text-3xl pl-16 font-semibold'>
                    About {user.fullName}
                  </div>
                  <div className='flex items-center gap-4'></div>
                  <div className='flex items-center gap-4  mb-4'>
                    <img src={pin} alt='' className='pl-2' />
                    <div className='h-full'>
                      Lives in : {user.address || 'N/A'}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className='mt-4 whitespace-pre-line text-base'>
                  {user.description || 'No description available'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle part */}
        <hr className='mt-10 mb-24 border-[1px]' />
        <div>
          <TitlePage>Reviews by {user.fullName}</TitlePage>
          <div className='relative'>
            <Review reviews={user.featureReview} />
          </div>
        </div>
        <hr className='mt-10 mb-24 border-[1px]' />
        <div>
          <TitlePage>Reviews for {user.fullName}</TitlePage>
          <div className='relative'>
            <ReviewBy reviews={user.featureReview} />
          </div>
        </div>

        {/* Bottom Part */}
        <hr className='mt-10 mb-24 border-[1px]' />
        <TitlePage>{user.fullName} Listings</TitlePage>
        <div className='flex w-[100%] overflow-auto my-20'>
          <div className='flex flex-wrap gap-10 justify-center'>
            {user.accomList?.map((product, index) => (
              <ProductCard
                key={index}
                id={product.id}
                title={product.name}
                price={product.minPrice}
                rating={product.reviews.overAllReview}
                imageUrl={product.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagementCard;
