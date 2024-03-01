import React, { FC } from 'react';
import Image from 'next/image';
import { TrashIcon } from '@heroicons/react/24/solid';

interface FriendProps {
  image: string;
  name: string;
}

const FriendComponent: FC<FriendProps> = ({ image, name }) => {
  return (
    <div className='flex justify-between bg-white h-[72px] rounded-2xl shadow-lg backdrop-blur'>

      <div className='flex pl-6 py-4 w-[154px] items-center'>
        <Image src={image} alt={name} width={40} height={40} className='rounded-full'/>
        <h1 className='pl-3 font-bold text-16 font-balsamiq-sans text-splitDarkBlue'>{name}</h1>
      </div>

      <div className='flex pr-6 items-center'>
        <button>
          <TrashIcon className='w-6 h-6 text-splitDarkBlue'></TrashIcon>
        </button>
      </div>
      
    </div>
  );
};

export default FriendComponent;
