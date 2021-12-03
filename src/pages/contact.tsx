import React, { useState } from "react";
import { injectIntl } from "gatsby-plugin-intl";

import "./contact.css";

const Contact = (props) => {
  const [status, setStatus] = useState<"NOT_SEND" | "SUCCESS" | "ERROR">(
    "NOT_SEND"
  );
  const { intl } = props;

  const submitForm = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
    };
    xhr.send(data);
  };

  return (
    <div className="background">
      <div className="container">
        <div className="screen">
          <div className="screen-header">
            <div className="screen-header-left">
              <div className="screen-header-button close"></div>
              <div className="screen-header-button maximize"></div>
              <div className="screen-header-button minimize"></div>
            </div>
            <div className="screen-header-right">
              <div className="screen-header-ellipsis"></div>
              <div className="screen-header-ellipsis"></div>
              <div className="screen-header-ellipsis"></div>
            </div>
          </div>
          <div className="screen-body">
            <div className="screen-body-item left">
              <div className="app-title">
                <span>{intl.formatMessage({ id: "contact" })}</span>
              </div>
              <div className="app-contact">
                {intl.formatMessage({ id: "contact-content.phone" })} :
                0989.260.552
              </div>
            </div>
            <div className="screen-body-item">
              <form
                id="contact-form"
                className="app-form"
                onSubmit={(ev) => submitForm(ev)}
                action="https://formspree.io/xwkrpbyn"
                method="POST"
              >
                <div className="app-form-group">
                  <input
                    className="app-form-control"
                    name="name"
                    placeholder={intl.formatMessage({
                      id: "contact-content.name",
                    })}
                  />
                </div>
                <div className="app-form-group">
                  <input
                    className="app-form-control"
                    name="email"
                    placeholder={intl.formatMessage({
                      id: "contact-content.email",
                    })}
                  />
                </div>
                <div className="app-form-group message">
                  <textarea
                    name="message"
                    className="app-form-control"
                    placeholder={intl.formatMessage({
                      id: "contact-content.message",
                    })}
                  />
                </div>
                <div className="app-form-group buttons">
                  {status === "SUCCESS" && <p>Thanks!</p>}
                  {status === "NOT_SEND" && (
                    <div>
                      <button type="reset" className="app-form-button">
                        {intl.formatMessage({ id: "contact-content.cancel" })}
                      </button>
                      <button type="submit" className="app-form-button">
                        {intl.formatMessage({ id: "contact-content.send" })}
                      </button>
                    </div>
                  )}
                  {status === "ERROR" && <p>Ooops! There was an error.</p>}
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="credits">
          <span>inspired by</span>
          <a
            className="credits-link"
            href="https://dribbble.com/shots/2666271-Contact"
            target="_blank"
          >
            <svg className="dribbble" viewBox="0 0 200 200">
              <g stroke="#ffffff" fill="none">
                <circle cx="100" cy="100" r="90" strokeWidth="20"></circle>
                <path
                  d="M62.737004,13.7923523 C105.08055,51.0454853 135.018754,126.906957 141.768278,182.963345"
                  strokeWidth="20"
                ></path>
                <path
                  d="M10.3787186,87.7261455 C41.7092324,90.9577894 125.850356,86.5317271 163.474536,38.7920951"
                  strokeWidth="20"
                ></path>
                <path
                  d="M41.3611549,163.928627 C62.9207607,117.659048 137.020642,86.7137169 189.041451,107.858103"
                  strokeWidth="20"
                ></path>
              </g>
            </svg>
            <span>Gururaj</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default injectIntl(Contact);
