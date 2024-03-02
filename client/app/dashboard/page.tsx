import User from "@/app/dashboard/user/user";
import Friends from "@/app/dashboard/friends/friends";
import History from "@/app/dashboard/history/history";
import Navbar from "../header/navbar/nav";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <div>
        <User />
        <Friends />
        <History />
      </div>
    </>
  );
}
