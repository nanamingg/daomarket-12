import { Link } from "react-router-dom";
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
                    안건을 제안하거나 펀딩을 하려면 어떤 조건이 필요한가요?
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
                    안건 제안에 필요한 정보는 무엇인가요?
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
                    펀딩 금액은 어떻게 결정되나요?
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
                    펀딩 과정은 어떻게 되나요?
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
                    펀딩이 성공하면 어떻게 처리되나요?
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
                    펀딩이 실패하면 어떻게 환불되나요?
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
                    다른 네트워크로 펀딩에 참여할 수 있나요?
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
                  매각 및 투표
                </div>
                <div className="md:flex-grow">
                  {/* 0 */}
                  <h2
                    onClick={() => toggleAnswer(12)}
                    className="text-xl font-medium text-gray-900 title-font mb-2 cursor-pointer"
                  >
                    NFT 매각을 위한 투표 시스템은 어떻게 구현되나요?
                  </h2>
                  {selectedFAQ === 12 && (
                    <div className="mt-4 ml-1">답변 완</div>
                  )}
                  {/* 0 */}
                  {/* 1 */}
                  <h2
                    onClick={() => toggleAnswer(13)}
                    className="text-xl font-medium text-gray-900 title-font mt-4 cursor-pointer"
                  >
                    매각된 수익은 어떻게 분배되나요?
                  </h2>
                  {selectedFAQ === 13 && (
                    <div className="mt-4 ml-1">답변 뚜</div>
                  )}
                  {/* 1 */}
                  {/* 2 */}
                  <h2
                    onClick={() => toggleAnswer(14)}
                    className="text-xl font-medium text-gray-900 title-font mt-4 cursor-pointer"
                  >
                    지분을 거래할 때 수수료가 발생하나요?
                  </h2>
                  {selectedFAQ === 14 && (
                    <div className="mt-4 ml-1">답변 뜨리</div>
                  )}
                  {/* 2 */}
                  {/* 3 */}
                  <h2
                    onClick={() => toggleAnswer(15)}
                    className="text-xl font-medium text-gray-900 title-font mt-4 cursor-pointer"
                  >
                    투표 기간은 어떻게 설정되나요?
                  </h2>
                  {selectedFAQ === 15 && (
                    <div className="mt-4 ml-1">답변 뽀</div>
                  )}
                  {/* 3 */}
                  {/* 4 */}
                  <h2
                    onClick={() => toggleAnswer(15)}
                    className="text-xl font-medium text-gray-900 title-font mt-4 cursor-pointer"
                  >
                    멀티시그니처가 무엇인가요?
                  </h2>
                  {selectedFAQ === 15 && (
                    <div className="mt-4 ml-1">답변 뽀</div>
                  )}
                  {/* 4 */}
                </div>
              </div>
              {/* 목록4 */}
              {/* 목록4 */}
              <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col text-2xl">
                  지분 거래
                </div>
                <div className="md:flex-grow">
                  {/* 0 */}
                  <h2
                    onClick={() => toggleAnswer(16)}
                    className="text-xl font-medium text-gray-900 title-font mb-2 cursor-pointer"
                  >
                    지분 거래는 어떻게 이루어지나요?
                  </h2>
                  {selectedFAQ === 16 && (
                    <div className="mt-4 ml-1">답변 완</div>
                  )}
                  {/* 0 */}
                  {/* 1 */}
                  <h2
                    onClick={() => toggleAnswer(17)}
                    className="text-xl font-medium text-gray-900 title-font mt-4 cursor-pointer"
                  >
                    질문 뚜
                  </h2>
                  {selectedFAQ === 17 && (
                    <div className="mt-4 ml-1">답변 뚜</div>
                  )}
                  {/* 1 */}
                  {/* 2 */}
                  <h2
                    onClick={() => toggleAnswer(18)}
                    className="text-xl font-medium text-gray-900 title-font mt-4 cursor-pointer"
                  >
                    질문 뜨리
                  </h2>
                  {selectedFAQ === 18 && (
                    <div className="mt-4 ml-1">답변 뜨리</div>
                  )}
                  {/* 2 */}
                  {/* 3 */}
                  <h2
                    onClick={() => toggleAnswer(19)}
                    className="text-xl font-medium text-gray-900 title-font mt-4 cursor-pointer"
                  >
                    질문 뽀
                  </h2>
                  {selectedFAQ === 19 && (
                    <div className="mt-4 ml-1">답변 뽀</div>
                  )}
                  {/* 3 */}
                </div>
              </div>
              {/* 목록4 */}
              {/* 목록4 */}
              <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col text-2xl">
                  로그인
                </div>
                <div className="md:flex-grow">
                  {/* 0 */}
                  <h2
                    onClick={() => toggleAnswer(20)}
                    className="text-xl font-medium text-gray-900 title-font mb-2 cursor-pointer"
                  >
                    메타마스크와 연동을 어떻게 하나요?
                  </h2>
                  {selectedFAQ === 20 && (
                    <div className="mt-4 ml-1">답변 완</div>
                  )}
                  {/* 0 */}
                  {/* 1 */}
                  <h2
                    onClick={() => toggleAnswer(21)}
                    className="text-xl font-medium text-gray-900 title-font mt-4 cursor-pointer"
                  >
                    질문 뚜
                  </h2>
                  {selectedFAQ === 21 && (
                    <div className="mt-4 ml-1">답변 뚜</div>
                  )}
                  {/* 1 */}
                  {/* 2 */}
                  <h2
                    onClick={() => toggleAnswer(22)}
                    className="text-xl font-medium text-gray-900 title-font mt-4 cursor-pointer"
                  >
                    질문 뜨리
                  </h2>
                  {selectedFAQ === 22 && (
                    <div className="mt-4 ml-1">답변 뜨리</div>
                  )}
                  {/* 2 */}
                  {/* 3 */}
                  <h2
                    onClick={() => toggleAnswer(23)}
                    className="text-xl font-medium text-gray-900 title-font mt-4 cursor-pointer"
                  >
                    질문 뽀
                  </h2>
                  {selectedFAQ === 23 && (
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
                    onClick={() => toggleAnswer(20)}
                    className="text-xl font-medium text-gray-900 title-font mb-2 cursor-pointer"
                  >
                    모금된 자산은 어떻게 보관되나요?
                  </h2>
                  {selectedFAQ === 20 && (
                    <div className="mt-4 ml-1">답변 완</div>
                  )}
                  {/* 0 */}
                  {/* 1 */}
                  <h2
                    onClick={() => toggleAnswer(21)}
                    className="text-xl font-medium text-gray-900 title-font mt-4 cursor-pointer"
                  >
                    질문 뚜
                  </h2>
                  {selectedFAQ === 21 && (
                    <div className="mt-4 ml-1">답변 뚜</div>
                  )}
                  {/* 1 */}
                  {/* 2 */}
                  <h2
                    onClick={() => toggleAnswer(22)}
                    className="text-xl font-medium text-gray-900 title-font mt-4 cursor-pointer"
                  >
                    질문 뜨리
                  </h2>
                  {selectedFAQ === 22 && (
                    <div className="mt-4 ml-1">답변 뜨리</div>
                  )}
                  {/* 2 */}
                  {/* 3 */}
                  <h2
                    onClick={() => toggleAnswer(23)}
                    className="text-xl font-medium text-gray-900 title-font mt-4 cursor-pointer"
                  >
                    질문 뽀
                  </h2>
                  {selectedFAQ === 23 && (
                    <div className="mt-4 ml-1">답변 뽀</div>
                  )}
                  {/* 3 */}
                </div>
              </div>
              {/* 목록4 */}
              {/* 1:1 문의 유도 */}
              <div className="py-8 text-center text-3xl text-gray-900">
                아직 궁금증이 해결되지 않으셨나요?
                <div className="text-2xl text-gray-500 mt-2">
                  아래 버튼을 통해 1:1 문의를 남겨주세요!
                </div>
                <Link to="/Contact">
                  <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded mt-8 text-lg">
                    1:1 문의하기
                  </button>
                </Link>
              </div>
              {/* 1:1 문의 유도 */}
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default FAQ;
