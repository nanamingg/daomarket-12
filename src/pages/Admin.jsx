import Layout from "../components/Layout";

const Admin = () => {
  return (
    <div className="bg-darkMode">
      <Layout>
        <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
          관리자 페이지
          <br /> 전체 안건을 본다거나 NFT를 발행한다거나
          <br /> 기타 기능을 넣으면 될 거 같습니다.
        </section>
      </Layout>
    </div>
  );
};

export default Admin;
