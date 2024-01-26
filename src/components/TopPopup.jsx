// 페이지 최상단에 광고나 공고를 홍보하기 위한 팝업
// LocalStorage를 이용하여 한번 닫은 후에는 다시 보이지 않도록 함

import { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const TopPopup = () => {
  const [isClose, setIsClose] = useState(false);

  const onClickClose = () => {
    setIsClose(true);

    localStorage.setItem("topBannerClose1", "true");
  };

  useEffect(() => {
    if (localStorage.getItem("topBannerClose1") === "true") {
      setIsClose(true);
    }
  }, []);

  return (
    <div
      className={`h-[35px] border-b border-gray-400 mx-16 ${
        isClose && "hidden"
      }`}
    >
      <div className="container flex justify-between items-center">
        <div className="flex items-center justify-center mt-1 w-full">
          <span className="font-semibold text-center ml-[1000px]">
            Dao Market에서 진행 중인 공고 바로가기
          </span>
        </div>
        <button
          className="w-5 absolute right-0 mr-[1000px]"
          onClick={onClickClose}
        >
          <IoCloseSharp className="mt-1" />
        </button>
      </div>
    </div>
  );
};

export default TopPopup;

//   return (
//     <div className={`h-[306px] ${isClose ? "hidden" : ""}`}>
//       <div className="container flex justify-between">
//         <Link to="/sale">
//           <div className="flex items-center">
//             <img src={ad1} alt="top_banner" className="rounded-b-2xl" />
//           </div>
//         </Link>
//         <button className="w-10 h-10" onClick={onClickClose}>
//           <IoCloseSharp className="hover:scale-125 duration-300 text-3xl" />
//         </button>
//       </div>
//     </div>
//   );
