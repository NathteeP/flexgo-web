import React from 'react';
import AccomSelector from '../../components/HostAssetMangement/AccomSelector';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  fetchAllRoomByAccomId,
  fetchAllUserAccom,
  fetchAuthUser,
} from '../../store/slices/user-slice';
import { useEffect } from 'react';
import TitlePage from '../../layouts/TitlePage';
import RemoveRoomModal from '../../components/Admin/RemoveRoomModal';
import CustomModal from '../../components/Modal';
import {
  closeAdminRemoveRoom,
  openAdminRemoveRoom,
} from '../../store/slices/modal-slice';
import { useNavigate } from 'react-router-dom';

const roomData = [
  {
    id: 1,
    type: 'Standard Twin Room',
    beds: '2 single beds',
    guests: 2,
    price: 199,
    image:
      'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/468597705.jpg?k=b5490921d7f814bdcf124de082a759ea06959fee994896e7dd1daf570482183f&o=',
    status: 'Available',
  },
  {
    id: 2,
    type: 'Deluxe King Room',
    beds: '1 king bed',
    guests: 2,
    price: 250,
    image:
      'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/469214669.jpg?k=20d64957456e0e2f940de957a198f6aa71c57dfa8456bf7d23a48f625f21d1d3&o=',
    status: 'Unavailable',
  },
  {
    id: 3,
    type: 'Family Suite',
    beds: '2 queen beds',
    guests: 4,
    price: 350,
    image:
      'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/468600269.jpg?k=ba24dc9cfff4ac9e1ff1bdbddf12bb52db7f9b3899f5e406a316333b7da7b34b&o=',
    status: 'Available',
  },
];

const hostData = {
  name: 'Aerichan U.',
  hostId: '2000301088',
  image:
    'https://i.pinimg.com/originals/9c/70/b9/9c70b925624763a4b9ed23fdd0e8a0a6.jpg',
  reviews: 301,
  rating: 4.8,
  yearsHosting: 3,
  description: `Thank you for visiting my page.\nMy name is Aerichan.\n I hope you will enjoy our place, and wish you have a lively time in Bangkok Thailand through FlexGO.\nGood luck and have a wonderful trip. Thank you very much!!`,
};

const HostAssetManagement = () => {
  const { accomsList, roomsList, authUser, hostTime, rating } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const { isAdminRemoveRoomOpen } = useSelector((state) => state.modal);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchAllRoomByAccomId(accomsList[0]?.id));
  }, [dispatch, accomsList]);

  const renderModal = (isOpen, closeAction, children) => (
    <CustomModal open={isOpen} onClose={() => dispatch(closeAction())}>
      {children}
    </CustomModal>
  );

  return (
    <div className='w-screen mx-36 mt-6 bg-white flex flex-col items-center '>
      {/* Full width header */}
      <div className='flex justify-center text-center w-full h-[9%] bg-fg-primary-01 rounded-2xl p-2 mt-4'>
        <TitlePage>Accommodation Management</TitlePage>
      </div>

      <div className='w-full max-w-7xl flex flex-col md:flex-row p-4'>
        <div className='w-full md:w-2/3'>
          <div className='bg-white rounded-lg p-4 mb-4'>
            <div className='flex justify-start gap-4 mb-4'>
              {accomsList.length >= 1 ? (
                <AccomSelector accoms={accomsList} />
              ) : (
                <p className='text-transparent'>spacer</p>
              )}
              <div className='w-1/2 h-10'>
                <button
                  className='w-full h-12 border border-gray-200 flex rounded-xl items-center justify-center animated-background bg-gradient-to-l from-fg-primary-03 to-fg-gradientBlue shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] focus:ring-0 focus:border-0 focus:outline-0 [&_.MuiOutlinedInput-notchedOutline]:border-0 hover:ring-2 transform transition-colors delay-1000 duration-1000 hover:ring-fg-primary-01/50 text-fg-text-black'
                  onClick={() =>
                    window.open('/host/AssetsManagement/NewAccomPage', '_blank')
                  }
                >
                  Add new accommodation +
                </button>
              </div>
            </div>
            {roomsList.length >= 1
              ? roomsList?.map((room) => (
                  <div
                    key={room?.id}
                    className='flex w-full h-52 items-center justify-center border rounded-lg  p-4 mb-4 animated-background bg-gradient-to-l from-fg-primary-03 to-fg-gradientBlue shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] focus:ring-0 focus:border-0 focus:outline-0 [&_.MuiOutlinedInput-notchedOutline]:border-0 hover:ring-2 transform transition-colors delay-1000 duration-1000 hover:ring-fg-primary-01/50 text-fg-text-black'
                  >
                    <div className='flex'>
                      <img
                        src={room?.photo}
                        alt='Room'
                        className='w-64 h-40 rounded-lg mr-4'
                      />
                      <div className='flex flex-col justify-end w-[450px]'>
                        <div>
                          <h3 className='text-base font-bold'>
                            {room.roomType}
                          </h3>
                          <div className='flex'>
                            {room?.bed?.map((item, index) => (
                              <p key={index} className='text-gray-600'>
                                {item.amount} {item.type}
                              </p>
                            ))}
                          </div>
                          <p className='text-gray-600'>
                            Guests: {room.capacity}
                          </p>
                        </div>
                        <div className='flex justify-between items-center mt-4'>
                          <p className='text-base font-normal'>
                            ${room.price} per night
                          </p>
                          <div className='flex flex-col gap-2'>
                            <div className='flex justify-end mr-1'>
                              <button
                                className='border border-gray-300 text-gray-500 text-sm w-12 h-auto p-2 rounded-xl hover:bg-slate-300 hover:text-white transform transition-transform duration-200 ease-in-out active:scale-90'
                                onClick={() =>
                                  window.open(
                                    '/host/AssetsManagement/NewRoomPage',
                                    '_blank'
                                  )
                                }
                              >
                                Edit
                              </button>
                            </div>

                            <div className='flex gap-2'>
                              <button
                                className={`border p-2 rounded-xl text-sm ${!room.notAvailable ? 'border-green-500 text-green-500' : 'border-red-500 text-red-500'}`}
                                disabled
                              >
                                {room.notAvailable
                                  ? `Unavailble ${room.notAvailable.split(',')[0]}`
                                  : 'ACTIVE'}
                              </button>
                              <div>
                                <button
                                  className='bg-red-400 text-white hover:bg-red-500 text-sm p-2 rounded-xl'
                                  onClick={() => {
                                    dispatch(openAdminRemoveRoom());
                                  }}
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              : null}
            <button
              className='w-full border border-gray-200 animated-background bg-gradient-to-l from-fg-primary-03 to-fg-gradientBlue shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] focus:ring-0 focus:border-0 focus:outline-0 [&_.MuiOutlinedInput-notchedOutline]:border-0 hover:ring-2 transform transition-colors delay-1000 duration-1000 hover:ring-fg-primary-01/50 text-fg-text-black p-4 rounded-lg mt-4'
              onClick={() =>
                window.open('/host/AssetsManagement/NewRoomPage', '_blank')
              }
            >
              Add your new room +
            </button>
          </div>
        </div>
        <div className='w-[30%] h-[655px] mt-20 md:w-1/3 md:ml-4 rounded-lg  border border-gray-200 p-4 bg-fg-gradientBlue bg-opacity-40 shadow-lg'>
          <div className='flex flex-col items-center'>
            <img
              src={authUser?.profileImage?.imagePath}
              alt='Host'
              className='w-52 h-52 rounded-full mb-4 shadow-lg'
            />
            <div className='flex flex-col items-center justify-center w-full h-full border-[2px] border-gray-200 bg-fg-primary-03 rounded-2xl p-2 shadow-lg '>
              <h3 className='text-lg font-bold'>{authUser?.fullName}</h3>
              <p className='text-gray-600'>Host ID: {authUser?.id}</p>
              <div className='flex items-center space-x-1 my-2'>
                <span className='text-yellow-500'>&#9733;</span>
                <span>{rating?.count} reviews</span>
                <span className='text-gray-600'>
                  {isNaN(rating.overAllReview) ? rating?.overAllReview : null}{' '}
                  rating
                </span>
              </div>
              <p className='text-gray-600'>Years Hosting: {hostTime}</p>
              <p
                className='text-center text-gray-600 mt-4'
                style={{ whiteSpace: 'pre-line' }}
              >
                {authUser?.description}
              </p>
            </div>

            {renderModal(
              isAdminRemoveRoomOpen,
              closeAdminRemoveRoom,
              <RemoveRoomModal />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostAssetManagement;
