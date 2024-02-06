import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import Layout from "../components/Layout";
import ProposalAndFundingABI from "./path/to/ProposalAndFunding.json";

const CONTRACT_ADDRESS = "Your_Contract_Address";

const Agenda = () => {
  // 상태 변수 설정
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [nftUrl, setNftUrl] = useState("");
  const [nftImageUrl, setNftImageUrl] = useState("");
  const [fundingGoal, setFundingGoal] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [description, setDescription] = useState("");
  const [executed, setExecuted] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  // 컴포넌트가 마운트될 때 MetaMask 연결 상태 확인
  useEffect(() => {
    const checkConnection = async () => {
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({
            method: "eth_accounts",
          });
          if (accounts.length > 0) {
            setIsConnected(true);
          }
        } catch (error) {
          console.error("Error checking MetaMask connection:", error);
        }
      }
    };

    checkConnection();
  }, []);

  // MetaMask 연결 요청 함수
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        setIsConnected(true);
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }
    } else {
      alert("Please install MetaMask!");
    }
  };

  // 스마트 컨트랙트와 상호 작용하는 함수
  const submitProposal = async () => {
    if (isConnected) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          CONTRACT_ADDRESS,
          ProposalAndFundingABI,
          signer
        );

        const tx = await contract.createProposalAndStartFunding(
          fullName,
          address,
          nftUrl,
          nftImageUrl,
          ethers.utils.parseEther(fundingGoal),
          startTime,
          endTime,
          description,
          executed
        );

        await tx.wait();
        console.log("제안이 성공적으로 생성되었습니다.");
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      console.log("Please connect to MetaMask");
    }
  };

  return (
    <div className="bg-darkMode">
      <Layout>
        <section className="flex min-h-screen pt-12 flex-col items-center justify-center text-gray-600 body-font">
          <div className="container px-5 py-8 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-5xl text-4xl font-medium title-font mb-4 text-gray-900">
                제안하고 싶은 안건이 있으신가요? (페이지 차후 개선 예정)
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-2xl">
                아래 양식을 통해 제안서를 작성하고 제출해 주세요.
                <br />
              </p>
            </div>
            <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
              <div className="relative flex-grow w-full">
                <label
                  htmlFor="full-name"
                  className="leading-7 text-sm text-gray-600"
                >
                  성함
                </label>
                <input
                  type="text"
                  id="full-name"
                  name="full-name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative flex-grow w-full">
                <label
                  htmlFor="address"
                  className="leading-7 text-sm text-gray-600"
                >
                  MetaMask 주소
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>

const Agenda = () = >{
  // 상태 변수 설정
  // ... (이전 상태 변수와 동일)

  const [fundingAmount, setFundingAmount] = useState('');  // 모금 금액
  const [nftUrl, setNftUrl] = useState('');  // NFT URL
  const [imageLink, setImageLink] = useState('');  // 이미지 링크
  const [duration, setDuration] = useState('');  // 기간
  const [description, setDescription] = useState('');  // 설명  


  return (
    <div className="bg-darkMode">
      <Layout>
        
        <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
          {/* NFT URL 입력 필드 */}
          <div className="relative flex-grow w-full">
            <label htmlFor="nftUrl" className="leading-7 text-sm text-gray-600">
              NFT URL
            </label>
            <input
              type="text"
              id="nftUrl"
              name="nftUrl"
              value={nftUrl}
              onChange={(e) => setNftUrl(e.target.value)}
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          
          {/* 이미지 링크 입력 필드 */}
          <div className="relative flex-grow w-full">
            <label htmlFor="imageLink" className="leading-7 text-sm text-gray-600">
              이미지 링크
            </label>
            <input
              type="text"
              id="imageLink"
              name="imageLink"
              value={imageLink}
              onChange={(e) => setImageLink(e.target.value)}
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>

      </Layout>
    </div>
  );


export default Agenda; */

            {/* MetaMask 연결 버튼 */}
            {!isConnected && (
              <button
                className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"
                onClick={connectWallet}
              >
                Connect MetaMask
              </button>
            )}

            {/* 제출 버튼 */}
            <button
              className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"
              onClick={submitProposal}
            >
              제출
            </button>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default Agenda;
