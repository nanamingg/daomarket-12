import Layout from "../components/Layout";
import consultationCall from "../images/consultationCall.png";
import consultationChat from "../images/consultationChat.png";
import consultationOnline from "../images/consultationOnline.png";

const Contact = () => {
  return (
    <div className="bg-darkMode">
      <Layout>
        {/* 개인프로젝트에서 문의사항이 딱히 의미가 있나 싶지만 진짜 사이트처럼 구색을 맞췄고, 문의사항을 입력하면 텔레그램 api를 사용해서 정말 연락을 받을 수 있게 제작 예정입니다. */}
        <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font relative">
          <div className="flex pt-24">
            <div className="box border border-gray-300 p-4 py-8 rounded-md mx-16 w-3/12 h-6/12 flex flex-col items-center justify-center text-center">
              <img
                src={consultationCall}
                alt="consultationCall"
                style={{ width: "100px" }}
                className="mx-28 mt-2"
              />
              <div className="text-xl font-semibold mt-8">전화 상담</div>
              <br />
              평일 오전 9시 ~ 오후 6시
              <br /> 코로나19로 인해 전화 상담이 불가능합니다.
            </div>
            <div className="box border border-gray-300 p-4 py-8 rounded-md mx-16 w-3/12 h-6/12 flex flex-col items-center justify-center text-center">
              <img
                src={consultationOnline}
                alt="consultationOnline"
                style={{ width: "100px" }}
                className="mx-28 mt-2"
              />
              <div className="text-xl font-semibold mt-8">온라인 상담</div>
              <br />
              365일 24시간
              <br /> 아래 양식을 작성해 주세요.
            </div>
            <div className="box border border-gray-300 p-4 py-8 rounded-md mx-16 w-3/12 h-6/12 flex flex-col items-center justify-center text-center">
              <img
                src={consultationChat}
                alt="consultationChat"
                style={{ width: "100px" }}
                className="mx-28 mt-2"
              />
              <div className="text-xl font-semibold mt-8">
                카카오톡 채팅상담
              </div>
              <br />
              평일 오전 10시 ~ 오후 5시
              <br />
              ID : @daom
            </div>
          </div>
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-12">
              <div class="text-5xl font-medium title-font mb-4 text-gray-900 dark:text-white">
                Contact Us
              </div>
              <div class="lg:w-2/3 mx-auto leading-relaxed text-xl font-semi-bold">
                사용 중에 어려움을 겪고 계시거나 문의사항이 있으신가요?
                <br />
                아래의 양식을 작성해 주시면 빠르게 답변드리겠습니다.
              </div>
            </div>
            <div class="lg:w-1/2 md:w-2/3 mx-auto mt-12">
              <div class="flex flex-wrap -m-2">
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="name" class="leading-7 text-sm text-gray-600">
                      성함
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="email" class="leading-7 text-sm text-gray-600">
                      연락 받으실 이메일
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="p-2 w-full">
              <div class="relative">
                <label for="message" class="leading-7 text-sm text-gray-600">
                  하실 말씀
                </label>
                <textarea
                  id="message"
                  name="message"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div class="p-2 w-full">
              <button class="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
                제출
              </button>
            </div>
            <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <div class="text-blue-500">daomarket4@project.com</div>
              <div class="leading-normal my-5">
                서울시 중구 세종대로 110
                <br />
                101호, DaoMarket
              </div>
              <span class="inline-flex">
                <div class="text-gray-500"></div>
              </span>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default Contact;
