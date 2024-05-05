import React from 'react';
import Space from '../assets/space.jpg';

const Birthday = () => {
  return (
    <div className="relative w-full h-full">
      <div
        className="absolute inset-0 bg-cover bg-center bg-opacity-50 rounded-lg"
        style={{ backgroundImage: `url(${Space})` }}
      ></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-sky-800 bg-opacity-75 rounded-lg">
        <div className="text-xl text-center">Edad</div>
        <div className="text-8xl font-semibold text-center">22</div>
        <div className="text-2xl font-semibold text-center">años</div>
      </div>
    </div>
  );
};

export default Birthday;

