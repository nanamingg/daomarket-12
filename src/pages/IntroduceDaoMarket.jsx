import Layout from "../components/Layout";
import WhatIsDaoMarket from "../components/WhatIsDaoMarket";
import WhyChooseDaoMarket from "../components/WhyChooseDaoMarket";
import HowCanIUseDaoMarket from "../components/HowCanIUseDaoMarket";

const IntroduceDaoMarket = () => {
  return (
    <div className="bg-darkMode">
      <Layout>
        <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
          <WhatIsDaoMarket />
          <WhyChooseDaoMarket />
          <HowCanIUseDaoMarket />
        </section>
      </Layout>
    </div>
  );
};

export default IntroduceDaoMarket;
