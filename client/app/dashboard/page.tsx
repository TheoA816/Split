import User from "@/app/dashboard/user/user";
import Friends from "@/app/dashboard/friends/friends";
import History from "@/app/dashboard/history/history";

export default function Dashboard() {
  return (
    <div className="pb-10">
      <User />
      <Friends />
      <History />
    </div>
  );
}
