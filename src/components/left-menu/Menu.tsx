import React, { ReactElement, useState, useEffect, Fragment } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faGithub,
  faSkype,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import { Flag } from "semantic-ui-react";

import { injectIntl, Link, changeLocale } from "gatsby-plugin-intl";

import Logo from "../../images/logo-menu-warm.svg";
import "./day-light-toggle.css";
import "./social.css";
import "./menu.css";
import "./menu-spinner.css";
import "./language-btn.css";

const Menu = (props): ReactElement => {
  const { intl, location } = props;
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    if (window.localStorage.getItem("theme-mode") === "light") {
      setTheme("light");
    }
  }, []);

  const changeTheme = (isLightMode) => {
    const themeName = isLightMode ? "light" : "dark";
    window.localStorage.setItem("theme-mode", themeName);
    document.querySelector("body").setAttribute("class", themeName);
    setTheme(themeName);
  };

  const changeLanguage = (lang) => {
    changeLocale(lang);
  };

  const switchMenu = (e) => {
    if (e.target.checked) {
      document.getElementById("menu").style.display = "block";
    } else {
      document.getElementById("menu").style.display = "none";
    }
  };

  console.log("menu render");

  return (
    <Fragment>
      <div className="header-menu">
        <div id="spin-menu" className="spinner-master">
          <input
            type="checkbox"
            id="spinner-form"
            onClick={(e) => switchMenu(e)}
          />
          <label htmlFor="spinner-form" className="spinner-spin">
            <div className="spinner diagonal part-1"></div>
            <div className="spinner horizontal"></div>
            <div className="spinner diagonal part-2"></div>
          </label>
        </div>
      </div>
      <div
        id="menu"
        className="left-menu"
        // style={{ display: openMenu }}
      >
        <img alt="menu" src={Logo} alt="menu" />
        <div>
          <input
            id="toggle-on"
            className="toggle-lang toggle-left"
            name="toggle"
            value="vi"
            type="radio"
            checked={intl.locale === "vi"}
            onChange={(e) => changeLanguage(e.target.value)}
          />
          <label htmlFor="toggle-on" className="btn-lang">
            <Flag className="flag" name="vn" />
          </label>
          <input
            id="toggle-off"
            className="toggle-lang toggle-right"
            name="toggle"
            value="en"
            type="radio"
            checked={intl.locale === "en"}
            onChange={(e) => changeLanguage(e.target.value)}
          />
          <label htmlFor="toggle-off" className="btn-lang">
            <Flag className="flag" name="us" />
          </label>
        </div>
        <ul id="list">
          <li>
            <Link to="/">
              <span>{intl.formatMessage({ id: "home" })}</span>
            </Link>
          </li>
          <li>
            <Link to="/about/">
              <span>{intl.formatMessage({ id: "about" })}</span>
            </Link>
          </li>
          <li>
            <Link to="/resume/">
              <span>{intl.formatMessage({ id: "resume" })}</span>
            </Link>
          </li>
          <li>
            <Link to="/portfolios/">
              <span>{intl.formatMessage({ id: "portfolios" })}</span>
            </Link>
          </li>
          <li
            className={
              location.pathname.split("/")[1] === "blogs" ? "active" : ""
            }
          >
            <Link to="/blogs/">
              <span>{intl.formatMessage({ id: "blogs" })}</span>
            </Link>
          </li>
          <li>
            <Link to="/contact/">
              <span>{intl.formatMessage({ id: "contact" })}</span>
            </Link>
          </li>
        </ul>
        <div className="social-buttons">
          <a
            href="//github.com/nguyenchitien195"
            target="_blank"
            rel="noopener"
            className="social-button github"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="//fb.com/hatcatvidai"
            target="_blank"
            rel="noopener"
            className="social-button facebook"
          >
            <FontAwesomeIcon icon={faFacebookF} size="2x" />
          </a>
          {/* <a href="#" className="social-button twitter">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a> */}
          <a
            href="skype:live:nguyenchitien195?chat"
            className="social-button skype"
          >
            <FontAwesomeIcon icon={faSkype} size="2x" />
          </a>
          <a href="#" className="social-button linkedin">
            <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
          </a>
        </div>

        <div className="toggle toggle--daynight">
          <input
            type="checkbox"
            checked={theme === "light"}
            id="toggle--daynight"
            className="toggle--checkbox"
            onChange={(e) => changeTheme(e.target.checked)}
          />
          <label className="toggle--btn" htmlFor="toggle--daynight">
            <span className="toggle--feature"></span>
          </label>
        </div>
      </div>
    </Fragment>
  );
};

export default injectIntl(Menu);
