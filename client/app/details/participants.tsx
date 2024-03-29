import React from 'react';
import { PencilIcon } from '@heroicons/react/24/outline';


export default function participants() {
  return (
    <div className="flex items-center justify-between text-splitDarkBlue font-semibold">
      <div className="w-12 h-12 rounded-full bg-splitBlue25 opacity-25"></div>
      <div className="flex flex-col w-2/3 gap-1">
        <div>Merry Rosalie (You)</div>
        <div className='h-3.5 relative'>
          <div className="h-full rounded-lg bg-splitBlue25 opacity-25 relative"></div>
          <div className="w-2/3 bg-splitBlue h-full absolute inset-0 rounded-md"></div>
        </div>
      </div>
      <div className="flex gap-3">
        <div className='text-lg'>$15.00 AUD</div>
        <PencilIcon className='w-6 h-6' />
      </div>
    </div>
  );
}
