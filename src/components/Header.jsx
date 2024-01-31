import { FaHome, FaFileCode } from "react-icons/fa";
import DAOM from "../images/DAOM.png";
import { IoPersonSharp } from "react-icons/io5";
import { TbMessageCircle2Filled } from "react-icons/tb";
import DarkmodeToggle from "./DarkmodeToggle";
import Metamask from "../images/Metamask.png";
import TopPopup from "./TopPopup";
import { Link } from "react-router-dom";
import { useSDK } from "@metamask/sdk-react";
import { useState } from "react";

const Header = () => {
  const { sdk } = useSDK();
  const [account, setAccount] = useState("");

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
      <header className="text-gray-600 body-font dark:text-white dark:bg-slate-800">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link to="/">
            <div className="flex mt-1 title-font font-medium items-center text-gray-900 mb-4 md:mb-0 dark:text-white">
              <img src={DAOM} alt="DAOM" className="w-16 mr-2" />
              <span className="ml-3 text-2xl font-HeaderFont text-blue-500">
                DAOM
              </span>
              <span className="ml-1 text-2xl font-HeaderFont text-black">
                arket
              </span>
            </div>
          </Link>
          <div className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <div className="mr-5 hover:text-gray-900 flex items-center">
              <Link to="/">
                <div className="flex items-center">
                  <FaHome className="mr-1" />
                  &nbsp;다옴
                </div>
              </Link>
            </div>
            <div className="mr-5 hover:text-gray-900 flex items-center">
              <Link to="/AboutUs">
                <div className="flex items-center">
                  <IoPersonSharp className="mr-1" />
                  &nbsp;소개
                </div>
              </Link>
            </div>
            <div className="mr-5 hover:text-gray-900 flex items-center">
              <Link to="/Join">
                <div className="flex items-center">
                  <FaFileCode className="mr-1" />
                  &nbsp;참여
                </div>
              </Link>
            </div>
            <div className="mr-5 hover:text-gray-900 flex items-center">
              <Link to="/Agenda">
                <div className="flex items-center">
                  <FaFileCode className="mr-1" />
                  &nbsp;안건
                </div>
              </Link>
            </div>
            <div className="mr-5 hover:text-gray-900 flex items-center">
              <Link to="/Contact">
                <div className="flex items-center">
                  <TbMessageCircle2Filled className="mr-1" />
                  &nbsp;1:1 문의
                </div>
              </Link>
            </div>
            {/* 더미페이지 */}
            <div className="mr-5 hover:text-gray-900 flex items-center">
              <Link to="/IntroduceDaoMarket">
                <div className="flex items-center">&nbsp;⭐️ 더미페이지</div>
              </Link>
            </div>
            {/* 더미페이지 */}
          </div>
          <div>
            <DarkmodeToggle />
          </div>
          <div className="pl-6 mr-2">
            {account ? (
              <div className="w-[170px] flex">
                <span>
                  {`${account.substring(0, 7)}...${account.substring(
                    account.length - 5
                  )}`}
                </span>
                <button className="ml-2" onClick={() => setAccount("")}>
                  Logout
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
