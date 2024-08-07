import { Button as MUIButton } from '@mui/material';
import React from 'react';

function Button({
  children,
  className = `hover:bg-fg-primary-02 active:bg-fg-white text-white h-[42px] text-[16px]`,
  onClick,
  variant,
  type,
}) {
  return (
    <MUIButton
      className={`${className}  bg-fg-primary-01 w-[132px]    normal-case font-normal border-fg-white rounded-xl`}
      onClick={onClick}
      variant={variant}
      type={type}
    >
      {children}
    </MUIButton>
  );
}

export default Button;
