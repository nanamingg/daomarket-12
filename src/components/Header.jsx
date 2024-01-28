import { FaHome, FaFileCode } from "react-icons/fa";
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
              (로고)
              <span className="ml-3 text-2xl font-HeaderFont">Dao Market</span>
            </div>
          </Link>
          <div className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <div className="mr-5 hover:text-gray-900 flex items-center">
              <Link to="/">
                <div className="flex items-center">
                  <FaHome className="mr-1" />
                  &nbsp;다오마켓
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
          </div>
          {/* 메타마스크 로그인 버튼을 고정값으로 주거나 다크모드 버튼과 떨어뜨려서 로그인, 로그아웃 전환 시 다크모드 버튼이 안 움직이게 해야하는데 차후 수정하겠습니다. */}
          <div>
            <DarkmodeToggle />
          </div>
          <div className="pl-8">
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
