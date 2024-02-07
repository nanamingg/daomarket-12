import Layout from "../components/Layout";
import React, { useState, useEffect } from "react";
import Web3 from "web3";
import proposal_ABI from "../abis/proposal_ABI";
import { PROPOSAL_CONTRACT } from "../abis/contractsaddress.js"; // 스마트 계약 ABI 파일 불러오기

const Agenda = () => {
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [contract, setContract] = useState(null);
  const [title, setTitle] = useState("");
  const [nftLink, setNftLink] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [fundingGoal, setFundingGoal] = useState("");
  const [durationInDays, setDurationInDays] = useState(""); // 수정된 부분: durationInDays 상태 추가
  const [description, setDescription] = useState("");

  useEffect(() => {
    const loadWeb3 = async () => {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);
        try {
          // MetaMask 사용자 계정 권한 요청
          await window.ethereum.request({ method: "eth_requestAccounts" });
          // 계정 정보 가져오기
          const accs = await web3Instance.eth.getAccounts();
          setAccounts(accs);
        } catch (error) {
          console.error("사용자 계정 권한 요청 실패:", error);
        }
      } else {
        console.error("MetaMask가 설치되어 있지 않습니다.");
      }
    };
    loadWeb3();
  }, []);

  useEffect(() => {
    if (web3) {
      const contractInstance = new web3.eth.Contract(
        proposal_ABI,
        PROPOSAL_CONTRACT // contractsaddress.js에서 스마트 계약 주소 가져오기
      );
      setContract(contractInstance);
    }
  }, [web3]);

  const handleProposalSubmit = async () => {
    try {
      await contract.methods
        .createProposalAndStartFunding(
          title,
          nftLink,
          imageLink,
          fundingGoal,
          durationInDays,
          description
        )
        .send({ from: accounts[0] });
      console.log("안건 제안 및 펀딩 시작 완료");
    } catch (error) {
      console.error("안건 제안 및 펀딩 시작 실패:", error);
    }
  };

  return (
    <div className="bg-darkMode">
      <Layout>
        <section className="flex min-h-screen pt-12 flex-col items-center justify-center text-gray-600 body-font">
          <div className="container px-5 py-8 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-5xl text-4xl font-medium title-font mb-4 text-gray-900">
                제안하고 싶은 안건이 있으신가요?
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-2xl">
                아래 양식을 통해 제안서를 작성하고 제출해 주세요.
                <br />
              </p>
            </div>

            <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end mt-4">
              <div className="relative flex-grow w-full">
                <label
                  htmlFor="title"
                  className="leading-7 text-sm text-gray-600"
                >
                  구매를 희망하시는 NFT url 링크
                </label>
                <input
                  type="text"
                  id="NFTURL"
                  name="NFTURL"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={(e) => setNftLink(e.target.value)}
                />
              </div>
              <div className="relative flex-grow w-full">
                <label
                  htmlFor="content"
                  className="leading-7 text-sm text-gray-600"
                >
                  NFT 이미지 링크
                </label>
                <input
                  type="text"
                  id="NFTImageURL"
                  name="NFTImageURL"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={(e) => setImageLink(e.target.value)}
                />
              </div>
            </div>
            <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end mt-4">
              <div className="relative flex-grow w-full">
                <label
                  htmlFor="title"
                  className="leading-7 text-sm text-gray-600"
                >
                  희망하는 모금 금액 (ETH 단위)
                </label>
                <input
                  type="text"
                  id="funding-goal"
                  name="funding-goal"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={(e) => setFundingGoal(e.target.value)}
                />
              </div>
              <div className="relative flex-grow w-full">
                <label
                  htmlFor="content"
                  className="leading-7 text-sm text-gray-600"
                >
                  펀딩 기간 (일 단위)
                </label>
                <input
                  type="text"
                  id="duration-in-days"
                  name="duration-in-days"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={(e) => setDurationInDays(e.target.value)} // 수정된 부분: durationInDays 상태 업데이트
                />
              </div>
            </div>
            <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end mt-4">
              <div className="relative flex-grow w-full">
                <label
                  htmlFor="title"
                  className="leading-7 text-sm text-gray-600"
                >
                  안건 내용
                </label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>
          </div>
          <button
            onClick={handleProposalSubmit}
            className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg mt-4"
          >
            제출
          </button>
        </section>
      </Layout>
    </div>
  );
};

export default Agenda;
