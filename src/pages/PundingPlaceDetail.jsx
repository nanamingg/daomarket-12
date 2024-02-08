import Layout from "../components/Layout";
import junhyukjung from "../images/junhyukjung.png";

const PundingPlaceDetail = () => {
  return (
    <div className="bg-darkMode">
      <Layout>
        <section className="flex min-h-screen flex-col text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                src={junhyukjung}
                alt="junhyukjung"
                className=""
                style={{ width: "530px", height: "530px" }}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  제품 브랜드
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-5">
                  제품명
                </h1>
                <p className="leading-relaxed mb-4">
                  이 헌법중 공무원의 임기 또는 중임제한에 관한 규정은 이 헌법에
                  의하여 그 공무원이 최초로 선출 또는 임명된 때로부터 적용한다.
                  제2항의 재판관중 3인은 국회에서 선출하는 자를, 3인은
                  대법원장이 지명하는 자를 임명한다. 재산권의 행사는 공공복리에
                  적합하도록 하여야 한다. 대통령은 법률안의 일부에 대하여 또는
                  법률안을 수정하여 재의를 요구할 수 없다. 공개하지 아니한
                  회의내용의 공표에 관하여는 법률이 정하는 바에 의한다.
                </p>
                <span className="title-font font-medium text-2xl text-gray-900 flex">
                  목표 금액
                </span>
                &nbsp;10 ETH
                <div className="flex items-center mt-4">
                  <span className="mr-3 mt-6">진행율: &nbsp;</span>
                  <div className="bg-gray-300 w-full rounded-full">
                    <div
                      className="bg-blue-500 text-xs leading-none py-1 text-center text-white rounded-full"
                      style={{ width: "50%" }}
                    >
                      50%
                    </div>
                  </div>
                </div>
                <button class="flex ml-auto text-white bg-blue-500 border-0 mt-28 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">
                  참여
                </button>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default PundingPlaceDetail;
