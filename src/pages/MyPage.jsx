import Layout from "../components/Layout";
import invest from "../images/invest.png";
import document from "../images/document.png";
import profile from "../images/profile.png";
import { Link } from "react-router-dom";

const MyPage = () => {
  return (
    <div className="bg-darkMode">
      <Layout>
        <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font text-5xl dark:text-white">
          마이페이지
          <div className="container px-5 py-24 mx-auto">
            <Link to="/MyInvest">
              <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                <div className="sm:w-36 sm:h-36 h-24 w-24 sm:mr-10 inline-flex items-center justify-center rounded-full flex-shrink-0">
                  <img src={invest} alt="invest" className="mb-8 mr-2" />
                </div>
                <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                  <h2 className="text-gray-900 text-xl title-font font-medium mb-2">
                    나의 투자 내역
                  </h2>
                  <p className="leading-relaxed text-base">
                    내가 투자하고 투표한 내역을 볼 수 있으며, 함께 투자한
                    사람들과 채팅할 수 있습니다.
                  </p>
                </div>
              </div>
            </Link>
            <Link to="/MyAgenda">
              <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full flex-shrink-0">
                  <img src={document} alt="document" className="mb-8 mr-2" />
                </div>
                <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                  <h2 className="text-gray-900 text-xl title-font text-xl font-medium mb-2">
                    나의 안건
                  </h2>
                  <p className="leading-relaxed text-base">
                    내가 작성한 안건 내역을 확인할 수 있습니다.
                  </p>
                </div>
              </div>
            </Link>
            <Link to="/MyProfile">
              <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full flex-shrink-0">
                  <img src={profile} alt="profile" className="mb-8 mr-2" />
                </div>
                <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                  <h2 className="text-gray-900 text-xl title-font font-medium mb-2">
                    개인 정보 관리
                  </h2>
                  <p className="leading-relaxed text-base">
                    프로필 사진 변경, 이메일 등록, 닉네임을 변경할 수 있습니다.
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

export default MyPage;
