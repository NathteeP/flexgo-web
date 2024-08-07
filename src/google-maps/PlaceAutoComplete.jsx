import { useRef } from 'react';
import { Autocomplete, useJsApiLoader } from '@react-google-maps/api';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import { libraries } from '../constant/google-map';
import { HiMagnifyingGlass } from 'react-icons/hi2';

const PlaceAutoComplete = ({
  setAddress,
  setPlace,
  placeholder,
  boxClass,
  inputClass,
  showGlass,
}) => {
  const inputRef = useRef();
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
    libraries: libraries,
  });

  const onPlaceChanged = async () => {
    if (!inputRef.current.value) return;
    const results = await getGeocode({ address: inputRef.current.value });
    if (setAddress) {
      setAddress(results[0].formatted_address);
    }
    const { lat, lng } = await getLatLng(results[0]);
    setPlace({ lat, lng });
  };

  if (!isLoaded) return null;
  return (
    <div
      className={`w-full gap-2 ${boxClass ? boxClass : 'border border-fg-grey rounded-lg'} border-black/20 border-[1px] flex rounded-xl hover:scale-105 transition-all duration-300 hover:translate-x-3 `}
    >
      <div className='w-[50px] h-[48px] flex justify-center items-center bg-white rounded-xl'>
        <HiMagnifyingGlass className='text-2xl text-fg-text-black rounded-xl' />
      </div>

      <div className='w-full'>
        <Autocomplete onPlaceChanged={onPlaceChanged}>
          <input
            ref={inputRef}
            className={
              inputClass ||
              'w-full h-[48px] border-none focus:outline-none text-sm pl-2 pr-2 rounded-xl'
            }
            type='text'
            placeholder={placeholder}
          />
        </Autocomplete>
      </div>
    </div>
  );
};

export default PlaceAutoComplete;
