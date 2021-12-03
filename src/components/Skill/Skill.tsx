import React from "react";
import { Grid } from "semantic-ui-react";
import { ISkill } from '../../data/resume';
import StyledDiv from "./styled-component";

const Skill = (props: ISkill) => {
  const { skill, percent } = props;

  return (
    <Grid.Column mobile={16} tablet={8} computer={6}>
      <div className="skill-bar">
        <StyledDiv percent={percent} className="skill-process">
          <span className='skill-name'>{skill}</span>
        </StyledDiv>
      </div>
    </Grid.Column>
  );
};

export default Skill;
