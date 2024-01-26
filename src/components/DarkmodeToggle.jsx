import { useTheme } from "next-themes";

const DarkmodeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <button
        className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 transform hover:scale-110 transition duration-300"
        type="button"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? "라이트모드" : "다크모드"}
      </button>
    </>
  );
};

export default DarkmodeToggle;
