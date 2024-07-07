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
  const { desiredLocation, date } = useSelector((state) => state.info);
  const { accomsList } = useSelector((state) => state.accoms);

  const navigate = useNavigate('/');
  const onClickNavigate = (to) => navigate(to);

  useEffect(() => {
    if (accomsList.length < 1) {
      dispatch(fetchAvailAccom());
    }
  }, [dispatch, accomsList]);

  return (
    <div className='p-8 bg-white min-h-screen mx-12'>
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
        <TextField
          label='Location'
          defaultValue='Bangkok, Thailand | Within 1Km.'
          variant='outlined'
          className='mr-4'
          fullWidth
        />
        <TextField
          label='Date'
          defaultValue={
            dayjs(date.checkInDate).format('DD MMMM') +
            ' to ' +
            dayjs(date.checkOutDate).format('DD MMMM')
          }
          variant='outlined'
          className='mr-4'
          fullWidth
        />
        <TextField
          label='Guests'
          defaultValue='2 adults, 0 children, 1 room'
          variant='outlined'
          className='mr-4'
          fullWidth
        />
        <CustomButton
          variant='contained'
          className='w-52 hover:bg-fg-secondary-02'
        >
          Filter
        </CustomButton>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
        <div className='lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {accomsList.map((product, index) => (
            <ProductCard
              key={index}
              id={product.id}
              title={product.name}
              price={product.price}
              distance={product.distance}
              rating={product.reviews.overAllReview}
              imageUrl={product.accomPhoto[0].imagePath}
            />
          ))}
        </div>

        <div>
          <div className='sticky top-4 p-8 bg-white shadow rounded'>
            <h2 className='text-xl font-semibold mb-4'>Map</h2>
            <img
              src='https://i.pinimg.com/564x/0b/8a/78/0b8a788dfe83416efe517e3ef089dea9.jpg'
              alt='Map'
              className='w-full'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccommodationSearchListPage;
