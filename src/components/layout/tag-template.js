import React from "react"
import { Link, graphql } from "gatsby";
import { Card, Icon, Label, Button } from 'semantic-ui-react';

export default function Template({
  data // this prop will be injected by the GraphQL query below.
}) {
  const { posts, sitePage } = data // data.markdownRemark holds your post data
  console.log(posts, sitePage);
  return (
    <div className="blog-post-container">
      <div>
        <Link to={'/blogs/'}>
          <Button content='All posts' icon='left arrow' labelPosition='left' />
        </Link>
        <h2>Tag: <b>"{sitePage.context.tag}"</b></h2><br />
        <span>{sitePage.context.totalCount} {sitePage.context.totalCount > 1 ? "posts" : "post"}</span>
      </div>
      {posts.nodes.map((post, index) => {
        return (
          <div key={index}>
            <Card fluid color='red'>
              <Card.Content>
                <Card.Header>
                  <Link to={'/blogs/' + post.frontmatter.slug}>{post.frontmatter.title}</Link>
                </Card.Header>
                <Card.Meta>
                  <span className='date'>{post.frontmatter.date}</span>
                </Card.Meta>
                <Card.Description>
                  {post.frontmatter.desc}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                {post.frontmatter.tags.map((tag, index) => {
                  return (
                    <Link key={index} to={`/blogs/tags/${tag}`}>
                      <Label tag color={sitePage.context.tag === tag ? "blue" : "grey"}>
                        {tag}
                      </Label>
                    </Link>
                  )
                })}
              </Card.Content>
            </Card>
            <br />
          </div>
        )
      })}
    </div>
  )
}

export const pageQuery = graphql`
  query($tag: String!) {
    sitePage(context: {tag: {eq: $tag}}) {
      context {
        tag
        totalCount
      }
    },
    posts: allMarkdownRemark(filter: {frontmatter: {tags: {in: [$tag]}}}) {
      nodes {
        frontmatter {
          title
          desc
          date
          tags
          slug
        }
      }
    }
  }
`