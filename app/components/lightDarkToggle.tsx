import { useTheme } from "next-themes"


export function LightDarkToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      className="rounded-full focus:outline-none px-2"
      onClick={toggleTheme}
    >
      <div className={`transition-all w-6 h-6 rounded-lg border-2 ${theme === 'dark' ? 'bg-black border-white' : 'bg-white border-black'}`} />
    </button>
  );
}
