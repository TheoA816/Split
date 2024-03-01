import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

// TODO: Assume get user data from cookie - or edit props later

export default function Account() {
  return (
    <div className="flex items-center gap-3 text-splitDarkBlue px-4 py-2">
      {/* Profile Pic */}
      {/* <Image src="/{path-to-pp}" width={48} height={48} alt="Profile Picture" /> */}
      <div className="h-10 w-10 rounded-full bg-splitBlue" />

      {/* Details */}
      <div className="flex flex-col text-sm">
        <div>Username</div>
        <div>Email</div>
      </div>

      {/* Drop-down */}
      <div>
        <ChevronDownIcon className="h-5 w-5" />
      </div>
    </div>
  );
}
