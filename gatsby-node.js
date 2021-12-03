const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/components/layout/blog-template.js`);
  const tagTemplate = path.resolve(`src/components/layout/tag-template.js`);

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  const tagList = await graphql(`
  {
    tags: allMarkdownRemark {
      group(field: frontmatter___tags) {
        tag: fieldValue
        totalCount
      }
    }
  }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: '/blogs/' + node.frontmatter.slug,
      component: blogPostTemplate,
      context: {
        slug: node.frontmatter.slug
      }, // additional data can be passed via context
    })
  })

  tagList.data.tags.group.map((tag) => {
    createPage({
      path: `/blogs/tags/${tag.tag}`,
      component: tagTemplate,
      context: {
        tag: tag.tag,
        totalCount: tag.totalCount
      }
    })
  })

}