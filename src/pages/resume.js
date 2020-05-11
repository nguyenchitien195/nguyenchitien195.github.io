import React from 'react';
import { Grid } from 'semantic-ui-react';

import { injectIntl } from 'gatsby-plugin-intl';

import './resume.css';

const Resume = (props) => {

  const { intl } = props;

  return (
    <div>

      {/* Timeline */}
      <Grid centered>
        <Grid.Column mobile={16} tablet={14} computer={12}>
          <ul className="timeline">
            <li className="timeline-item">
              <div className="timeline-info">
                <span>02/2020 - nay</span>
              </div>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Freelancer</h3>
                <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                            eu pede mollis pretium. Pellentesque ut neque.</p>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-info">
                <span>07/2017 - 01/2020</span>
              </div>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Lập trình viên PHP, ReactJS tại Scuti Company</h3>
                <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                            eu pede mollis pretium. Pellentesque ut neque.</p>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-info">
                <span>06/2016 - 06/2017</span>
              </div>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Lập trình viên PHP tại EUI Company</h3>
                <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                            eu pede mollis pretium. Pellentesque ut neque. </p>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-info">
                <span>01/2016 - 06/2016</span>
              </div>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Lập trình viên Java tại FTL Company</h3>
                <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                            eu pede mollis pretium. Pellentesque ut neque. </p>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-info">
                <span>08/2013 - 10/2015</span>
              </div>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Học lập trình tại FPT-Aptech</h3>
                <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                            eu pede mollis pretium. Pellentesque ut neque. </p>
              </div>
            </li>
          </ul>
        </Grid.Column>

      </Grid>

      {/* Skills */}
      <Grid>
        <Grid.Column mobile={16} tablet={8} computer={6}>
          <div className="skill-bar">
            <div id="skill-html" className="skill-process">
              <span className="skill-name">HTML</span>
              {/* <span className="skill-percent">100%</span> */}
            </div>
          </div>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={6}>
          <div className="skill-bar">
            <div id="skill-css" className="skill-process">
              <span className="skill-name ">CSS/CSS3</span>
              {/* <span className="skill-percent ">70%</span> */}
            </div>
          </div>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={6}>
          <div className="skill-bar">
            <div id="skill-jquery" className="skill-process">
              <span className="skill-name ">jQuery</span>
              {/* <span className="skill-percent ">40%</span> */}
            </div>
          </div>
        </Grid.Column>
      </Grid>

    </div>
  )
}

export default injectIntl(Resume);