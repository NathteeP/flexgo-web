import { defaultAddress } from './google-map';

export const INIT_ROOM = {
  roomType: 'Standard Room',
  beds: { type: 'Single bed', amount: 1 },
  capacity: 4,
  price: '',
  amenities: [],
  accomId: '',
  bathRoom: '',
  bedRoom: '',
  size: '',
  name: '',
  roomId: '',
};

export const INIT_ACCOM = {
  type: 'House',
  country: '',
  address: '',
  district: '',
  province: '',
  name: '',
  description: '',
  houseRule: {
    checkIn: '',
    checkOut: '',
    petsRule: '',
    ageRule: '',
    cancelPolicy: 'FLEXIBLE',
  },
  coordinate: defaultAddress.coordinate,
};
