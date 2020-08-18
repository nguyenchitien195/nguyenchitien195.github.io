import React from 'react';
import StackGrid, { transitions } from "react-stack-grid";
import { Card, Icon, Image, Label, Segment } from 'semantic-ui-react';

import PROJECTS from './project-data';
import { Link } from 'gatsby';

const { helix } = transitions;

class Portfolios extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      portfolios: PROJECTS,
      tags: []
    }
  }

  getAllTags() {
    let tags = [];
    PROJECTS.map((project, projectIndex) => {
      project.tags.map((tag, tagIndex) => {
        if (tags.indexOf(tag) === -1) {
          tags.push(tag);
        }
      })
    });
    return tags;
  }

  filterProjectByTag(tags) {
    let filterPortfolios = PROJECTS.filter((project) => {
      let projectIncludeTag = false;
      tags.map((tag) => {
        if (project.tags.indexOf(tag) !== -1) {
          projectIncludeTag = true;
          return;
        };
      })
      return projectIncludeTag;
    })

    return filterPortfolios;
  }

  removeTag(tag) {
    let { tags } = this.state;
    let filterPortfolios = [];
    tags.splice(tags.indexOf(tag), 1);

    if (tags.length === 0) {
      filterPortfolios = PROJECTS;
    } else {
      filterPortfolios = this.filterProjectByTag(tags);
    }
    this.setState({ tags: tags, portfolios: filterPortfolios });

  }

  addTag(tag) {
    let { tags } = this.state;
    if (tags.indexOf(tag) === -1) {
      tags.push(tag);
      let portfolios = this.filterProjectByTag(tags);
      this.setState({ tags: tags, portfolios: portfolios });
    }
  }

  render() {
    const { portfolios, tags } = this.state;

    return (
      <div>
        <div style={{ height: '100px' }}>
          {tags.length > 0 &&
            <Segment>
              {tags.map((tag, tagIndex) => {
                return (
                  <Label as="a" color="blue" tag key={tagIndex}>
                    {tag}
                    <Icon name='delete' onClick={() => this.removeTag(tag)} />
                  </Label>
                )
              })}
            </Segment>
          }
        </div>
        <StackGrid
          columnWidth={250}
          appear={helix.appear}
          appeared={helix.appeared}
          enter={helix.enter}
          entered={helix.entered}
          leaved={helix.leaved}
          monitorImagesLoaded={false}
          gutterWidth={10}
          gutterHeight={12}
        >
          {portfolios.map((project, index) => {
            return (
              <Card key={index} style={{ height: '380px' }}>
                <Image src={project.img} />
                <Card.Content style={{ display: 'grid' }}>
                  <Card.Header>
                    {project.url ? <a target="_blank" href={project.url}>{project.title}</a> : project.title}
                  </Card.Header>
                  <Card.Description>
                    {project.desc}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  {project.tags.map((tag, tagIndex) => {
                    return (
                      <Label as="a" tag
                        color={this.state.tags.includes(tag) ? "blue" : "gray"}
                        key={tagIndex}
                        onClick={() => this.addTag(tag)}>{tag}
                      </Label>
                    );
                  })}
                </Card.Content>
              </Card>
            )
          })}
        </StackGrid>
      </div>
    )
  }
}

export default Portfolios;