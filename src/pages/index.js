import React, { Fragment } from 'react';

import Typing from 'react-typing-animation';

import { injectIntl } from "gatsby-plugin-intl";

import Cursor from '../components/cursor';
import '../components/cursor/cursor.css';

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

    console.log('index render')
    return <Fragment>
      <Typing
        speed={50}
        startDelay={1000}
        cursor={<Cursor />}
        onFinishedTyping={() => this.finishType()}
      >
        <span style={{ fontSize: '100px' }}>{intl.formatMessage({ id: 'home-content.hi' })}</span>
        <span style={{ fontSize: '50px' }}>{intl.formatMessage({ id: 'home-content.hi' })} </span>
        <span className={this.state.finish ? 'cursor-end' : ''}>{intl.formatMessage({ id: 'home-content.i-am' })}</span>
      </Typing>
    </Fragment>
  }
}

export default injectIntl(Index);