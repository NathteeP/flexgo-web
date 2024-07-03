import profileImage from '../assets/images/Profile/blankProfile.png';
export default function Avatar({ src, size = 300 }) {
  // console.log('profileImg::: ', profileImage);
  return (
    <img
      src={src || profileImage}
      alt='user'
      style={{ width: `${size}px`, height: `${size}px` }}
      className='rounded-full'
    />
  );
}
