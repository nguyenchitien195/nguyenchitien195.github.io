import React, { ReactElement, Fragment } from "react";

// import Typing from 'react-typing-animation';
import Typical from "react-typical";
import Typist from "react-typist";
import "../../node_modules/react-typist/dist/Typist.css";

import { injectIntl } from "gatsby-plugin-intl";
import Layout from "../components/layout/layout-with-menu";

// import Cursor from '../components/cursor';
// import '../components/cursor/cursor.css';
const Job = (props): ReactElement => {
  const { intl } = props;
  const webDeveloperStr = intl.formatMessage({
    id: "home-content.web-developer",
  });
  const freelancerStr = intl.formatMessage({ id: "home-content.freelancer" });

  const getJobs = (): ReactElement[] => {
    let jobNameElement = [],
      i = 0,
      loopNumber = 20;
    while (i < loopNumber) {
      jobNameElement.push(
        <span key={i} style={{ color: "#037fff" }}>
          {" "}
          {webDeveloperStr}
        </span>
      );
      jobNameElement.push(
        <Typist.Backspace key={i} count={webDeveloperStr.length} delay={1000} />
      );
      jobNameElement.push(
        <span key={loopNumber + i} style={{ color: "#037fff" }}>
          {freelancerStr}
        </span>
      );
      jobNameElement.push(
        <Typist.Backspace
          key={loopNumber + i}
          count={freelancerStr.length}
          delay={1000}
        />
      );
      i++;
    }
    jobNameElement.push(<span key={100}>{webDeveloperStr}</span>);
    return jobNameElement;
  };

  return (
    <>
      <Typist avgTypingDelay={70} stdTypingDelay={25}>
        <Typist.Delay ms={1000} />
        <span>{intl.formatMessage({ id: "home-content.hi" })}</span>
        <br />
        <span>{intl.formatMessage({ id: "home-content.i-am" })}</span>
        <span style={{ color: "#037fff" }}>
          &nbsp;{intl.formatMessage({ id: "home-content.name" })}
        </span>
        <br />
        <span>{intl.formatMessage({ id: "home-content.i-am-a" })}</span>
        {getJobs()}
      </Typist>
    </>
  );
};

const Index = (props): ReactElement => {
  const { intl } = props;
  let textTyping = intl.formatMessage({ id: "home-content.hi" });
  let textTying2 =
    textTyping + ` ${intl.formatMessage({ id: "home-content.i-am" })}`;
  let textTying3 =
    textTying2 + ` ${intl.formatMessage({ id: "home-content.name" })}`;
  let textTyping4 = "Xin chao minh la Tien";

  return (
    <Fragment>
      <div
        style={{
          marginTop: "20%",
          fontSize: "25px",
          fontWeight: "bold",
          lineHeight: "30px",
        }}
      >
        {<Job intl={intl} />}
        {/* <Typical steps={[textTyping4, 1000]} loop={Infinity} wrapper="p" /> */}
      </div>
    </Fragment>
  );
};

export default injectIntl(Index);
