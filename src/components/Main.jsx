const Main = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-5xl text-3xl mb-4 font-thin text-gray-900">
            <div className="text-7xl text-blue-500 flex">
              <b>DAOM</b>
              <div className="text-black">&nbsp;arket</div>
            </div>
            <br className="hidden lg:inline-block" />
            <b>NFT</b>와 <b>DAO</b>의 조화로운 만남
            <br className="hidden lg:inline-block" />
            디지털 자산의 <b>새로운 패러다임</b> 입니다.
          </h1>
          <div className="text-xl text-gray-500">
            <p className="mb-8 leading-relaxed">
              누구든 쉽게 구매하고 싶은 물건에 대한 제안서를 제출하여
              <br className="hidden lg:inline-block" />
              물건을 구매하는 혁신적인 시장입니다.
            </p>
          </div>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              시작하기
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"></div>
      </div>
    </section>
  );
};

export default Main;
