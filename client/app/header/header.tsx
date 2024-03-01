import NavBar from "@/app/header/navbar/nav";
import Settings from "@/app/header/settings/settings";

export default function Header() {
  return (
    <div className="p-12 flex justify-between items-center">
      <NavBar />
      <Settings />
    </div>
  );
}
