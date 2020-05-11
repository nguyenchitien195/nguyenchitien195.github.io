module.exports = {

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
  ]
};