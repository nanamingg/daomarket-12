import Layout from "../components/Layout";
import PundingList from "../components/PundingList";

const PundingPlaceList = () => {
  return (
    <div className="bg-darkMode">
      <Layout>
        <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
          각 이미지 클릭시 상세 페이지로 이동
          <PundingList />
        </section>
      </Layout>
    </div>
  );
};

export default PundingPlaceList;
