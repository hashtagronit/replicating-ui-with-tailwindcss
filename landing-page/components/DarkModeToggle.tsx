"use client";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "lucide-react";

const DarkModeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const handleSwitch = () => {
    if (resolvedTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div>
      <button
        onClick={handleSwitch}
        className="flex size-4 items-center justify-center"
      >
        <SunIcon
          size={14}
          className="absolute inset-0 scale-100 rotate-0 transition-all duration-200 dark:scale-0 dark:rotate-90"
        />
        <MoonIcon
          size={14}
          className="absolute inset-0 scale-0 rotate-90 transition-all duration-200 dark:scale-100 dark:rotate-0"
        />
      </button>
    </div>
  );
};

export default DarkModeToggle;
