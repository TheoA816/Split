import { PaperAirplaneIcon } from "@heroicons/react/20/solid";

export function FriendRequest() {
  return (
    <form
      name="add-friends"
      className="flex items-center justify-between gap-3"
    >
      <input
        type="email"
        placeholder="You can add friends with their email"
        className="rounded-2xl flex-grow pl-4 bg-splitBlue bg-opacity-10 h-14 text-black text-opacity-50 outline-none"
      />
      <button
        type="submit"
        className="flex w-64 flex-grow-0 h-14 rounded-full bg-splitDarkBlue items-center justify-evenly px-6 hover:bg-splitDarkBlue/80 duration-200"
      >
        <PaperAirplaneIcon className="w-6 h-6 text-white"></PaperAirplaneIcon>
        <p className="text-base text-white">Send friend request</p>
      </button>
    </form>
  );
}
