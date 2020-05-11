import React, { Component } from "react";
import {
  TransitionGroup,
  Transition as ReactTransition,
} from "react-transition-group";

import 'animate.css';


const timeout = 500
const getTransitionStyles = {
  entering: {
    'WebkitAnimationDuration': '0.75s',
    'animationDuration': '0.75s',
    'WebkitAnimationName': 'bounceInDown',
    'animationName': 'bounceInDown',
  },
  entered: {
    transition: `opacity ${timeout}ms ease-in-out`,
    opacity: 1,
  },
  exiting: {
    transition: `opacity ${timeout}ms ease-in-out`,
    opacity: 0,
  },
}

class Transition extends Component {

  constructor() {
    super();
    this.state = {
      isAnimation: true,
    };
  }

  render() {
    const { children, location } = this.props;
    console.log('Transition group render')

    return (
      <TransitionGroup>
        <ReactTransition
          key={location.pathname}
          timeout={{
            enter: timeout,
            exit: timeout,
          }}
        >
          {status => (
            <div
              style={{
                ...getTransitionStyles[status],
              }}
            >
              {children}
            </div>
          )}
        </ReactTransition>
      </TransitionGroup>
    )
  }
}
export default Transition