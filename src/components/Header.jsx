import DAOM from "../images/DAOM.png";
import DarkmodeToggle from "./DarkmodeToggle";
import Metamask from "../images/Metamask.png";
import TopPopup from "./TopPopup";
import { Link } from "react-router-dom";
import { useSDK } from "@metamask/sdk-react";
import { useState } from "react";
import DropDown from "./DropDown";
import { IoPersonCircleSharp } from "react-icons/io5";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  const { sdk } = useSDK();
  const [account, setAccount] = useState("");
  const [view, setView] = useState(false);

  const onClickMetaMask = async () => {
    try {
      const accounts = await sdk?.connect();

      setAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <TopPopup />
      <header className="text-gray-600 pb-16 body-font dark:text-white dark:bg-slate-800">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link to="/">
            <div className="flex mt-1 title-font font-medium items-center text-gray-900 mb-4 md:mb-0 dark:text-white">
              <img src={DAOM} alt="DAOM" className="mr-2 w-32 pb-4" />
            </div>
          </Link>
          <div className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <DropDown />
          </div>
          <div>
            <DarkmodeToggle />
          </div>
          <div className="pl-6 mr-2">
            {account ? (
              <div className="w-[170px] flex">
                <button
                  className="flex items-center"
                  onClick={() => {
                    setView(!view);
                  }}
                >
                  <IoPersonCircleSharp className="w-[80px] h-[45px] pl-6" />
                  {view ? (
                    <MdKeyboardArrowUp className="w-6 h-6" />
                  ) : (
                    <MdKeyboardArrowDown className="w-6 h-6" />
                  )}
                  {view && (
                    <>
                      <ul className="absolute mt-2 bg-slate-300 dark:bg-slate-600 top-28 p-4 rounded-xl">
                        <li className="pb-4">
                          <Link to="/MyPage">마이페이지</Link>
                        </li>
                        <button
                          className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-50"
                          onClick={() => setAccount("")}
                        >
                          로그아웃
                        </button>
                      </ul>
                    </>
                  )}
                </button>
              </div>
            ) : (
              <button
                onClick={onClickMetaMask}
                className="flex items-center w-[170px]"
              >
                <img src={Metamask} alt="Metamask" className="w-8 mr-2" />
                <span>MetaMask Login</span>
              </button>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
