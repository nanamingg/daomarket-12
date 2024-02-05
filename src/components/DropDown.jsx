import { TbMessageCircle2Filled } from "react-icons/tb";
import { FaFileCode } from "react-icons/fa";
import { Link } from "react-router-dom";

const DropDown = () => {
  return (
    <ul className="flex">
      <li className=" mainmenu">
        <Link to="/Join" className="mr-5 hover:text-gray-900 flex items-center">
          <FaFileCode className="mr-1" />
          &nbsp;참여
        </Link>
        <ul className="text-center w-[84px] bg-slate-600 submenu speech-bubble">
          <li>
            <Link>123</Link>
          </li>
          <li>
            <Link>123</Link>
          </li>
          <li>
            <Link>123</Link>
          </li>
        </ul>
      </li>
      <li className=" mainmenu">
        <Link
          to="/Agenda"
          className="mr-5 hover:text-gray-900 flex items-center"
        >
          <FaFileCode className="mr-1" />
          &nbsp;안건
        </Link>
        <ul className="text-center w-[84px] submenu speech-bubble ">
          <li>
            <Link>123</Link>
          </li>
          <li>
            <Link>123</Link>
          </li>
          <li>
            <Link>123</Link>
          </li>
        </ul>
      </li>
      <li className=" mainmenu">
        <Link
          to="/Contact"
          className="mr-5 hover:text-gray-900 flex items-center"
        >
          <TbMessageCircle2Filled className="mr-1" />
          &nbsp;1:1 문의
        </Link>
        <ul className="text-center w-[105px] submenu speech-bubble">
          <li>
            <Link>123</Link>
          </li>
          <li>
            <Link>123</Link>
          </li>
          <li>
            <Link>123</Link>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default DropDown;
