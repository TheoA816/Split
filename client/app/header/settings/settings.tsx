import ToggleTheme from "@/app/header/settings/toggle-theme";
import Account from "@/app/header/settings/account";

export default function Settings() {
  return (
    <div className="flex items-center">
      <ToggleTheme />
      <Account />
    </div>
  );
}
