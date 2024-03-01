import React from 'react';
import Participants from './participants';

export default function page() {
  return (
    <div className="px-16 py-10 border text-splitBlack50">
      <div className='font-semibold'>Back</div>
      <div className='w-1/2'>
        <div className="flex flex-col gap-10">
          <div className="flex justify-between">
            <div>
              <div className='text-4xl font-bold text-splitDarkBlue'>Maccas</div>
              <div className='opacity-75'>Mar 1st 2024 · 00:33</div>
            </div>
            <div className='flex flex-col items-end'>
              <div className='opacity-75'>Total bill</div>
              <div className='font-bold text-2xl text-splitDarkBlue'>$69.00 AUD</div>
            </div>
          </div>
          <div>
            <div className='text-2xl font-bold text-splitDarkBlue'>Items</div>
            <div className="flex justify-between">
              <div className='opacity-75'>Random item #1 (1)</div>
              <div className='opacity-75'>$6.9</div>
            </div>
            <div className="flex justify-between">
              <div className='opacity-75 text-lg font-semibold'>Total</div>
              <div className='opacity-75 text-lg font-semibold'>$6.9</div>
            </div>
          </div>
          <div>
            <div className='font-bold text-2xl text-splitDarkBlue'>Additional costs</div>
            <div className="flex justify-between">
              <div className='opacity-75'>Taxes</div>
              <div className='opacity-75'>$6.9</div>
            </div>
            <div className="flex justify-between">
              <div className='opacity-75 font-semibold text-lg'>Total Additional Costs</div>
              <div className='opacity-75 font-semibold text-lg'>$6.9</div>
            </div>
          </div>
          <div className='flex flex-col gap-5'>
            <div className='text-xl font-bold text-splitDarkBlue'>List of participants</div>
            <div className="flex flex-col gap-4">
              {Array.from({ length: 4 }).map((_, idx) => (
                <Participants key={idx} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <button className='border w-full py-3 mb-5 mt-16 border-dashed border-splitDarkBlue rounded-xl font-bold text-splitDarkBlue'>Add participants</button>
      <button className='border w-full py-3 rounded-xl bg-splitDarkBlue text-splitWhite font-bold'>Confirm split bill</button>
    </div>
  );
}
