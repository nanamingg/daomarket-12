import Layout from "../components/Layout";
import { BsGithub } from "react-icons/bs";
import junhyunpark from "../images/junhyunpark.png";
import kihyunkim from "../images/kihyunkim.png";
import junhyukjung from "../images/junhyukjung.png";
import juyoungjung from "../images/juyoungjung.png";
import jungbinkim from "../images/jungbinkim.png";

const AboutUs = () => {
  return (
    <div className="bg-darkMode">
      <Layout>
        <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
          <div>이 쯤에 프로젝트 로고 넣기</div>
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="text-4xl font-medium title-font mb-4 text-gray-900">
                블록체인스쿨 4기 - 프로젝트 4팀
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                안녕하세요. 프로젝트 Dao Market을 진행한 4팀입니다. <br />
                소개소개소개
              </p>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 lg:w-1/5 md:w-1/2">
                <div className="h-full flex flex-col items-center text-center">
                  <img
                    src={junhyunpark}
                    alt="junhyunpark"
                    className="mb-8 w-42 mr-2 rounded-full border border-black"
                  />
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-gray-900">
                      박준현
                    </h2>
                    <h3 className="text-gray-500 mb-3">프로젝트 팀장</h3>
                    <p className="mb-4">역할이나 할 말 등등 작성하기</p>
                    <span className="inline-flex">
                      <div className="text-gray-500">
                        <div>
                          <a
                            href="https://github.com/parkliam"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <BsGithub className="text-xl text-black" />
                          </a>
                        </div>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/5 md:w-1/2">
                <div className="h-full flex flex-col items-center text-center">
                  <img
                    src={kihyunkim}
                    alt="kihyunkim"
                    className="mb-8 w-42 mr-2 rounded-full border border-black"
                  />
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-gray-900">
                      김기현
                    </h2>
                    <h3 className="text-gray-500 mb-3">프론트엔드</h3>
                    <p className="mb-4">역할이나 할 말 등등 작성하기</p>
                    <span className="inline-flex">
                      <div className="text-gray-500">
                        <div>
                          <a
                            href="https://github.com/rootel123"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <BsGithub className="text-xl text-black" />
                          </a>
                        </div>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/5 md:w-1/2">
                <div className="h-full flex flex-col items-center text-center">
                  <img
                    src={junhyukjung}
                    alt="junhyukjung"
                    className="mb-8 w-42 mr-2 rounded-full border border-black"
                  />
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-gray-900">
                      정준혁
                    </h2>
                    <h3 className="text-gray-500 mb-3">프론트엔드</h3>
                    <p className="mb-4">역할이나 할 말 등등 작성하기</p>
                    <span className="inline-flex">
                      <div className="text-gray-500">
                        <div>
                          <a
                            href="http://github.com/JUNHYUKJUNG"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <BsGithub className="text-xl text-black" />
                          </a>
                        </div>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/5 md:w-1/2">
                <div className="h-full flex flex-col items-center text-center">
                  <img
                    src={juyoungjung}
                    alt="juyoungjung"
                    className="mb-8 w-42 mr-2 rounded-full border border-black"
                  />
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-gray-900">
                      정주영
                    </h2>
                    <h3 className="text-gray-500 mb-3">백엔드</h3>
                    <p className="mb-4">역할이나 할 말 등등 작성하기</p>
                    <span className="inline-flex">
                      <div className="text-gray-500">
                        <div>
                          <a
                            href="https://github.com/wndud5814"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <BsGithub className="text-xl text-black" />
                          </a>
                        </div>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/5 md:w-1/2">
                <div className="h-full flex flex-col items-center text-center">
                  <img
                    src={jungbinkim}
                    alt="jungbinkim"
                    className="mb-8 w-42 mr-2 rounded-full border border-black"
                  />
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-gray-900">
                      김정빈
                    </h2>
                    <h3 className="text-gray-500 mb-3">백엔드</h3>
                    <p className="mb-4">역할이나 할 말 등등 작성하기</p>
                    <span className="inline-flex">
                      <div className="text-gray-500">
                        <div>
                          <a
                            href="https://github.com/nanamingg"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <BsGithub className="text-xl text-black" />
                          </a>
                        </div>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default AboutUs;
