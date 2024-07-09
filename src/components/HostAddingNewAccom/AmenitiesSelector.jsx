import React, { useState } from 'react';
import * as Icons from '../Icons/AllIcons'; // เอาทุกอันใช้ * ได้เด้อ
import Button from '../Button';
import CustomModal from '../Modal';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  addRoomAmenities,
  setRoomFormData,
} from '../../store/slices/hostForm-slice';

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

const AmenitiesSelector = () => {
  const [filterText, setFilterText] = useState('');
  const { amenities } = useSelector((state) => state.amenities);
  const { room } = useSelector((state) => state.hostForm);
  const dispatch = useDispatch();
  const filteredAmenities = amenities.filter((amenity) =>
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
        {filteredAmenities.map((amenity, index) => {
          const IconComponent = iconMapping[amenity.icon];
          return (
            <button
              key={index}
              onClick={() =>
                dispatch(
                  addRoomAmenities({
                    id: amenity.id,
                    name: amenity.name,
                    icon: amenity.icon,
                  })
                )
              }
              className={`flex items-center gap-4 p-2 border rounded-md ${
                room.amenities.some((item) => item.id === amenity.id)
                  ? 'bg-fg-secondary-02 text-white'
                  : ''
              }`}
            >
              {IconComponent && <IconComponent className='text-2xl' />}
              <span className='text-base'>{amenity.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default AmenitiesSelector;
