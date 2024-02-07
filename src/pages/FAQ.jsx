import Layout from "../components/Layout";
import { useState } from "react";

const FAQ = () => {
  const [selectedFAQ, setSelectedFAQ] = useState(null);

  const toggleAnswer = (index) => {
    setSelectedFAQ(index === selectedFAQ ? null : index);
  };

  return (
    <div className="bg-darkMode">
      <Layout>
        <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font overflow-hidden">
          <h1 className="sm:text-5xl text-4xl font-medium title-font mb-4 text-gray-900 mt-16">
            안녕하세요! 궁금한 점이 있으신가요?
          </h1>
          <p className="mx-auto leading-relaxed text-3xl mb-16">
            아래 자주 묻는 질문을 참고해 주세요.
          </p>
          <div className="container px-5 py-24 mx-auto">
            <div className="-my-8 divide-y-2 divide-gray-100">
              {/* DAOM */}
              <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col text-2xl">
                  DAOM
                </div>
                <div className="md:flex-grow">
                  {/* 0 */}
                  <h2
                    onClick={() => toggleAnswer(8)}
                    className="text-xl font-medium text-gray-900 title-font mb-2 cursor-pointer"
                  >
                    DAOM이 무엇인가요?
                  </h2>
                  {selectedFAQ === 8 && (
                    <div className="mt-4 ml-1">답변 완</div>
                  )}
                  {/* 0 */}
                  {/* 1 */}
                  <h2
                    onClick={() => toggleAnswer(9)}
                    className="text-xl font-medium text-gray-900 title-font mt-4 cursor-pointer"
                  >
                    DAOM만의 차별점은 무엇이 있나요?
                  </h2>
                  {selectedFAQ === 9 && (
                    <div className="mt-4 ml-1">답변 뚜</div>
                  )}
                  {/* 1 */}
                  {/* 2 */}
                  <h2
                    onClick={() => toggleAnswer(10)}
                    className="text-xl font-medium text-gray-900 title-font mt-4 cursor-pointer"
                  >
                    질문 뜨리
                  </h2>
                  {selectedFAQ === 10 && (
                    <div className="mt-4 ml-1">답변 뜨리</div>
                  )}
                  {/* 2 */}
                  {/* 3 */}
                  <h2
                    onClick={() => toggleAnswer(11)}
                    className="text-xl font-medium text-gray-900 title-font mt-4 cursor-pointer"
                  >
                    질문 뽀
                  </h2>
                  {selectedFAQ === 11 && (
                    <div className="mt-4 ml-1">답변 뽀</div>
                  )}
                  {/* 3 */}
                </div>
              </div>
              {/* DAOM */}
              {/* 안건제안 */}
              <div className="py-8 flex md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col text-2xl">
                  안건제안
                </div>
                <div className="md:flex-grow">
                  {/* 0 */}
                  <h2
                    onClick={() => toggleAnswer(0)}
                    className="text-xl font-medium text-gray-900 title-font mb-2 cursor-pointer"
                  >
                    어떻게 안건을 제안하고 펀딩을 시작할 수 있나요?
                  </h2>
                  {selectedFAQ === 0 && (
                    <div className="mt-4 ml-1">답변 완</div>
                  )}
                  {/* 0 */}
                  {/* 1 */}
                  <h2
                    onClick={() => toggleAnswer(1)}
                    className="text-xl font-medium text-gray-900 title-font mt-4 cursor-pointer"
                  >
                    안건 제안에 필요한 정보는 무엇인가요?
                  </h2>
                  {selectedFAQ === 1 && (
                    <div className="mt-4 ml-1">답변 뚜</div>
                  )}
                  {/* 1 */}
                  {/* 2 */}
                  <h2
                    onClick={() => toggleAnswer(2)}
                    className="text-xl font-medium text-gray-900 title-font mt-4 cursor-pointer"
                  >
                    펀딩 금액은 어떻게 결정되나요?
                  </h2>
                  {selectedFAQ === 2 && (
                    <div className="mt-4 ml-1">답변 뜨리</div>
                  )}
                  {/* 2 */}
                  {/* 3 */}
                  <h2
                    onClick={() => toggleAnswer(3)}
                    className="text-xl font-medium text-gray-900 title-font mt-4 cursor-pointer"
                  >
                    질문 뽀
                  </h2>
                  {selectedFAQ === 3 && (
                    <div className="mt-4 ml-1">답변 뽀</div>
                  )}
                  {/* 3 */}
                </div>
              </div>
              {/* 안건제안 */}
              {/* 펀딩 */}
              <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col text-2xl">
                  펀딩
                </div>
                <div className="md:flex-grow">
                  {/* 0 */}
                  <h2
                    onClick={() => toggleAnswer(4)}
                    className="text-xl font-medium text-gray-900 title-font mb-2 cursor-pointer"
                  >
                    펀딩이 성공하면 어떻게 처리되나요?
                  </h2>
                  {selectedFAQ === 4 && (
                    <div className="mt-4 ml-1">답변 완</div>
                  )}
                  {/* 0 */}
                  {/* 1 */}
                  <h2
                    onClick={() => toggleAnswer(5)}
                    className="text-xl font-medium text-gray-900 title-font mt-4 cursor-pointer"
                  >
                    펀딩이 실패하면 어떻게 환불되나요?
                  </h2>
                  {selectedFAQ === 5 && (
                    <div className="mt-4 ml-1">답변 뚜</div>
                  )}
                  {/* 1 */}
                  {/* 2 */}
                  <h2
                    onClick={() => toggleAnswer(6)}
                    className="text-xl font-medium text-gray-900 title-font mt-4 cursor-pointer"
                  >
                    질문 뜨리
                  </h2>
                  {selectedFAQ === 6 && (
                    <div className="mt-4 ml-1">답변 뜨리</div>
                  )}
                  {/* 2 */}
                  {/* 3 */}
                  <h2
                    onClick={() => toggleAnswer(7)}
                    className="text-xl font-medium text-gray-900 title-font mt-4 cursor-pointer"
                  >
                    질문 뽀
                  </h2>
                  {selectedFAQ === 7 && (
                    <div className="mt-4 ml-1">답변 뽀</div>
                  )}
                  {/* 3 */}
                </div>
              </div>
              {/* 펀딩 */}
              {/* 자산 */}
              <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col text-2xl">
                  자산
                </div>
                <div className="md:flex-grow">
                  {/* 0 */}
                  <h2
                    onClick={() => toggleAnswer(8)}
                    className="text-xl font-medium text-gray-900 title-font mb-2 cursor-pointer"
                  >
                    모금된 자산은 어떻게 보관되나요?
                  </h2>
                  {selectedFAQ === 8 && (
                    <div className="mt-4 ml-1">답변 완</div>
                  )}
                  {/* 0 */}
                  {/* 1 */}
                  <h2
                    onClick={() => toggleAnswer(9)}
                    className="text-xl font-medium text-gray-900 title-font mt-4 cursor-pointer"
                  >
                    질문 뚜
                  </h2>
                  {selectedFAQ === 9 && (
                    <div className="mt-4 ml-1">답변 뚜</div>
                  )}
                  {/* 1 */}
                  {/* 2 */}
                  <h2
                    onClick={() => toggleAnswer(10)}
                    className="text-xl font-medium text-gray-900 title-font mt-4 cursor-pointer"
                  >
                    질문 뜨리
                  </h2>
                  {selectedFAQ === 10 && (
                    <div className="mt-4 ml-1">답변 뜨리</div>
                  )}
                  {/* 2 */}
                  {/* 3 */}
                  <h2
                    onClick={() => toggleAnswer(11)}
                    className="text-xl font-medium text-gray-900 title-font mt-4 cursor-pointer"
                  >
                    질문 뽀
                  </h2>
                  {selectedFAQ === 11 && (
                    <div className="mt-4 ml-1">답변 뽀</div>
                  )}
                  {/* 3 */}
                </div>
              </div>
              {/* 자산 */}
              {/* 목록4 */}
              <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col text-2xl">
                  목록
                </div>
                <div className="md:flex-grow">
                  {/* 0 */}
                  <h2
                    onClick={() => toggleAnswer(8)}
                    className="text-xl font-medium text-gray-900 title-font mb-2 cursor-pointer"
                  >
                    모금된 자산은 어떻게 보관되나요?
                  </h2>
                  {selectedFAQ === 8 && (
                    <div className="mt-4 ml-1">답변 완</div>
                  )}
                  {/* 0 */}
                  {/* 1 */}
                  <h2
                    onClick={() => toggleAnswer(9)}
                    className="text-xl font-medium text-gray-900 title-font mt-4 cursor-pointer"
                  >
                    질문 뚜
                  </h2>
                  {selectedFAQ === 9 && (
                    <div className="mt-4 ml-1">답변 뚜</div>
                  )}
                  {/* 1 */}
                  {/* 2 */}
                  <h2
                    onClick={() => toggleAnswer(10)}
                    className="text-xl font-medium text-gray-900 title-font mt-4 cursor-pointer"
                  >
                    질문 뜨리
                  </h2>
                  {selectedFAQ === 10 && (
                    <div className="mt-4 ml-1">답변 뜨리</div>
                  )}
                  {/* 2 */}
                  {/* 3 */}
                  <h2
                    onClick={() => toggleAnswer(11)}
                    className="text-xl font-medium text-gray-900 title-font mt-4 cursor-pointer"
                  >
                    질문 뽀
                  </h2>
                  {selectedFAQ === 11 && (
                    <div className="mt-4 ml-1">답변 뽀</div>
                  )}
                  {/* 3 */}
                </div>
              </div>
              {/* 목록4 */}
              {/* 목록4 */}
              <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col text-2xl">
                  목록
                </div>
                <div className="md:flex-grow">
                  {/* 0 */}
                  <h2
                    onClick={() => toggleAnswer(8)}
                    className="text-xl font-medium text-gray-900 title-font mb-2 cursor-pointer"
                  >
                    모금된 자산은 어떻게 보관되나요?
                  </h2>
                  {selectedFAQ === 8 && (
                    <div className="mt-4 ml-1">답변 완</div>
                  )}
                  {/* 0 */}
                  {/* 1 */}
                  <h2
                    onClick={() => toggleAnswer(9)}
                    className="text-xl font-medium text-gray-900 title-font mt-4 cursor-pointer"
                  >
                    질문 뚜
                  </h2>
                  {selectedFAQ === 9 && (
                    <div className="mt-4 ml-1">답변 뚜</div>
                  )}
                  {/* 1 */}
                  {/* 2 */}
                  <h2
                    onClick={() => toggleAnswer(10)}
                    className="text-xl font-medium text-gray-900 title-font mt-4 cursor-pointer"
                  >
                    질문 뜨리
                  </h2>
                  {selectedFAQ === 10 && (
                    <div className="mt-4 ml-1">답변 뜨리</div>
                  )}
                  {/* 2 */}
                  {/* 3 */}
                  <h2
                    onClick={() => toggleAnswer(11)}
                    className="text-xl font-medium text-gray-900 title-font mt-4 cursor-pointer"
                  >
                    질문 뽀
                  </h2>
                  {selectedFAQ === 11 && (
                    <div className="mt-4 ml-1">답변 뽀</div>
                  )}
                  {/* 3 */}
                </div>
              </div>
              {/* 목록4 */}
              {/* 목록4 */}
              <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col text-2xl">
                  목록
                </div>
                <div className="md:flex-grow">
                  {/* 0 */}
                  <h2
                    onClick={() => toggleAnswer(8)}
                    className="text-xl font-medium text-gray-900 title-font mb-2 cursor-pointer"
                  >
                    모금된 자산은 어떻게 보관되나요?
                  </h2>
                  {selectedFAQ === 8 && (
                    <div className="mt-4 ml-1">답변 완</div>
                  )}
                  {/* 0 */}
                  {/* 1 */}
                  <h2
                    onClick={() => toggleAnswer(9)}
                    className="text-xl font-medium text-gray-900 title-font mt-4 cursor-pointer"
                  >
                    질문 뚜
                  </h2>
                  {selectedFAQ === 9 && (
                    <div className="mt-4 ml-1">답변 뚜</div>
                  )}
                  {/* 1 */}
                  {/* 2 */}
                  <h2
                    onClick={() => toggleAnswer(10)}
                    className="text-xl font-medium text-gray-900 title-font mt-4 cursor-pointer"
                  >
                    질문 뜨리
                  </h2>
                  {selectedFAQ === 10 && (
                    <div className="mt-4 ml-1">답변 뜨리</div>
                  )}
                  {/* 2 */}
                  {/* 3 */}
                  <h2
                    onClick={() => toggleAnswer(11)}
                    className="text-xl font-medium text-gray-900 title-font mt-4 cursor-pointer"
                  >
                    질문 뽀
                  </h2>
                  {selectedFAQ === 11 && (
                    <div className="mt-4 ml-1">답변 뽀</div>
                  )}
                  {/* 3 */}
                </div>
              </div>
              {/* 목록4 */}
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default FAQ;
