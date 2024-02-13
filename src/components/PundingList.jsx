import React, { useState } from "react";
import ProposalDataFetcher from "./ProposalDataFetcher";
import { Link } from "react-router-dom";

const PundingList = () => {
  const [proposals, setProposals] = useState([]);

  const handleDataFetched = (fetchedProposals) => {
    setProposals(fetchedProposals);
  };

  return (
    <>
      <ProposalDataFetcher onDataFetched={handleDataFetched} />
      <div className="container px-5 py-14 mx-auto grid grid-cols-3">
        {proposals.map((proposal, index) => (
          <div className="flex flex-wrap justify-center -m-4" key={index}>
            <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
              <div className="block relative h-fit rounded overflow-hidden text-center">
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
