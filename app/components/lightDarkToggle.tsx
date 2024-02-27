import { useEffect, useState } from 'react';

export function LightDarkToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;

    setIsDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
    localStorage.setItem('darkMode', JSON.stringify(newMode));
  };

  return (
    <button
      className="rounded-full focus:outline-none px-2"
      onClick={toggleDarkMode}
    >
      <div className={`transition-all w-6 h-6 rounded-lg border-2 ${!isDarkMode ? 'bg-white border-black' : 'bg-black border-white'}`} />
    </button>
  );
}
