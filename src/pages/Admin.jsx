import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const Admin = () => {
  return (
    <div className="bg-darkMode">
      <Layout>
        <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font text-5xl dark:text-white">
          관리자페이지
          <div className="container px-5 py-24 mx-auto">
            <Link to="/">
              <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                <div className="sm:w-36 sm:h-36 h-24 w-24 sm:mr-10 inline-flex items-center justify-center rounded-full flex-shrink-0">
                  {/* <img src={invest} alt="invest" className="mb-8 mr-2" /> */}
                </div>
                <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                  <h2 className="text-gray-900 text-xl title-font font-medium mb-2">
                    전체 안건 보기
                  </h2>
                  <p className="leading-relaxed text-base">
                    유저들이 작성한 모든 안건을 확인할 수 있습니다.
                  </p>
                </div>
              </div>
            </Link>
            <Link to="/">
              <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full flex-shrink-0">
                  {/* <img src={document} alt="document" className="mb-8 mr-2" /> */}
                </div>
                <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                  <h2 className="text-gray-900 text-xl title-font  font-medium mb-2">
                    NFT 발행 및 관리
                  </h2>
                  <p className="leading-relaxed text-base">
                    NFT 발행 및 관리를 할 수 있습니다.
                  </p>
                </div>
              </div>
            </Link>
            <Link to="/">
              <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full flex-shrink-0">
                  {/* <img src={profile} alt="profile" className="mb-8 mr-2" /> */}
                </div>
                <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                  <h2 className="text-gray-900 text-xl title-font font-medium mb-2">
                    실험실
                  </h2>
                  <p className="leading-relaxed text-base">
                    실험적인 기능을 사용할 수 있습니다.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default Admin;
