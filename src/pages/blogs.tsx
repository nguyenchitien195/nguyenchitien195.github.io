import React, { ReactElement } from "react";
import { Link, graphql } from "gatsby";
import Tags from "../components/tags";
// import Img from 'gatsby-image';
import { Card, Icon, Label } from "semantic-ui-react";

const Blogs = ({ data }): ReactElement => {
  const Posts = data.posts.nodes;
  return (
    <div>
      {Posts.map((post, index) => {
        return (
          <div key={index}>
            <Card fluid color="red">
              <Card.Content>
                <Card.Header>
                  <Link to={"/blogs/" + post.frontmatter.slug}>
                    {post.frontmatter.title}
                  </Link>
                </Card.Header>
                <Card.Meta>
                  <span className="date">{post.frontmatter.date}</span>
                </Card.Meta>
                <Card.Description>{post.frontmatter.desc}</Card.Description>
              </Card.Content>
              <Card.Content extra>
                {post.frontmatter.tags.map((tag, index) => {
                  return (
                    <Link key={index} to={`/blogs/tags/${tag}`}>
                      <Label tag color={"grey"}>
                        {tag}
                      </Label>
                    </Link>
                  );
                })}
              </Card.Content>
            </Card>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export const queryPage = graphql`
  query blogQuery {
    tags: allMarkdownRemark {
      group(field: frontmatter___tags) {
        tag: fieldValue
        totalCount
      }
    }
    posts: allMarkdownRemark {
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
`;

export default Blogs;
