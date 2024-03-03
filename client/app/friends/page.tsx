"use client";

import { get } from "@/util/request";
import Navbar from "../header/navbar/nav";
import FriendComponent from "./friend";
import { FriendRequest } from "./friendrequest";
import { useSession } from "next-auth/react";
import { Friend } from "@/lib/types";
import { useEffect, useState } from "react";

export default function Page() {
  const [friends, setFriends] = useState<Friend[]>([]);

  const { data: session } = useSession();
  const user = session?.user as {
    authorization: string;
    id: string;
    username: string;
    profilePicture: string;
  };

  // TODO - given time, store in local storage / react context instead of pulling same data over and over
  useEffect(() => {
    const fetchFriends = async () => {
      const friends = await get(
        "/friends",
        {},
        { authorization: user.authorization, id: user.id }
      );
      setFriends(friends);
    };
    fetchFriends();
  }, [user.authorization, user.id]);

  return (
    <>
      <Navbar />
      <div className="">
        <h1 className="font-bold text-3xl font-balsamiq-sans text-splitDarkBlue pb-3">
          Add friends
        </h1>
        <FriendRequest></FriendRequest>
        <h1 className="font-bold text-3xl font-balsamiq-sans text-splitDarkBlue pt-3">
          Friends list
        </h1>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {/* Loop through dummy data array */}
          {friends.map((friend) => (
            <FriendComponent
              key={friend.name}
              profilepicture={friend.profilePic}
              name={friend.name}
            />
          ))}
        </div>
      </div>
    </>
  );
}
