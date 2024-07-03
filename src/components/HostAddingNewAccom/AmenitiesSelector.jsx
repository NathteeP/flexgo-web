import React, { useState } from 'react';
import {
  FaWifiIcon,
  FaSwimmingPoolIcon,
  FaConciergeBellIcon,
  FaSmokingBanIcon,
  FaBabyCarriageIcon,
  FaBicycleIcon,
  FaCarIcon,
  FaGiftIcon,
  FaSmokingIcon,
  FaBedIcon,
  FaFaxIcon,
  PiBowlFoodIcon,
  PiHairDryerIcon,
  PiToiletIcon,
  PiPicnicTableIcon,
  PiDiscoBallDuotoneIcon,
  MdOutlineRoomServiceIcon,
  MdBusinessCenterIcon,
  MdMeetingRoomIcon,
  MdRestaurantMenuIcon,
  MdOutlineLocalLaundryServiceIcon,
  MdOutlineDryCleaningIcon,
  MdOutlineAirportShuttleIcon,
  MdLocalAirportIcon,
  MdOutlinePetsIcon,
  MdTvIcon,
  MdCoffeeMakerIcon,
  MdOutlineIronIcon,
  MdCleaningServicesIcon,
  MdOutlineFactCheckIcon,
  MdOutlineLuggageIcon,
  MdFamilyRestroomIcon,
  MdOutlineSportsTennisIcon,
  MdOutlineGolfCourseIcon,
  MdOutlineGrassIcon,
  MdCurtainsClosedIcon,
  MdHeadphonesIcon,
  MdCurrencyExchangeIcon,
  MdDeskIcon,
  MdLocalAtmIcon,
  RiCustomerService2FillIcon,
  IoIosFitnessIcon,
  GiSleepingBagIcon,
  GiSlippersIcon,
  GiBarbecueIcon,
  GiSoundOnIcon,
  GiPillowIcon,
  GiVendingMachineIcon,
  GrLoungeIcon,
  LuParkingCircleIcon,
  TbAirConditioningIcon,
  TbDeviceMobileChargingIcon,
  TbPlayFootballIcon,
  GrBarIcon,
  GrUserFemaleIcon,
  AiOutlineSafetyIcon,
  IoLibraryOutlineIcon,
  IoTicketOutlineIcon,
  IoGameControllerOutlineIcon,
  CgModemIcon,
  SiStaffbaseIcon,
  RiVipFillIcon,
} from '../Icons/AllIcons';
import Button from '../Button';
import CustomModal from '../Modal';

const amenityTypeSeeding = [
  { name: 'Free Wi-Fi', icon: FaWifiIcon },
  { name: 'Complimentary breakfast', icon: PiBowlFoodIcon },
  { name: 'Room service', icon: MdOutlineRoomServiceIcon },
  { name: '24-hour front desk', icon: RiCustomerService2FillIcon },
  { name: 'Fitness center', icon: IoIosFitnessIcon },
  { name: 'Swimming pool', icon: FaSwimmingPoolIcon },
  { name: 'Spa and wellness center', icon: GiSleepingBagIcon },
  { name: 'Business center', icon: MdBusinessCenterIcon },
  { name: 'Conference/meeting rooms', icon: MdMeetingRoomIcon },
  { name: 'On-site restaurant', icon: MdRestaurantMenuIcon },
  { name: 'Bar/lounge', icon: GrLoungeIcon },
  { name: 'Concierge service', icon: FaConciergeBellIcon },
  { name: 'Laundry service', icon: MdOutlineLocalLaundryServiceIcon },
  { name: 'Dry cleaning service', icon: MdOutlineDryCleaningIcon },
  { name: 'Shuttle service', icon: MdOutlineAirportShuttleIcon },
  { name: 'Airport transfer', icon: MdLocalAirportIcon },
  { name: 'Valet parking', icon: LuParkingCircleIcon },
  { name: 'Self-parking', icon: LuParkingCircleIcon },
  { name: 'Pet-friendly rooms', icon: MdOutlinePetsIcon },
  { name: 'Non-smoking rooms', icon: FaSmokingBanIcon },
  { name: 'Air conditioning', icon: TbAirConditioningIcon },
  { name: 'Heating', icon: TbAirConditioningIcon },
  { name: 'Mini-bar', icon: GrBarIcon },
  { name: 'In-room safe', icon: AiOutlineSafetyIcon },
  { name: 'Flat-screen TV', icon: MdTvIcon },
  { name: 'Cable/satellite TV', icon: MdTvIcon },
  { name: 'Coffee/tea maker', icon: MdCoffeeMakerIcon },
  { name: 'Iron and ironing board', icon: MdOutlineIronIcon },
  { name: 'Hairdryer', icon: PiHairDryerIcon },
  { name: 'Complimentary toiletries', icon: PiToiletIcon },
  { name: 'Bathrobe and slippers', icon: GiSlippersIcon },
  { name: 'In-room dining', icon: MdRestaurantMenuIcon },
  { name: 'Daily housekeeping', icon: MdCleaningServicesIcon },
  { name: 'Turndown service', icon: MdOutlineRoomServiceIcon },
  { name: 'Express check-in/check-out', icon: MdOutlineFactCheckIcon },
  { name: 'Luggage storage', icon: MdOutlineLuggageIcon },
  { name: 'Babysitting/child services', icon: FaBabyCarriageIcon },
  { name: "Children's play area", icon: TbPlayFootballIcon },
  { name: 'Family rooms', icon: MdFamilyRestroomIcon },
  { name: 'Accessible rooms', icon: MdMeetingRoomIcon },
  {
    name: 'Electric vehicle charging station',
    icon: TbDeviceMobileChargingIcon,
  },
  { name: 'Bicycle rental', icon: FaBicycleIcon },
  { name: 'Car rental service', icon: FaCarIcon },
  { name: 'Gift shop', icon: FaGiftIcon },
  { name: 'Beauty salon', icon: GrUserFemaleIcon },
  { name: 'Library', icon: IoLibraryOutlineIcon },
  { name: 'Tennis court', icon: MdOutlineSportsTennisIcon },
  { name: 'Golf course', icon: MdOutlineGolfCourseIcon },
  { name: 'Garden', icon: MdOutlineGrassIcon },
  { name: 'Terrace', icon: MdMeetingRoomIcon },
  { name: 'BBQ facilities', icon: GiBarbecueIcon },
  { name: 'Picnic area', icon: PiPicnicTableIcon },
  { name: 'Smoking area', icon: FaSmokingIcon },
  { name: 'Soundproof rooms', icon: GiSoundOnIcon },
  { name: 'Blackout curtains', icon: MdCurtainsClosedIcon },
  { name: 'Pillow menu', icon: GiPillowIcon },
  { name: 'Hypoallergenic bedding', icon: FaBedIcon },
  { name: 'High-speed internet (wired)', icon: CgModemIcon },
  { name: 'Meeting and banquet facilities', icon: MdHeadphonesIcon },
  { name: 'Fax/photocopying service', icon: FaFaxIcon },
  { name: 'Currency exchange', icon: MdCurrencyExchangeIcon },
  { name: 'Tour desk', icon: MdDeskIcon },
  { name: 'Ticket service', icon: IoTicketOutlineIcon },
  { name: 'Multilingual staff', icon: SiStaffbaseIcon },
  { name: 'ATM on-site', icon: MdLocalAtmIcon },
  { name: 'Vending machines (snacks and drinks)', icon: GiVendingMachineIcon },
  { name: 'Shared lounge/TV area', icon: MdTvIcon },
  { name: 'Designated smoking area', icon: FaSmokingIcon },
  { name: 'Bridal suite', icon: MdMeetingRoomIcon },
  { name: 'VIP room facilities', icon: RiVipFillIcon },
  { name: 'Game room', icon: IoGameControllerOutlineIcon },
  { name: 'Nightclub/DJ', icon: PiDiscoBallDuotoneIcon },
];

const AmenitiesSelector = ({ formData, setFormData }) => {
  const [filterText, setFilterText] = useState('');

  const handleSelect = (name) => {
    setFormData((prevData) => ({
      ...prevData,
      amenities: prevData.amenities.includes(name)
        ? prevData.amenities.filter((item) => item !== name)
        : [...prevData.amenities, name],
    }));
  };

  const filteredAmenities = amenityTypeSeeding.filter((amenity) =>
    amenity.name.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className='p-4'>
      <input
        type='text'
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        placeholder='Search amenities...'
        className='mb-4 p-2 border border-gray-300 rounded w-full'
      />

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {filteredAmenities.map((amenity, index) => (
          <button
            key={index}
            onClick={() => handleSelect(amenity.name)}
            className={`flex items-center gap-4 p-2 border rounded-md ${
              formData.amenities.includes(amenity.name)
                ? 'bg-fg-secondary-02 text-white'
                : ''
            }`}
          >
            <amenity.icon className='text-2xl' />
            <span className='text-base'>{amenity.name}</span>
          </button>
        ))}
      </div>
      {/* <div className='mt-6'>
        <CustomModal
          trigger={
            <Button
              className='text-sm w-full md:w-1/4 lg:w-1/6 h-12 hover:bg-fg-primary-02 my-4'
              variant='contained'
            >
              Show all amenities
            </Button>
          }
        >
          <div className='h-96 w-96 px-6 pt-12'>
            <h1 className='mb-4 text-xl'>What this place offers</h1>
            <div className='flex flex-col overflow-y-auto max-h-80'>
              {amenityTypeSeeding.map((item, index) => (
                <div
                  key={index}
                  className='flex items-center gap-4 py-2 border-b'
                >
                  <item.icon className='text-2xl' />
                  <span className='text-base'>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </CustomModal>
      </div> */}
    </div>
  );
};

export default AmenitiesSelector;
