import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Web3 from "web3";
import proposal_ABI from "../abis/proposal_ABI";
import { PROPOSAL_CONTRACT } from "../abis/contractsaddress.js";

const MyAgenda = () => {
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [contract, setContract] = useState(null);
  const [proposals, setProposals] = useState([]);

  useEffect(() => {
    const loadWeb3 = async () => {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);
        try {
          await window.ethereum.request({ method: "eth_requestAccounts" });
          const accs = await web3Instance.eth.getAccounts();
          if (accs.length > 0) {
            // MetaMask에서 첫 번째 계정 선택
            web3Instance.eth.defaultAccount = accs[0];
            setAccounts([accs[0]]);
          }
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

          // 내가 제안한 안건인지 확인하고, 제안자 주소와 사용자 계정 주소가 일치하는 경우에만 추가
          if (proposal.proposer.toLowerCase() === accounts[0].toLowerCase()) {
            fetchedProposals.push(proposal);
          }
        }

        setProposals(fetchedProposals);
      } catch (error) {
        console.error("안건 정보를 불러오는 중 오류 발생:", error);
      }
    };

    fetchProposals();
  }, [contract, accounts]);

  return (
    <div className="bg-darkMode">
      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <h1 className="text-3xl mb-4">나의 안건 페이지</h1>
        <div className="container px-5 py-14 mx-auto grid grid-cols-3 gap-4 place-items-center ">
          {proposals.map((proposal, index) => (
            <div key={index} className="p-4 border border-gray-300 rounded w-[250px] h-fit">
              <Link to={`/proposal/${index}`}>
                <img
                  src={proposal.imageLink}
                  alt={proposal.title}
                  className="mb-4 h-fit object-cover w-full rounded"
                />
              </Link>
              <h2 className="text-2xl font-medium mb-2">{proposal.title}</h2>
              <p className="text-xl text-gray-500 mb-2">
                {proposal.description}
              </p>
              <div className="flex mb-4 items-center">
                <span className="text-md font-medium text-gray-500">
                  Goal: {proposal.fundingGoal.toString()} ETH
                </span>
              </div>
              <div className="text-md">
                  <p className="mb-2">
                    펀딩 시작 시간:{" "}
                    {new Date(
                      Number(proposal.startTime) * 1000
                    ).toLocaleString()}
                  </p>
                  <p>
                    펀딩 종료 시간:{" "}
                    {new Date(Number(proposal.endTime) * 1000).toLocaleString()}
                  </p>
                </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MyAgenda;


// 디자인 수정 필요