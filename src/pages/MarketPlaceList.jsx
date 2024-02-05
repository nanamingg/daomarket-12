import Layout from "../components/Layout";
import MarketList from "../components/MarketList";

const MarketPlaceList = () => {
  return (
    <div className="bg-darkMode">
      <Layout>
        <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
          <MarketList />
          <MarketList />
          <MarketList />
        </section>
      </Layout>
    </div>
  );
};

export default MarketPlaceList;
