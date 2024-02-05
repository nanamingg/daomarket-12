import Layout from "../components/Layout";

const Agenda = () => {
  return (
    <div className="bg-darkMode">
      <Layout>
        <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
          <div className="container px-5 py-8 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-5xl text-4xl font-medium title-font mb-4 text-gray-900">
                제안하고 싶은 안건이 있으신가요? (페이지 차후 개선 예정)
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-2xl">
                아래 양식을 통해 제안서를 작성하고 제출해 주세요.
                <br /> 빠른 시일 내에 검토 후 답변드리겠습니다.
              </p>
            </div>
            <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
              <div className="relative flex-grow w-full">
                <label
                  for="full-name"
                  className="leading-7 text-sm text-gray-600"
                >
                  성함
                </label>
                <input
                  type="text"
                  id="full-name"
                  name="full-name"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative flex-grow w-full">
                <label
                  for="address"
                  className="leading-7 text-sm text-gray-600"
                >
                  MetaMask 주소
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end mt-4">
              <div className="relative flex-grow w-full">
                <label for="title" className="leading-7 text-sm text-gray-600">
                  구매를 희망하시는 NFT url 링크
                </label>
                <input
                  type="text"
                  id="NFTURL"
                  name="NFTURL"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative flex-grow w-full">
                <label
                  for="content"
                  className="leading-7 text-sm text-gray-600"
                >
                  NFT 이미지 링크
                </label>
                <input
                  type="text"
                  id="NFTImageURL"
                  name="NFTImageURL"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end mt-4">
              <div className="relative flex-grow w-full">
                <label for="title" className="leading-7 text-sm text-gray-600">
                  희망하는 모금 금액 (ETH 단위)
                </label>
                <input
                  type="text"
                  id="NFTURL"
                  name="NFTURL"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative flex-grow w-full">
                <label
                  for="content"
                  className="leading-7 text-sm text-gray-600"
                >
                  일단 공백
                </label>
                <input
                  type="text"
                  id="NFTImageURL"
                  name="NFTImageURL"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end mt-4">
              <div className="relative flex-grow w-full">
                <label for="title" className="leading-7 text-sm text-gray-600">
                  안건 시작 시간 (이건 입력받은 값을 UNIX timestamp로 변환해서
                  저장해야 할 듯)
                </label>
                <input
                  type="text"
                  id="NFTURL"
                  name="NFTURL"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative flex-grow w-full">
                <label
                  for="content"
                  className="leading-7 text-sm text-gray-600"
                >
                  안건 종료 시간 (얘도 입력받은 값을 UNIX timestamp로 변환해서
                  저장해야 할 듯)
                </label>
                <input
                  type="text"
                  id="NFTImageURL"
                  name="NFTImageURL"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end mt-4">
              <div className="relative flex-grow w-full">
                <label for="title" className="leading-7 text-sm text-gray-600">
                  안건 내용
                </label>
                <input
                  type="text"
                  id="NFTURL"
                  name="NFTURL"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative flex-grow w-full">
                <label
                  for="content"
                  className="leading-7 text-sm text-gray-600"
                >
                  실행 여부
                </label>
                <input
                  type="text"
                  id="NFTImageURL"
                  name="NFTImageURL"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
          </div>

          <button className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
            제출
          </button>
        </section>
      </Layout>
    </div>
  );
};

export default Agenda;
