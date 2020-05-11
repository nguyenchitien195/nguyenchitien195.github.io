var plugins = [{
      plugin: require('/home/tien/projects/nguyenchitien195.github.io/node_modules/gatsby-plugin-layout/gatsby-ssr'),
      options: {"plugins":[],"component":"/home/tien/projects/nguyenchitien195.github.io/src/components/layout/layout-gatsby-plugin-transitions.js"},
    },{
      plugin: require('/home/tien/projects/nguyenchitien195.github.io/node_modules/gatsby-plugin-intl/gatsby-ssr'),
      options: {"plugins":[],"path":"/home/tien/projects/nguyenchitien195.github.io/src/intl","languages":["vi","en"],"defaultLanguage":"vi","redirect":false},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
