import Layout from "../components/Layout";
import junhyukjung from "../images/junhyukjung.png";

const MarketPlaceDetail = () => {
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
                {/* <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  종류?
                </h2> */}
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-5">
                  정준혁 배경이미지
                </h1>
                <p className="leading-relaxed mb-4">이거에 대한 설명 1234</p>
                <span className="title-font font-medium text-2xl text-gray-900 flex">
                  가격
                </span>
                {/* <button class="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">
                  구매
                </button> */}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default MarketPlaceDetail;
