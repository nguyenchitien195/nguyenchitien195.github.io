import React, { useState } from "react";
import { TransitionProvider, TransitionViews } from "gatsby-plugin-transitions";

import Menu from '../left-menu/Menu';
import './reset.css';
import '../theme/theme.css';
import 'semantic-ui-css/semantic.min.css';
import './right-content.css';
import './scrollbar.css';

class Layout extends React.Component {

  componentDidMount() {
    var themeName = 'dark';
    if (window.localStorage.getItem('theme-mode') === 'light') {
      themeName = 'light';
    }
    window.localStorage.setItem('theme-mode', themeName);
    document.querySelector('body').setAttribute('class', themeName);
  }

  render() {

    console.log('layout gatsby plugin transition render');

    return (
      <div className={`main`}>
        <Menu location={this.props.location} />
        <TransitionProvider
          location={this.props.location}
          mode="successive"
          enter={{
            opacity: 0,
            transform: "translateY(1000px)",
            config: {
              // mass: 1,
              // tension: 210,
              // friction: 20,
              // clamp: true,
              duration: 500
            },
          }}
          usual={{
            opacity: 1,
            transform: "translateY(0)"
          }}
          leave={{
            opacity: 0,
            transform: "translateX(100%)",
            config: {
              duration: 500
            }
          }}
        >
          <div className="right-content">
            <TransitionViews>
              {this.props.children}
            </TransitionViews>
          </div>
        </TransitionProvider>
      </div>
    )
  }
};

export default Layout;