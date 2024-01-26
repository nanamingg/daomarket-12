import { useTheme } from "next-themes";
import { IoSunnySharp } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";

const DarkmodeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <button
        className={`inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded-md text-base mt-4 md:mt-0 transition duration-300 ${
          theme === "dark"
            ? "dark:bg-slate-500 dark:text-white dark:hover:bg-slate-300"
            : "bg-gray-100 dark:text-gray-600"
        }`}
        type="button"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? <IoMoon /> : <IoSunnySharp />}
      </button>
    </>
  );
};

export default DarkmodeToggle;
