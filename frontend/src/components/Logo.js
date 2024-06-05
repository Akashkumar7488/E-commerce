import React from 'react';
import logo from '../../src/Images/logo1.png';

const Logo = ({ w, h }) => {
  return (
    <div className='flex items-center justify-center pt-2 font-bold'>
      <p className='pb-6'>Shop here</p>
      <svg width={w} height={h} viewBox="0 0 370.16679528778167 155.08501865265873" style={{ display: 'block' }}>
      <image xlinkHref={logo} width={w} height={h} />
    </svg>
    </div>
  );
};

export default Logo;
