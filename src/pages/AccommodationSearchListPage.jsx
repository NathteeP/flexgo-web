import React from 'react';
import { Breadcrumbs, Link, TextField, Button } from '@mui/material';
import ProductCard from '../components/ProductCard';
import CustomButton from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAvailAccom } from '../store/slices/accoms-slice';
import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday';
import SearchBar from '../components/SearchBar';
import MapWrapper from '../google-maps/MapWrapper';

dayjs.extend(weekday);

const AccommodationSearchListPage = () => {
  const productData = Array(15).fill({
    title: 'THE STANDARD HUAHIN',
    price: '$1999/D',
    distance: '0.7 Km.',
    rating: 5,
    imageUrl:
      'https://i.pinimg.com/originals/06/2b/75/062b75b3c882ce0ba9644cb0143a9f18.jpg',
  });

  const dispatch = useDispatch();
  const { accomsList } = useSelector((state) => state.accoms);
  const allWishList = useSelector((state) => state.user.authUser?.wishList);

  //================WISHLIST LOGIC================================

  const cloneAccomsList = accomsList.map((el) => {
    return {
      ...el,
      isOnUserWishList: Boolean(
        allWishList?.find((wlEl) => wlEl.accomId === el.id)
      ),
    };
  });

  const navigate = useNavigate('/');
  const onClickNavigate = (to) => navigate(to);

  useEffect(() => {
    if (accomsList.length < 1) {
      dispatch(fetchAvailAccom());
    }
  }, [dispatch, accomsList]);

  return (
    <div className='p-2 md:p-8 bg-white min-h-screen md:mx-12 w-full'>
      <Breadcrumbs aria-label='breadcrumb'>
        <Link
          onClick={() => onClickNavigate('/')}
          className='hover:cursor-pointer'
          underline='hover'
          color='inherit'
        >
          Home
        </Link>
        <Link underline='hover' color='inherit' href='#'>
          Assets Search
        </Link>
      </Breadcrumbs>

      <div className='flex justify-between items-center my-8'>
        <SearchBar />
      </div>

      <div className='relative h-full grid grid-cols-1 lg:grid-cols-3 gap-8 w-full '>
        <div className='relative  lg:col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:w-[1000px] h-full md:ml-20 w-full items-center justify-center'>
          {cloneAccomsList.map((product, index) => (
            <ProductCard
              key={index}
              id={product.id}
              title={product.name}
              price={product.price}
              distance={product.distance}
              rating={product.reviews.overAllReview}
              imageUrl={product.accomPhoto[0].imagePath}
              isOnUserWishList={product.isOnUserWishList}
            />
          ))}
        </div>

        <div>
          <div className='relative lg:sticky top-4 p-10 bg-white shadow rounded-[40px]'>
            <h2 className='text-xl font-semibold mb-4'></h2>
            <div className='rounded-[40px] overflow-hidden flex justify-center'>
              <MapWrapper mapWithMarker={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccommodationSearchListPage;
