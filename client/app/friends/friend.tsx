import React, { FC } from "react";
import Image from "next/image";
import { TrashIcon } from "@heroicons/react/24/solid";

interface FriendProps {
  profilepicture: string;
  name: string;
}

const FriendComponent: FC<FriendProps> = ({ profilepicture, name }) => {
  return (
    <div className="flex justify-between p-4 shadow-md rounded-md">
      <div className="flex gap-2 items-center max-w-[calc(100%_-_32px)]">
        <Image
          src={profilepicture}
          alt={name}
          width={40}
          height={40}
          className="rounded-full"
        />
        <span className="font-bold font-balsamiq-sans text-splitDarkBlue truncate text-ellipsis">
          {name}
        </span>
      </div>
      <button>
        <TrashIcon className="w-6 h-6 text-splitDarkBlue"></TrashIcon>
      </button>
    </div>
  );
};

export default FriendComponent;
