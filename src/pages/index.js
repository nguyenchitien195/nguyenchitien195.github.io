import React, { Fragment } from 'react';

// import Typing from 'react-typing-animation';
// import Typical from 'react-typical';
import Typist from 'react-typist';
import '../../node_modules/react-typist/dist/Typist.css';

import { injectIntl } from "gatsby-plugin-intl";

// import Cursor from '../components/cursor';
// import '../components/cursor/cursor.css';

class Index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      finish: false,
    }
  }

  finishType(e) {
    this.setState({ finish: true })
  }

  render() {

    const { intl } = this.props;
    const webDeveloperStr = intl.formatMessage({ id: 'home-content.web-developer' });
    const freelancerStr = intl.formatMessage({ id: 'home-content.freelancer' });

    let jobNameElement = [], i = 0, loopNumber = 20;
    while (i < loopNumber) {
      jobNameElement.push(<span key={i} style={{ color: '#037fff' }}> {webDeveloperStr}</span>);
      jobNameElement.push(<Typist.Backspace key={i} count={webDeveloperStr.length} delay={1000} />);
      jobNameElement.push(<span key={loopNumber + i} style={{ color: '#037fff' }}>{freelancerStr}</span>);
      jobNameElement.push(<Typist.Backspace key={loopNumber + i} count={freelancerStr.length} delay={1000} />);
      i++;
    }
    jobNameElement.push(<span key={100}>{webDeveloperStr}</span>);

    console.log('index render')
    return <Fragment>
      <div style={{ marginTop: '20%', fontSize: '25px', fontWeight: 'bold', lineHeight: '30px' }}>
        <Typist
          avgTypingDelay={70}
          stdTypingDelay={25}
        >
          <Typist.Delay ms={1000} />
          <span>{intl.formatMessage({ id: 'home-content.hi' })}</span><br />
          <span>{intl.formatMessage({ id: 'home-content.i-am' })}</span>
          <span style={{ color: '#037fff' }}>&nbsp;{intl.formatMessage({ id: 'home-content.name' })}</span><br />
          <span>{intl.formatMessage({ id: 'home-content.i-am-a' })}</span>
          {jobNameElement}
        </Typist>
      </div>
    </Fragment>
  }
}

export default injectIntl(Index);