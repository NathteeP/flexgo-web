import React from 'react';
import { Breadcrumbs, Link, TextField, Button } from '@mui/material';
import ProductCard from '../components/ProductCard';
import CustomButton from '../components/Button';

const AccommodationSearchListPage = () => {
  const productData = Array(15).fill({
    title: 'THE STANDARD HUAHIN',
    price: '$1999/D',
    distance: '0.7 Km.',
    rating: 5,
    imageUrl:
      'https://i.pinimg.com/originals/06/2b/75/062b75b3c882ce0ba9644cb0143a9f18.jpg',
  });
  return (
    <div className='p-8 bg-white min-h-screen mx-12'>
      <Breadcrumbs aria-label='breadcrumb'>
        <Link underline='hover' color='inherit' href='#'>
          Home
        </Link>
        <Link underline='hover' color='inherit' href='#'>
          Assets Search
        </Link>
        <Link underline='hover' color='inherit' href='#' aria-current='page'>
          CHAMPZA MOTEL
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
          defaultValue='Wed, July 10 - Sat, July 13'
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
          {productData.map((product, index) => (
            <ProductCard key={index} {...product} />
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
