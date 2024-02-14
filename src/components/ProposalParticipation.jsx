// ProposalParticipation.jsx
import React, { useState, useEffect } from "react";
import Web3 from "web3";
import proposal_ABI from "../abis/proposal_ABI";
import { PROPOSAL_CONTRACT } from "../abis/contractsaddress";

const ProposalParticipation = ({ proposalId }) => {
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [contract, setContract] = useState(null);
  const [fundAmount, setFundAmount] = useState("");

  // Web3와 계약 인스턴스 초기화
  useEffect(() => {
    const initWeb3 = async () => {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);
        const accs = await web3Instance.eth.getAccounts();
        setAccounts(accs);
        const contractInstance = new web3Instance.eth.Contract(
          proposal_ABI,
          PROPOSAL_CONTRACT
        );
        setContract(contractInstance);
      }
    };

    initWeb3();
  }, []);

  // 펀딩 참여 로직
  const handleParticipate = async () => {
    if (!contract || !fundAmount) {
      alert("펀딩 금액을 입력해주세요.");
      return;
    }

    try {
      const amountInWei = Web3.utils.toWei(fundAmount, "ether");
      console.log(amountInWei);
      console.log(proposalId);
      console.log(accounts[0]);
      await contract.methods.fundProposal(proposalId).send({
        from: accounts[0],
        value: amountInWei,
      });
      alert("펀딩에 성공적으로 참여했습니다.");
    } catch (error) {
      console.error("펀딩 참여 중 에러 발생", error);
      alert("펀딩 참여에 실패했습니다.");
    }
  };

  return (
    <div className="mt-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="funding-amount"
      >
        펀딩할 ETH 금액을 입력하세요.
      </label>
      <input
        type="text"
        id="funding-amount"
        value={fundAmount}
        onChange={(e) => setFundAmount(e.target.value)}
        placeholder="ETH"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
      />
      <button
        className="flex justify-center mt-4 w-full py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded focus:outline-none focus:shadow-outline"
        onClick={handleParticipate}
      >
        펀딩 참여
      </button>
    </div>
  );
};

export default ProposalParticipation;
