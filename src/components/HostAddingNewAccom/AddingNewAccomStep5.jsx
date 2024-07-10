import React from 'react';
import * as Icons from '../Icons/AllIcons'; // Ensure this path is correct or adjust accordingly
import { useSelector } from 'react-redux';

const iconMapping = {
  FaWifiIcon: Icons.FaWifiIcon,
  PiBowlFoodIcon: Icons.PiBowlFoodIcon,
  MdOutlineRoomServiceIcon: Icons.MdOutlineRoomServiceIcon,
  RiCustomerService2FillIcon: Icons.RiCustomerService2FillIcon,
  IoIosFitnessIcon: Icons.IoIosFitnessIcon,
  FaSwimmingPoolIcon: Icons.FaSwimmingPoolIcon,
  GiSleepingBagIcon: Icons.GiSleepingBagIcon,
  MdBusinessCenterIcon: Icons.MdBusinessCenterIcon,
  MdMeetingRoomIcon: Icons.MdMeetingRoomIcon,
  MdRestaurantMenuIcon: Icons.MdRestaurantMenuIcon,
  GrLoungeIcon: Icons.GrLoungeIcon,
  FaConciergeBellIcon: Icons.FaConciergeBellIcon,
  MdOutlineLocalLaundryServiceIcon: Icons.MdOutlineLocalLaundryServiceIcon,
  MdOutlineDryCleaningIcon: Icons.MdOutlineDryCleaningIcon,
  MdOutlineAirportShuttleIcon: Icons.MdOutlineAirportShuttleIcon,
  MdLocalAirportIcon: Icons.MdLocalAirportIcon,
  LuParkingCircleIcon: Icons.LuParkingCircleIcon,
  MdOutlinePetsIcon: Icons.MdOutlinePetsIcon,
  FaSmokingBanIcon: Icons.FaSmokingBanIcon,
  TbAirConditioningIcon: Icons.TbAirConditioningIcon,
  GrBarIcon: Icons.GrBarIcon,
  AiOutlineSafetyIcon: Icons.AiOutlineSafetyIcon,
  MdTvIcon: Icons.MdTvIcon,
  MdCoffeeMakerIcon: Icons.MdCoffeeMakerIcon,
  MdOutlineIronIcon: Icons.MdOutlineIronIcon,
  PiHairDryerIcon: Icons.PiHairDryerIcon,
  PiToiletIcon: Icons.PiToiletIcon,
  GiSlippersIcon: Icons.GiSlippersIcon,
  MdCleaningServicesIcon: Icons.MdCleaningServicesIcon,
  MdOutlineFactCheckIcon: Icons.MdOutlineFactCheckIcon,
  MdOutlineLuggageIcon: Icons.MdOutlineLuggageIcon,
  FaBabyCarriageIcon: Icons.FaBabyCarriageIcon,
  TbPlayFootballIcon: Icons.TbPlayFootballIcon,
  MdFamilyRestroomIcon: Icons.MdFamilyRestroomIcon,
  TbDeviceMobileChargingIcon: Icons.TbDeviceMobileChargingIcon,
  FaBicycleIcon: Icons.FaBicycleIcon,
  FaCarIcon: Icons.FaCarIcon,
  FaGiftIcon: Icons.FaGiftIcon,
  GrUserFemaleIcon: Icons.GrUserFemaleIcon,
  IoLibraryOutlineIcon: Icons.IoLibraryOutlineIcon,
  MdOutlineSportsTennisIcon: Icons.MdOutlineSportsTennisIcon,
  MdOutlineGolfCourseIcon: Icons.MdOutlineGolfCourseIcon,
  MdOutlineGrassIcon: Icons.MdOutlineGrassIcon,
  GiBarbecueIcon: Icons.GiBarbecueIcon,
  PiPicnicTableIcon: Icons.PiPicnicTableIcon,
  FaSmokingIcon: Icons.FaSmokingIcon,
  GiSoundOnIcon: Icons.GiSoundOnIcon,
  MdCurtainsClosedIcon: Icons.MdCurtainsClosedIcon,
  GiPillowIcon: Icons.GiPillowIcon,
  CgModemIcon: Icons.CgModemIcon,
  MdHeadphonesIcon: Icons.MdHeadphonesIcon,
  FaFaxIcon: Icons.FaFaxIcon,
  MdCurrencyExchangeIcon: Icons.MdCurrencyExchangeIcon,
  MdDeskIcon: Icons.MdDeskIcon,
  IoTicketOutlineIcon: Icons.IoTicketOutlineIcon,
  SiStaffbaseIcon: Icons.SiStaffbaseIcon,
  MdLocalAtmIcon: Icons.MdLocalAtmIcon,
  GiVendingMachineIcon: Icons.GiVendingMachineIcon,
  RiVipFillIcon: Icons.RiVipFillIcon,
  IoGameControllerOutlineIcon: Icons.IoGameControllerOutlineIcon,
  PiDiscoBallDuotoneIcon: Icons.PiDiscoBallDuotoneIcon,
};

const HostAddingNewAccomStep5 = ({ formData, prevStep, handleSubmit }) => {
  const { accom, room } = useSelector((state) => state.hostForm);

  return (
    <div className='max-w-4xl mx-auto p-8'>
      <div className='bg-fg-primary-02 bg-opacity-75 w-full text-center items-center rounded-xl'>
        <h1 className='text-2xl font-medium mb-6 p-4'>Review Your Details</h1>
      </div>

      <div className='mb-8 w-full bg-white border-[2px] border-gray-300 rounded-xl p-3 shadow-md'>
        <h2 className='text-xl font-semibold mb-4'>Accommodation Type</h2>
        <p>{formData.selectedType}</p>
      </div>

      <div className='mb-8 w-full bg-white border-[2px] border-gray-300 rounded-xl p-3 shadow-md'>
        <h2 className='text-xl font-semibold mb-4'>Address</h2>
        <p>{formData.address}</p>
        <p>
          {formData.district}, {formData.province}, {formData.country}
        </p>
      </div>

      <div className='mb-8 w-full bg-white border-[2px] border-gray-300 rounded-xl p-3 shadow-md'>
        <h2 className='text-xl font-semibold mb-4'>Rooms and Bed Types</h2>
        {room.roomList.map((room, index) => (
          <div key={index}>
            <p>
              <strong>Room {index + 1}:</strong> {room.roomType}
            </p>
            <p>Bed Type: {room.bedType}</p>
            <p>Bed Quantity: {room.bedQuantity}</p>
            <p>Bedroom: {room.bedroom}</p>
            <p>Bathroom: {room.bathroom}</p>
            <p>Size: {room.size} sqm.</p>
          </div>
        ))}
      </div>

      <div className='mb-8 w-full bg-white border-[2px] border-gray-300 rounded-xl p-3 shadow-md'>
        <h2 className='text-xl font-semibold mb-4'>Amenities</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {room.amenities.map((amenity, index) => {
            const IconComponent = iconMapping[amenity.icon];
            return (
              <div
                key={index}
                className='flex items-center gap-2 p-2 border rounded-md'
              >
                {IconComponent && <IconComponent className='text-2xl' />}
                <span className='text-base'>{amenity.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className='mb-8 w-full bg-white border-[2px] border-gray-300 rounded-xl p-3 shadow-md'>
        <h2 className='text-xl font-semibold mb-4'>Photos</h2>
        <div className='flex flex-wrap justify-center'>
          {formData.photos.map((photo, index) => (
            <div key={index} className='m-2 '>
              <img
                src={URL.createObjectURL(photo)}
                alt={`Uploaded ${index}`}
                className='w-56 h-56 object-cover'
              />
            </div>
          ))}
        </div>
      </div>

      <div className='mb-8 w-full bg-white border-[2px] border-gray-300 rounded-xl p-3 shadow-md '>
        <h2 className='text-xl font-semibold mb-4'>House Title</h2>
        <p>{formData.name}</p>
      </div>

      <div className='mb-8 w-full bg-white border-[2px] border-gray-300 rounded-xl p-3 shadow-md'>
        <h2 className='text-xl font-semibold mb-4'>Description</h2>
        <p>{formData.description}</p>
      </div>

      <div className='mb-8 w-full bg-white border-[2px] border-gray-300 rounded-xl p-3 shadow-md'>
        <h2 className='text-xl font-semibold mb-4'>House Rules</h2>
        <p>{formData.houseRule}</p>
      </div>

      <div className='mb-8 w-full bg-white border-[2px] border-gray-300 rounded-xl p-3 shadow-md'>
        <h2 className='text-xl font-semibold mb-4'>Price per Night</h2>
        <p>{formData.price}</p>
      </div>

      <div className='flex justify-between'>
        <button
          type='button'
          onClick={prevStep}
          className='px-6 py-2 bg-gray-400 hover:bg-gray-500 text-white font-medium rounded-md'
        >
          Previous
        </button>
        <button
          type='button'
          onClick={handleSubmit}
          className='px-6 py-2 bg-fg-primary-01 hover:bg-amber-600 text-white font-medium rounded-md shadow-lg'
        >
          Confirm and Submit
        </button>
      </div>
    </div>
  );
};

export default HostAddingNewAccomStep5;
