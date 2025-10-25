import React from 'react';
import swiming from '../assets/swimming.png';
import classimg from '../assets/class.png';
import payGround from '../assets/playground.png';
const Qzone = () => {
  return (
    <div className="bg-base-200 p-3">
      <h2 className="font-bold mb-5">QZone</h2>
      <div className='flex flex-col items-center justify-center'>
        <img src={swiming} alt="" />
        <img src={classimg} alt="" />
        <img src={payGround} alt="" />
      </div>
    </div>
  );
};

export default Qzone;
