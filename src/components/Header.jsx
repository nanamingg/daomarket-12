import { FaHome } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FaFileCode } from "react-icons/fa";
import { TbMessageCircle2Filled } from "react-icons/tb";
import DarkmodeToggle from "./DarkmodeToggle";
import Metamask from "../images/Metamask.png";

const Header = () => {
  return (
    <>
      <header className="text-gray-600 body-font dark:text-white">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 dark:text-white">
            (로고)<span className="ml-3 text-xl">Dao Market</span>
          </div>
          <div className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <div className="mr-5 hover:text-gray-900 flex items-center">
              <div className="flex items-center">
                <FaHome className="mr-1" />
                <span>Home</span>
              </div>
            </div>
            <div className="mr-5 hover:text-gray-900 flex items-center">
              <div className="flex items-center">
                <IoPersonSharp className="mr-1" />
                About Us
              </div>
            </div>
            <div className="mr-5 hover:text-gray-900 flex items-center">
              <FaFileCode className="mr-1" />
              Project? 고민 중..
            </div>
            <div className="mr-5 hover:text-gray-900 flex items-center">
              <TbMessageCircle2Filled className="mr-1" />
              Contact Us
            </div>
          </div>
          <DarkmodeToggle />
          <button>
            <div className="flex hover:scale-110 duration-300 ml-4">
              <img src={Metamask} alt="Metamask" style={{ width: "30px" }} />
              &nbsp;Login
            </div>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
