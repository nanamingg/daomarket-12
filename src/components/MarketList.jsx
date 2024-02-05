import { Link } from "react-router-dom";
import junhyukjung from "../images/junhyukjung.png";

const MarketList = () => {
  return (
    <>
      <div className="container px-5 py-14 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
            <div className="block relative h-48 rounded overflow-hidden text-center">
              <Link to="/MarketPlaceDetail">
                <img
                  src={junhyukjung}
                  alt="junhyukjung"
                  className="mb-8 w-42 mr-2"
                />
              </Link>
            </div>
            <div className="mt-4">
              <h2 className="text-gray-900 title-font text-lg font-medium">
                아이템
              </h2>
              <p className="mt-1">펀딩 진행 상황</p>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
            <div className="block relative h-48 rounded overflow-hidden text-center">
              <img
                src={junhyukjung}
                alt="junhyukjung"
                className="mb-8 w-42 mr-2"
              />
            </div>
            <div className="mt-4">
              <h2 className="text-gray-900 title-font text-lg font-medium">
                아이템
              </h2>
              <p className="mt-1">펀딩 진행 상황</p>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
            <div className="block relative h-48 rounded overflow-hidden text-center">
              <img
                src={junhyukjung}
                alt="junhyukjung"
                className="mb-8 w-42 mr-2"
              />
            </div>
            <div className="mt-4">
              <h2 className="text-gray-900 title-font text-lg font-medium">
                아이템
              </h2>
              <p className="mt-1">펀딩 진행 상황</p>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
            <div className="block relative h-48 rounded overflow-hidden text-center">
              <img
                src={junhyukjung}
                alt="junhyukjung"
                className="mb-8 w-42 mr-2"
              />
            </div>
            <div className="mt-4">
              <h2 className="text-gray-900 title-font text-lg font-medium">
                아이템
              </h2>
              <p className="mt-1">펀딩 진행 상황</p>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
            <div className="block relative h-48 rounded overflow-hidden text-center">
              <img
                src={junhyukjung}
                alt="junhyukjung"
                className="mb-8 w-42 mr-2"
              />
            </div>
            <div className="mt-4">
              <h2 className="text-gray-900 title-font text-lg font-medium">
                아이템
              </h2>
              <p className="mt-1">펀딩 진행 상황</p>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
            <div className="block relative h-48 rounded overflow-hidden text-center">
              <img
                src={junhyukjung}
                alt="junhyukjung"
                className="mb-8 w-42 mr-2"
              />
            </div>
            <div className="mt-4">
              <h2 className="text-gray-900 title-font text-lg font-medium">
                아이템
              </h2>
              <p className="mt-1">펀딩 진행 상황</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketList;
