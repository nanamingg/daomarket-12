import whatIsDao from "../images/whatIsDao.png";

const WhatIsDaoMarket = () => {
  return (
    <>
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center mt-20">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-5xl text-4xl mb-4 font-medium text-black">
            Dao란 무엇인가요?
          </h1>
          <p className="mb-8 leading-relaxed text-xl text-black">
            Dao는 공동의 사명을 위해 일하는 집단 소유의 블록체인 관리
            조직입니다.
            <br />
            <br />
            자금이나 운영을 관리하는 조직의 리더가 없이, 전 세계의 비슷한 생각을
            가진 모든 사람들과 함께 민주적으로 운영됩니다.
            <br />
            <br />
            이로 인하여 모든 사람이 목소리를 낼 수 있고, 자유롭게 제안을 하고,
            투표를 할 수 있으며 이 모든 것이 투명하게 진행됩니다.
            <br />
          </p>
        </div>
        <div className="md:w-1/2 w-5/6">
          <div>
            <img
              src={whatIsDao}
              alt="whatIsDao"
              className="mx-16 w-1/8 mb-12"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatIsDaoMarket;
