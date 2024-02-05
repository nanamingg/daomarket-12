import Layout from "../components/Layout";
import React, { useEffect, useState } from "react";

const MyProfile = () => {
  const [address, setAddress] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.request({ method: "eth_accounts" }).then((accounts) => {
        if (accounts.length > 0) {
          setAddress(accounts[0]);
        }
      });
    }
  }, []);

  const handleHover = () => {
    setShowPopup(true);
  };

  const handleLeave = () => {
    setShowPopup(false);
  };

  return (
    <div className="bg-darkMode">
      <Layout>
        <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
          {/* 메타마스크 주소 */}
          <div className="container px-5 py-8 mx-auto flex flex-wrap">
            <h2 className="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5 text-center flex items-center justify-center">
              나의 MetaMask 주소
            </h2>
            <div className="md:w-3/5 md:pl-6 flex">
              <p className="leading-relaxed text-xl">
                현재 로그인된 주소는 {address.substring(0, 7)}...
                {address.substring(address.length - 5)} 입니다.
              </p>
              <div
                className="mt-1 ml-4 text-blue-500 relative cursor-pointer"
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
              >
                주소 자세히 보기
                {showPopup && (
                  <div className="absolute bg-white p-2 text-sm text-gray-900 rounded shadow">
                    {address}
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* 메타마스크 주소 */}
          {/* 목록 */}
          <div className="container px-5 py-8 mx-auto flex flex-wrap">
            <h2 className="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5 text-center flex items-center justify-center">
              목록
            </h2>
            <div className="md:w-3/5 md:pl-6">
              <p className="leading-relaxed text-xl">목록</p>
            </div>
          </div>
          {/* 목록 */}
        </section>
      </Layout>
    </div>
  );
};

export default MyProfile;
