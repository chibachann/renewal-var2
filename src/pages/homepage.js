// src/pages/homepage.js
import * as React from 'react';
import Layout from '../components/layout';
import TextImageSection from '../components/TextImageSection/textImageSection';
import FlowChart from '../components/FlowChart/flowChart';
import FourStepsSection from '../components/FourStepsSection/fourStepsSection';


const IndexPage = () => {
  return (
    <Layout>
        <TextImageSection
            subtitle="HOMEPAGE｜ホームページ制作"
            title="ホームページ制作の流れや費用"
            text="弊社はホームページを制作するだけでなく、運用までを含めたトータルサービスを得意としています。新規制作、リニューアルともにご相談を承ります。どうぞお気軽にご連絡ください。"
            imageUrl="/images/haikei3.jpg"
            imageAlt="ホームページ制作"
        />
        <FlowChart />
        <FourStepsSection />
    </Layout>
  );
};

export default IndexPage;