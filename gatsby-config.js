/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

require('dotenv').config({
  path: `.env`,
});

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `デジタルクリエイティブ株式会社`,
    description: `デジタルクリエイティブ株式会社は、八王子市を拠点とした、ITコンサルティング・Webサイト制作・Webシステム開発・Webマーケティングを行う会社です。`,
    siteUrl: `https://digitalcreative.co.jp`,
    companyName: `デジタルクリエイティブ株式会社`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
};
