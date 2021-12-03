import React, { ReactElement } from "react";
import { Grid, Flag, Label, Button } from "semantic-ui-react";
import { Link } from "gatsby";

import { injectIntl } from "gatsby-plugin-intl";
import ResumeData, { Skill as SkillData } from "../data/resume";

import "./resume.css";
import Skill from "../components/Skill/Skill";

const Resume = (props): ReactElement => {
  const { intl } = props;

  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <span>Download CV</span>
        <br />
        <a
          href={"/nguyenchitien195_en.pdf"}
          className={"ui button"}
          style={{ width: "225px" }}
          download
        >
          <Flag name="us" />
          &nbsp;&nbsp;nguyenchitien195_en.pdf
        </a>
        <br />
        <a
          href={"/nguyenchitien195_en.pdf"}
          className={"ui button"}
          style={{ width: "225px" }}
          download
        >
          <Flag name="vn" />
          &nbsp;&nbsp;nguyenchitien195_vi.pdf
        </a>
      </div>

      {/* Timeline */}
      <Grid>
        <Grid.Column mobile={16} tablet={14} computer={12}>
          <ul className="timeline">
            {ResumeData.map((r) => {
              return (
                <li className="timeline-item">
                  <div className="timeline-info">
                    <span>{r.dateWorking}</span>
                  </div>
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">
                      {r.job} ({r.company})
                    </h3>
                    <p>{r.description}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </Grid.Column>
      </Grid>

      {/* Skills */}
      <Grid>
        {SkillData.map((k) => (
          <Skill skill={k.skill} percent={k.percent} />
        ))}
      </Grid>
    </div>
  );
};

export default injectIntl(Resume);
