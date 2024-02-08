import Layout from "../components/Layout";
import React, { useState, useEffect } from "react";
import Web3 from "web3";
import proposal_ABI from "../abis/proposal_ABI";
import { useNavigate } from "react-router-dom";
import { PROPOSAL_CONTRACT } from "../abis/contractsaddress.js";

const MyAgenda = () => {
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [contract, setContract] = useState(null);
  const [proposals, setProposals] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadWeb3 = async () => {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);
        try {
          await window.ethereum.request({ method: "eth_requestAccounts" });
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
        PROPOSAL_CONTRACT
      );
      setContract(contractInstance);
    }
  }, [web3]);

  useEffect(() => {
    const fetchProposals = async () => {
      try {
        if (!contract) return;

        const proposalsCount = await contract.methods
          .getProposalsCount()
          .call();
        const fetchedProposals = [];

        for (let i = 0; i < proposalsCount; i++) {
          const proposal = await contract.methods.getProposal(i).call();
          fetchedProposals.push(proposal);
        }

        setProposals(fetchedProposals);
      } catch (error) {
        console.error("안건 정보를 불러오는 중 오류 발생:", error);
      }
    };

    fetchProposals();
  }, [contract]);

  // 추후 디자인 수정 필요!!!!!!!!!!!!!!!!
  return (
    <div className="bg-darkMode">
      <Layout>
        <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
          <h1 className="text-3xl font-semibold mb-4">나의 안건</h1>
          <div className=" flex-col grid grid-cols-3 gap-4">
            {proposals.map((proposal, index) => (
              <div key={index} className="border rounded p-4 my-2 ">
                <h2 className="text-xl font-medium mb-2">{proposal.title}</h2>
                <p className="text-gray-700 mb-2">NFT 이미지: </p>
                <img
                  src={proposal.imageLink}
                  alt="NFT 이미지"
                  className="w-32 h-32"
                />
                <p>펀딩 목표: {proposal.fundingGoal.toString()}</p>
                <p>
                  펀딩 시작 시간:{" "}
                  {new Date(Number(proposal.startTime) * 1000).toLocaleString()}
                </p>
                <p>
                  펀딩 종료 시간:{" "}
                  {new Date(Number(proposal.endTime) * 1000).toLocaleString()}
                </p>

                <p className="text-gray-700 mb-2">
                  안건 내용: {proposal.description}
                </p>
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                  상세 보기
                </button>
              </div>
            ))}
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default MyAgenda;
