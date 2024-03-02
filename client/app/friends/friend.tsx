import React, { FC } from 'react';
import Image from 'next/image';
import { TrashIcon } from '@heroicons/react/24/solid';

interface FriendProps {
  profilepicture: string;
  name: string;
}

const FriendComponent: FC<FriendProps> = ({ profilepicture, name }) => {
  return (
    <div className='flex justify-between bg-white h-[72px] rounded-2xl shadow-lg backdrop-blur mt-3 min-w-60'>

      <button className='flex-shrink-0'>
        <div className='flex pl-6 py-4 items-center'>
          <Image src={profilepicture} alt={name} width={40} height={40} className='rounded-full'/>
          <h1 className='pl-3 font-bold text-base font-balsamiq-sans text-splitDarkBlue'>{name}</h1>
        </div>
      </button>
      <div className='flex pr-6 items-center flex-shrink-0'>
        <button>
          <TrashIcon className='w-6 h-6 text-splitDarkBlue'></TrashIcon>
        </button>
      </div>
      
    </div>
  );
};

export default FriendComponent;
