/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Sai Yerni Akhil",
    description:
      "A write about things that interest me which include Tech, Sci-fi, Music and whatever.",
    author: {
      name: `Madabattula Sai Yerni Akhil`,
      summary: `Full-Stack Developer💻. Learner📗. Geek🤓. Starwars fan.`,
    },
    siteUrl: `https://saiyerniakhil.tech/`,
    social: {
      twitter: `sai_yerni`,
    },
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`,
      },
    },
  ],
}
