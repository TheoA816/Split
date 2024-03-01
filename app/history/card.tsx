import React from 'react';

export default function Card() {
  return (
    <div className="w-1/2 border-t border-b border-splitBlue py-4 px-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-5 h-5 rounded-full bg-blue-500"></div>
          <div className="">Maccas</div>
        </div>
        <div>$69.00 AUD</div>
      </div>
      <div className='flex'>
        {Array.from({ length: 6 }).map((_, idx) => (
          <div key={idx} className="w-10 h-10 rounded-full bg-splitBlue -mx-2 border-white border"></div>
        ))}
      </div>
    </div>
  );
}
