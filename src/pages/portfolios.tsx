import React, { useState, ReactElement } from "react";
import StackGrid, { transitions } from "react-stack-grid";
import { Card, Icon, Image, Label, Segment } from "semantic-ui-react";

import PROJECTS, { IProject } from "../data/projects";
import { Link } from "gatsby";

const { helix } = transitions;

const Portfolios = (): ReactElement => {
  const [tags, setTags] = useState([]);
  const [portfolios, setPortfolios] = useState<IProject[]>(PROJECTS);

  const filterProjectByTag = (tags) => {
    let filterPortfolios = PROJECTS.filter((project) => {
      let projectIncludeTag = false;
      tags.map((tag) => {
        if (project.tags.indexOf(tag) !== -1) {
          projectIncludeTag = true;
          return;
        }
      });
      return projectIncludeTag;
    });

    return filterPortfolios;
  };

  const removeTag = (tag) => {
    let filterPortfolios = [];
    tags.splice(tags.indexOf(tag), 1);

    if (tags.length === 0) {
      filterPortfolios = PROJECTS;
    } else {
      filterPortfolios = filterProjectByTag(tags);
    }
    setPortfolios(filterPortfolios);
    setTags(tags);
  };

  const addTag = (tag) => {
    if (tags.indexOf(tag) === -1) {
      tags.push(tag);
      let portfolios = filterProjectByTag(tags);
      setPortfolios(portfolios);
      setTags(tags);
    }
  };

  return (
    <div>
      <div style={{ height: "100px" }}>
        {tags.length > 0 && (
          <Segment>
            {tags.map((tag, tagIndex) => {
              return (
                <Label as="a" color="blue" tag key={tagIndex}>
                  {tag}
                  <Icon name="delete" onClick={() => removeTag(tag)} />
                </Label>
              );
            })}
          </Segment>
        )}
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
            <Card key={index} style={{ height: "380px" }}>
              <Image src={project.img} />
              <Card.Content style={{ display: "grid" }}>
                <Card.Header>
                  {project.url ? (
                    <a target="_blank" href={project.url}>
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </Card.Header>
                <Card.Description>{project.desc}</Card.Description>
              </Card.Content>
              <Card.Content extra>
                {project.tags.map((tag, tagIndex) => {
                  return (
                    <Label
                      as="a"
                      tag
                      color={tags.includes(tag) ? "blue" : "grey"}
                      key={tagIndex}
                      onClick={() => addTag(tag)}
                    >
                      {tag}
                    </Label>
                  );
                })}
              </Card.Content>
            </Card>
          );
        })}
      </StackGrid>
    </div>
  );
};

export default Portfolios;
