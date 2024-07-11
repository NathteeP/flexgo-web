import React from 'react';
import TitlePage from '../../layouts/TitlePage';
import Button from '../Button';
import { Rating } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReviewByReservationId, resetValidationError, setReview, setValidationError } from '../../store/slices/review-slice';
import { toast } from 'sonner';
import reviewsApi from '../../api/reviews';

const UserReview = ({reservationId}) => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchReviewByReservationId(reservationId))

    return () => {
      dispatch(resetValidationError())
    }
  },[dispatch, reservationId])

  const reviewData = useSelector((state) => state.review.reviewData)
  const validationError = useSelector((state) => state.review.validationError);
  const {
    ratingType1 = 0, 
    ratingType2 = 0, 
    ratingType3 = 0,
    ratingType4 = 0,
    comment = '',
  } = reviewData || {}


  const handleTextChange = (e) => {
    const { name, value } = e.target;
    dispatch(setReview({
      [name]: value,
    }));
  };

  const handleRatingChange = (name, value) => {
    dispatch(setReview({
      [name]: value,
    }))
    dispatch(setValidationError({[name] : false}))
  };

  const validateReview = () => {
    const errors = {};
    if (ratingType1 === 0) errors.ratingType1 = true;
    if (ratingType2 === 0) errors.ratingType2 = true;
    if (ratingType3 === 0) errors.ratingType3 = true;
    if (ratingType4 === 0) errors.ratingType4 = true;
    if (Object.keys(errors).length > 0) {
      dispatch(setValidationError(errors));
      return false;
    }

    dispatch(setValidationError({}));
    return true;
  };

  const handleSubmitReview = async (e) => {
    e.preventDefault()
    if (!validateReview()) {
      return;
    }

    try {
      const reviewBody = {
        ...reviewData,
        reservationId
      }
      await reviewsApi.create(reservationId, reviewBody)
      toast.success('Review submitted')
    } catch (err) {
      console.log(err)
      toast.error('Review submit error')
    }
  }

  return (
    <form onSubmit={handleSubmitReview}>
      <div className='lg:w-[1000px] lg:h-[700px] rounded-full'>
        <div className='w-[90%] m-auto pt-10'>
          <TitlePage>Review</TitlePage>
          <div className='mt-5 flex justify-between'>
            <div className={`text-center h-[200px] w-[200px] rounded-[40px] flex flex-col justify-center items-center gap-4 hover:scale-[103%] transition-all duration-300 ${
              validationError.ratingType1 ? 'bg-red-300' : `bg-[#3c2f1e]/10`
            }`}>
              <p className=''>SERVICES</p>
              <Rating
                name='ratingType1'
                value={ratingType1}
                onChange={(e, newValue) => handleRatingChange('ratingType1', newValue)}
                size='large'
                className=''
                disabled={!!reviewData?.id}
              />
            </div>
            <div className={`text-center h-[200px] w-[200px] rounded-[40px] flex flex-col justify-center items-center gap-4 hover:scale-[103%] transition-all duration-300 ${
              validationError.ratingType2 ? 'bg-red-300' : `bg-[#3c2f1e]/10`
            }`}>
              <p className=''>FACILITIES</p>
              <Rating
                name='ratingType2'
                value={ratingType2}
                onChange={(e, newValue) => handleRatingChange('ratingType2', newValue)}
                size='large'
                className=''
                disabled={!!reviewData?.id}
              />
            </div>
            <div className={`text-center h-[200px] w-[200px] rounded-[40px] flex flex-col justify-center items-center gap-4 hover:scale-[103%] transition-all duration-300 ${
              validationError.ratingType3 ? 'bg-red-300' : `bg-[#3c2f1e]/10`
            }`}>
              <p className=''>CLEANLINESS</p>
              <Rating
                name='ratingType3'
                value={ratingType3}
                onChange={(e, newValue) => handleRatingChange('ratingType3', newValue)}
                size='large'
                className=''
                disabled={!!reviewData?.id}
              />
            </div>
            <div className={`text-center h-[200px] w-[200px] rounded-[40px] flex flex-col justify-center items-center gap-4 hover:scale-[103%] transition-all duration-300 ${
              validationError.ratingType4 ? 'bg-red-300' : `bg-[#3c2f1e]/10`
            }`}>
              <p className=''>LOCATION</p>
              <Rating
                name='ratingType4'
                value={ratingType4}
                onChange={(e, newValue) => handleRatingChange('ratingType4', newValue)}
                size='large'
                className=''
                disabled={!!reviewData?.id}
              />
            </div>
          </div>
          <textarea
            id='comment'
            name='comment'
            value={comment}
            onChange={handleTextChange}
            className='p-4 mt-10 block bg-[#3c2f1e]/10 rounded-lg w-full h-[250px] px-4 text-gray-600 text-lg items-start text-start hover:scale-[103%] active:scale-95 hover:ring-[3px] hover:ring-fg-primary-01 transition-all duration-300 focus:outline-none'
            rows='5'
            disabled={!!reviewData?.id}
          />
          <div className='flex justify-end mt-5'>
            {!reviewData?.id && (
              <Button
                type='submit'
                className=' bg-fg-primary-01 text-white hover:bg-fg-primary-02 px-6 py-2 rounded-lg text-lg transition transform duration-200 ease-in-out hover:scale-105 active:scale-95'
              >
                REVIEW
              </Button>
            )}
          </div>
        </div>
      </div>
    </form>
  );
};

export default UserReview;
