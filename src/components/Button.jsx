import { Button as MUIButton } from '@mui/material';
import React from 'react';

function Button({
  children,
  className = `hover:bg-fg-primary-02 active:bg-fg-white`,
  onClick,
  variant,
}) {
  return (
    <MUIButton
      className={`${className}  bg-fg-primary-01 w-[132px] h-[42px] text-[16px] text-white  normal-case font-normal border-fg-white rounded-xl`}
      onClick={onClick}
      variant={variant}
    >
      {children}
    </MUIButton>
  );
}

export default Button;
