import dotenv from 'dotenv';

dotenv.config({ path: '.env' });
// console.log(process.env.SANITY_TOKEN);

export default {
  siteMetadata: {
    title: `Slick's Slices`,
    siteUrl: `https://gatsby.pizza`,
    description: `Best Pizza in Bentonville!`,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'niesgv4b',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
