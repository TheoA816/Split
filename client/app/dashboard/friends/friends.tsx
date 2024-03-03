"use client";
import Link from "next/link";
import { ArrowRightIcon, PlusIcon } from "@heroicons/react/24/outline";
import Avatar from "@/app/dashboard/friends/avatar";
import { FormEvent, useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { get, post } from "@/util/request";
import { useSession } from "next-auth/react";

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

export type Friend = { email: string; name: string; profilePic: string };

export default function Friends() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [friends, setFriends] = useState<Friend[]>([]);

  useEffect(() => {
    const fetchFriends = async () => {
      const friends = await get(
        "/friends",
        {},
        { authorization: user.authorization }
      );
      setFriends(friends);
    };
    fetchFriends();
  }, []);

  const { data: session } = useSession();
  const user = session?.user as {
    authorization: string;
    id: string;
    username: string;
    profilePicture: string;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const res = await post(
      "/add/friend",
      { email },
      {
        authorization: user.authorization,
        id: user.id,
      }
    );
    console.log(res);
  };

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
        {/* Add friend icon */}
        <div className="flex flex-col items-center">
          <button
            onClick={() => setShowModal(true)}
            className="flex justify-center items-center w-20 h-20 rounded-full border border-dashed border-splitDarkBlue"
          >
            <PlusIcon className="w-8 h-8" />
          </button>
          <span>Add friends</span>
        </div>
        {/* Add friend modal */}
        {showModal && (
          <div className="w-screen h-screen fixed flex justify-center items-center top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-splitDarkBlue bg-opacity-50">
            <Card typeof="form" className="w-[350px]">
              <CardHeader>
                <CardTitle>Add friend</CardTitle>
                <CardDescription>Enter their email below!</CardDescription>
              </CardHeader>
              <CardContent>
                <form id="addFriend" onSubmit={handleSubmit}>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        onChange={(e) => setEmail(e.target.value)}
                        id="email"
                      />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button onClick={() => setShowModal(false)} variant="outline">
                  Cancel
                </Button>
                <Button form="addFriend" type="submit">
                  Add
                </Button>
              </CardFooter>
            </Card>
          </div>
        )}
        {/* Friends */}
        {friends.map((friend) => (
          <Avatar
            key={friend.name}
            url={friend.profilePic}
            username={friend.name}
          />
        ))}
      </div>
    </div>
  );
}
