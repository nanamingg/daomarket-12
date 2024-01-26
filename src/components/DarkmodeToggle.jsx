import { useTheme } from "next-themes";
import { IoSunnySharp } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";

const DarkmodeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <button
        className="inline-flex items-center dark:text-gray-600 bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded-md text-base mt-4 md:mt-0 transform hover:scale-110 transition duration-300"
        type="button"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? <IoSunnySharp /> : <IoMoon />}
      </button>
    </>
  );
};

export default DarkmodeToggle;
