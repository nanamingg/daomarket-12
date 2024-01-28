import Layout from "../components/Layout";
import consultationCall from "../images/consultationCall.png";
import consultationChat from "../images/consultationChat.png";
import consultationOnline from "../images/consultationOnline.png";

const Contact = () => {
  return (
    <div className="bg-darkMode">
      <Layout>
        {/* 상단에 여백을 주려고 Layout 아래에도 넣어봤고 여기에도 넣어봤는데 다크모드가 이 부분만 안 먹히네요. 차후 수정해 보겠습니다. */}
        <section className="pt-32 flex min-h-screen flex-col items-center justify-center text-gray-600 body-font relative">
          <div className="flex">
            <div className="box border border-gray-300 p-4 rounded-md mx-16 w-3/12 h-6/12 flex flex-col items-center justify-center">
              <img
                src={consultationCall}
                alt="consultationCall"
                style={{ width: "100px" }}
              />
              <div className="text-xl font-semibold">전화 상담</div>
              <br />
              평일 오전 9시 ~ 오후 6시
              <a href="tel:1234567890">전화 걸기</a>
            </div>

            <div className="box border border-gray-300 p-4 rounded-md mx-16 w-3/12 h-6/12 flex flex-col items-center justify-center">
              <img
                src={consultationOnline}
                alt="consultationOnline"
                style={{ width: "100px" }}
              />
              <div className="text-xl font-semibold">온라인 상담</div>
              <br />
              365일 24시간
              <br /> 아래 양식을 작성해 주세요.
            </div>
            <div className="box border border-gray-300 p-4 rounded-md mx-16 w-3/12 h-6/12 flex flex-col items-center justify-center">
              <img
                src={consultationChat}
                alt="consultationChat"
                style={{ width: "100px" }}
              />
              <div className="text-xl font-semibold">카카오톡 채팅상담</div>
              <br />
              평일 오전 10시 ~ 오후 5시
            </div>
          </div>
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-12">
              <div class="text-5xl font-medium title-font mb-4 text-gray-900">
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
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div class="p-2 w-full">
              <button class="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                제출
              </button>
            </div>
            <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <div class="text-indigo-500">연락처나 이메일 작성?</div>
              <div class="leading-normal my-5">
                여기엔
                <br />
                주소를 넣을까요
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
