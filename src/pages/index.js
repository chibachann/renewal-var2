// src/pages/index.js
import * as React from 'react';
import Layout from '../components/layout';
import TopSection from "../components/TopSection/topSection";
import SecondSection from "../components/SecondSection/secondSection";

const IndexPage = () => {
  return (
    <Layout>
      <TopSection />
      <SecondSection />
    </Layout>
  );
};

export default IndexPage;