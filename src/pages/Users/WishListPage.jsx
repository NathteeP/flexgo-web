import React from 'react';
import WishListCard from '../../components/WishListCard';
import { Breadcrumbs, Link } from '@mui/material';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAuthUser } from '../../store/slices/user-slice';

const WishListPage = () => {
  const productData = Array(6).fill({
    title: 'THE STANDARD HUAHIN',
    price: '$1999/D',
    distance: '0.7 Km.',
    rating: 5,
    imageUrl:
      'https://i.pinimg.com/originals/06/2b/75/062b75b3c882ce0ba9644cb0143a9f18.jpg',
  });

  const allWishList = useSelector((state) => state.user.authUser?.wishList)
  const dispatch = useDispatch()
  const [displayingWishList, setDisplayingWishList] = useState([])

  useEffect(() => {
    dispatch(fetchAuthUser())
  },[])

  useEffect(() => {
      setDisplayingWishList(allWishList)
  }, [allWishList])


  return (
    <div className='p-8 bg-white min-h-screen mx-6'>
      <Breadcrumbs aria-label='breadcrumb'>
        <Link underline='hover' color='inherit' href='/'>
          Home
        </Link>
        <Link underline='hover' color='inherit' href='/wishList'>
          My Wishlist
        </Link>
      </Breadcrumbs>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mx-16 my-8'>
        <h1 className='font-semibold text-fg-text-black text-2xl'>
          My Wishlist{' '}
        </h1>
        <div className='lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4'>
          {displayingWishList?.length > 0 ?
          displayingWishList?.map((product) => (
            <WishListCard key={product.id} {...product?.accom} />)) :
            <h2>There is no accom on your wishlist yet..</h2>
          }
        </div>
      </div>
    </div>
  );
};

export default WishListPage;
