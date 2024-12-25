import { ThemeSwitcher } from "./theme-switcher";

export default function Topbar() {
  return (
    <header className="relative flex justify-center items-center p-4 border-b">
      <p className="text-2xl font-semibold uppercase tracking-widest">
        Leetcards
      </p>
      <div className="absolute right-6">
        <ThemeSwitcher />
      </div>
    </header>
  );
}
