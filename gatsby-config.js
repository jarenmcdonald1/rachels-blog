module.exports = {
  siteMetadata: {
    title: `RMD Holistics`,
    author: {
      name: `Rachel McDonald`,
      summary: `I'm a Holistic Nutritionist, Professional Dancer, and Dance Instructor/Choreographer.`,
    },
    description: `RMD Holistics is designed to educate people, families, and a special focus on athletes and dancers. I have the experience of the conflict the body feels being pushed without the nutrition your individual body needs and the painful ways the body reacts.`,
    siteUrl: `https://rmdholistics.com/`,
    social: {
      instagram: `https://www.instagram.com/rmdholistics/`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-150677862-1`,
        anonymize: true,
        respectDNT: true,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `RMD Holistics`,
        short_name: `RMD Holistics`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#d07e91`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Playfair Display:400,500,600,700,800,900']
        }
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-offline`,
  ],
}
