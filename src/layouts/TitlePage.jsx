import React from 'react';

const TitlePage = ({ children }) => {
  return (
    <div className='h-[60px] bg-fg-primary-01 rounded-[20px] flex items-center pl-12 text-4xl text-fg-white'>
      <h1>{children}</h1>
    </div>
  );
};

export default TitlePage;
