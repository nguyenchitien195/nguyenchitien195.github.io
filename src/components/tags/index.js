import React from 'react';
import { Label, Icon } from 'semantic-ui-react';
import { Link } from 'gatsby';

export default function Tags({ data }) {
  console.log(data);
  data = data || [];
  return (
    <div>
      <span>Tags</span>
      {data.map((tag, index) => {
        return (
          <Link key={index} to={`/blogs/tags/${tag.tag}`}>
            <Label color="teal" tag>
              {tag.tag}
              <Label.Detail>
                {tag.totalCount}
              </Label.Detail>
            </Label>
          </Link>
        )
      })}
    </div>
  );
}