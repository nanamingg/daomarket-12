import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Web3 from "web3";
import proposal_ABI from "../abis/proposal_ABI";

import { PROPOSAL_CONTRACT } from "../abis/contractsaddress.js";

const PundingList = () => {
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
          const proposal = await contract.methods.getMyProposal(i).call();
          fetchedProposals.push(proposal);
        }

        setProposals(fetchedProposals);
      } catch (error) {
        console.error("안건 정보를 불러오는 중 오류 발생:", error);
      }
    };

    fetchProposals();
  }, [contract]);

  return (
    <>
      <div className="container px-5 py-14 mx-auto grid grid-cols-3">
        {proposals.map((proposal, index) => (
          <div className="flex flex-wrap justify-center -m-4">
            <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
              <div
                key={index}
                className="block relative h-fit rounded overflow-hidden text-center"
              >
                <Link to={`/proposal/${index}`}>
                  <img
                    src={proposal.imageLink}
                    alt="proposal.imageLink"
                    className="mb-8 mr-2"
                  />
                </Link>
              </div>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  아이템
                </h2>
                <p className="mt-1 mb-8">펀딩 진행 상황</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PundingList;
