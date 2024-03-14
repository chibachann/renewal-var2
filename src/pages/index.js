// src/pages/index.js
import * as React from 'react';
import Layout from '../components/layout';
import TopSection from "../components/TopSection/topSection";
import SecondSection from "../components/SecondSection/secondSection";
import ThirdSection from '../components/ThirdSection/thirdSection';
import FourthSection from '../components/FourthSection/fourthSection';

const IndexPage = () => {
  return (
    <Layout>
      <TopSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </Layout>
  );
};

export default IndexPage;