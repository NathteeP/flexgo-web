import profileImage from '../assets/images/Profile/blankProfile.png';

const Avatar = ({ src, size = 300 }) => {
  return (
    <img
      src={src ? src : profileImage}
      alt='user'
      style={{ width: `${size}px`, height: `${size}px` }}
      className='rounded-full object-cover'
    />
  );
};

export default Avatar;
