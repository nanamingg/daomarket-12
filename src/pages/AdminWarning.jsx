// 관리자가 아닌 유저가 관리자 페이지에 강제로 접근하려고 할 때 이 페이지로 리다이렉트 시킵니다.
import Layout from "../components/Layout";
import React, { useEffect, useState } from "react";
import warning from "../images/warning.png";

const AdminWarning = () => {
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.request({ method: "eth_accounts" }).then((accounts) => {
        if (accounts.length > 0) {
          setAddress(accounts[0]);
        }
      });
    }
  }, []);

  return (
    <div className="bg-darkMode">
      <Layout>
        <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <img src={warning} alt="warning" className="mr-2 w-72 pb-4 mb-12" />
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font sm:text-5xl text-3xl mb-8 font-medium text-gray-900">
                당신은 관리자가 아닙니다.
              </h1>
              <p className="mb-8 leading-relaxed text-2xl">
                {address} 님,
                <br />
                당신은 관리자가 아닙니다. 강제로 접근하려고 하지 마세요.
                <br /> 한 번 더 관리자 페이지에 접근하면 당신은 DAOM에 영구 접근
                정지를 당할 수 있습니다.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default AdminWarning;
