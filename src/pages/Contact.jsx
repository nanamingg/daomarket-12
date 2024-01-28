import Layout from "../components/Layout";
import { PiPhoneCallLight } from "react-icons/pi";

const Contact = () => {
  return (
    <div className="bg-darkMode">
      <Layout>
        {/* 하단 태그에서 justify-start를 하면 컨텐츠가 상단에, justify-center로 하면 중간에 위치되는데 공간이 휑하네요. */}
        {/* Contact Us 상단에 공간이 휑해서 전화상담, 온라인 상담, 카카오톡 상담을 만들 예정 */}
        <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font relative">
          <div className="flex">
            <div className="box border border-gray-300 p-4 rounded-md mx-16 w-3/12 h-6/12 flex flex-col items-center justify-center">
              <PiPhoneCallLight className="text-8xl text-blue-500 mb-8" />
              전화 상담
              <br />
              평일 오전 9시 ~ 오후 6시
            </div>
            <div className="box border border-gray-300 p-4 rounded-md mx-16 w-3/12 h-6/12">
              온라인 상담
              <br />
              365일 24시간
            </div>
            <div className="box border border-gray-300 p-4 rounded-md mx-16 w-3/12 h-6/12">
              카카오톡 채팅상담
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
            <div class="lg:w-1/2 md:w-2/3 mx-auto">
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
