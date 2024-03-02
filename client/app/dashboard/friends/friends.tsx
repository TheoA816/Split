import Link from "next/link";
import { ArrowRightIcon, PlusIcon } from "@heroicons/react/24/outline";
import Avatar from "@/app/dashboard/friends/avatar";

const avatars = [
  {
    profilePic: "/avatar_1.png",
    username: "Esther",
  },
  {
    profilePic: "/avatar_2.png",
    username: "Merry",
  },
];

export default function Friends() {
  return (
    <div className="flex flex-col gap-5 text-splitDarkBlue pb-8">
      {/* Top Section */}
      <div className="flex justify-between">
        <span className="text-2xl">Recent friends</span>
        <Link href="/friends" className="flex">
          <span>See more</span>
          <ArrowRightIcon />
        </Link>
      </div>
      {/* Avatars - TODO (replace with actual friends later + Add friend button) */}
      <div className="flex gap-3">
        {/* Add friend */}
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center w-20 h-20 rounded-full border border-dashed border-splitDarkBlue">
            <PlusIcon className="w-8 h-8" />
          </div>
          <span>Add friends</span>
        </div>
        {/* Friends */}
        {avatars.map((avatar) => (
          <Avatar
            key={avatar.username}
            url={avatar.profilePic}
            username={avatar.username}
          />
        ))}
      </div>
    </div>
  );
}
