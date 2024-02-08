import Layout from "../components/Layout";
import PundingList from "../components/PundingList";

const PundingPlaceList = () => {
  return (
    <div className="bg-darkMode">
      <Layout>
        <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
          첫 번째 이미지만 클릭했을 때 디테일 페이지로 이동
          <PundingList />
        </section>
      </Layout>
    </div>
  );
};

export default PundingPlaceList;
