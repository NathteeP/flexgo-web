import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  openAmenities,
  closeAmenities,
  openNearby,
  closeNearby,
} from '../../store/slices/modal-slice';
import map from '../../assets/images/test/MapMockup.png';
import Button from '../Button';
import CustomModal from '../Modal';

const nearbyPlaces = [
  { name: 'Fun Ball Family', distance: '30 m' },
  { name: 'Central Festival Pattaya Beach', distance: '80 m' },
  { name: 'Pattaya Beach', distance: '90 m' },
  { name: 'Take It Easy', distance: '190 m' },
  { name: 'Narisa Restaurant', distance: '220 m' },
  { name: 'Tequila Reef', distance: '220 m' },
  { name: 'Walking Street', distance: '500 m' },
  { name: "Ripley's Believe It or Not!", distance: '600 m' },
  { name: 'Royal Garden Plaza', distance: '700 m' },
  { name: 'Art in Paradise', distance: '900 m' },
  { name: 'Big Buddha Hill', distance: '1.2 km' },
  { name: 'Sanctuary of Truth', distance: '1.5 km' },
  { name: "Tiffany's Show", distance: '1.7 km' },
  { name: 'Pattaya View Point', distance: '2.0 km' },
  { name: 'Underwater World', distance: '2.5 km' },
  { name: 'Mini Siam', distance: '2.8 km' },
  { name: 'Alcazar Cabaret', distance: '3.0 km' },
  { name: 'Floating Market', distance: '3.5 km' },
  { name: 'Jomtien Beach', distance: '4.0 km' },
  { name: 'Nong Nooch Tropical Botanical Garden', distance: '5.0 km' },
  { name: 'Ramayana Water Park', distance: '7.0 km' },
  { name: 'Khao Kheow Open Zoo', distance: '8.0 km' },
  { name: 'Cartoon Network Amazone Waterpark', distance: '10.0 km' },
  { name: 'Silverlake Vineyard', distance: '12.0 km' },
  { name: 'Wat Yansangwararam', distance: '13.0 km' },
  { name: 'Pattaya Elephant Village', distance: '14.0 km' },
  { name: 'Bang Saray Beach', distance: '15.0 km' },
  { name: 'Sriracha Tiger Zoo', distance: '18.0 km' },
  { name: 'Koh Larn', distance: '20.0 km' },
  { name: 'Khao Chi Chan', distance: '22.0 km' },
  { name: 'Pattaya Sheep Farm', distance: '24.0 km' },
  { name: 'Suan Nong Nooch', distance: '25.0 km' },
  { name: 'Wat Phra Yai', distance: '26.0 km' },
  { name: 'Mimosa Pattaya', distance: '28.0 km' },
  { name: 'Buddha Mountain', distance: '30.0 km' },
  {
    name: 'Million Years Stone Park & Pattaya Crocodile Farm',
    distance: '32.0 km',
  },
  { name: 'Samae Beach', distance: '34.0 km' },
  { name: 'Pattaya Park Tower', distance: '36.0 km' },
  { name: 'Laem Bali Hai', distance: '38.0 km' },
  { name: 'Tawaen Beach', distance: '40.0 km' },
];

const MapNearByPlace = () => {
  const dispatch = useDispatch();
  const { isAmenitiesOpen, isNearbyOpen } = useSelector((state) => state.modal);

  const renderModal = (isOpen, closeAction, children) => (
    <CustomModal open={isOpen} onClose={() => dispatch(closeAction())}>
      {children}
    </CustomModal>
  );
  return (
    <div>
      <div className='h-[400px] w-full '>
        <img
          src={map}
          alt=''
          className='w-full h-full object-cover rounded-[40px] px-2 mt-2'
        />
      </div>
      {/* สถานที่ใกล้เคียง nearbyplace */}
      <div className='flex justify-between w-full border-b-[1px] text-fg-text-black'>
        <div className=' w-full m-4'>
          {nearbyPlaces.slice(0, 6).map((item, index) => (
            <div key={index} className='flex justify-between mt-2'>
              <div>
                <li className=''>{item.name}</li>
              </div>
              <div>{item.distance}</div>
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-center mt-3'>
        <Button
          variant='contained'
          className='w-[170px] text-[13px] hover:bg-fg-primary-02'
          onClick={() => dispatch(openNearby())}
        >
          See all nearby place
        </Button>

        {renderModal(
          isNearbyOpen,
          closeNearby,
          <div className='h-[600px] w-[600px] px-6 pt-12'>
            <div className=' mb-4'>
              <h1>All nearby place </h1>
            </div>
            <div className='flex flex-col  overflow-y-auto max-h-[500px] pr-5'>
              {nearbyPlaces.map((item, index) => (
                <div
                  key={index}
                  className='flex w-full items-center gap-4 py-2  border-b-[1px] justify-between'
                >
                  <li>{item.name}</li>

                  <div>{item.distance}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MapNearByPlace;
