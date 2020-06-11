module.exports = {
  // pathPrefix: "/reponame",

  plugins: [
    // 'gatsby-plugin-layout',
    // {
    //   resolve: "gatsby-plugin-transition-link",
    //   options: {
    //     layout: require.resolve(`./src/components/layout/index.js`)
    //   }
    // },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        // component: require.resolve(`./src/components/layout/layout-react-transition-group`)
        component: require.resolve(`./src/components/layout/layout-gatsby-plugin-transitions`)
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: [`vi`, `en`],
        // language file path
        defaultLanguage: `vi`,
        // option to redirect to `/ko` when connecting `/`
        redirect: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `post images`,
        path: `${__dirname}/src/post-images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`
    },
    {
      resolve: `gatsby-transformer-sharp`
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
      }
    },
  ]
};