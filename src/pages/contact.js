import React from 'react';

import './contact.css';

export default class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      status: ""
    };
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    console.log('submit')
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }

  render() {
    const { status } = this.state;

    return (
      <div class="background">
        <div class="container">
          <div class="screen">
            <div class="screen-header">
              <div class="screen-header-left">
                <div class="screen-header-button close"></div>
                <div class="screen-header-button maximize"></div>
                <div class="screen-header-button minimize"></div>
              </div>
              <div class="screen-header-right">
                <div class="screen-header-ellipsis"></div>
                <div class="screen-header-ellipsis"></div>
                <div class="screen-header-ellipsis"></div>
              </div>
            </div>
            <div class="screen-body">
              <div class="screen-body-item left">
                <div class="app-title">
                  <span>CONTACT</span>
                  <span>US</span>
                </div>
                <div class="app-contact">CONTACT INFO : +62 81 314 928 595</div>
              </div>
              <div class="screen-body-item">
                <form
                  class="app-form"
                  onSubmit={(ev) => this.submitForm(ev)}
                  action="https://formspree.io/xwkrpbyn"
                  method="POST"
                >
                  <div class="app-form-group">
                    <input class="app-form-control" name="name" placeholder="NAME" />
                  </div>
                  <div class="app-form-group">
                    <input class="app-form-control" name="email" placeholder="EMAIL" />
                  </div>
                  <div class="app-form-group">
                    <input class="app-form-control" placeholder="CONTACT NO" />
                  </div>
                  <div class="app-form-group message">
                    <input class="app-form-control" placeholder="MESSAGE" />
                  </div>
                  <div class="app-form-group buttons">
                    {status === "SUCCESS" ? <p>Thanks!</p> :
                      <div>
                        <button class="app-form-button">CANCEL</button>
                        <button class="app-form-button">SEND</button>
                      </div>
                    }
                    {status === "ERROR" && <p>Ooops! There was an error.</p>}
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="credits">
            inspired by
        <a class="credits-link" href="https://dribbble.com/shots/2666271-Contact" target="_blank">
              <svg class="dribbble" viewBox="0 0 200 200">
                <g stroke="#ffffff" fill="none">
                  <circle cx="100" cy="100" r="90" stroke-width="20"></circle>
                  <path d="M62.737004,13.7923523 C105.08055,51.0454853 135.018754,126.906957 141.768278,182.963345" stroke-width="20"></path>
                  <path d="M10.3787186,87.7261455 C41.7092324,90.9577894 125.850356,86.5317271 163.474536,38.7920951" stroke-width="20"></path>
                  <path d="M41.3611549,163.928627 C62.9207607,117.659048 137.020642,86.7137169 189.041451,107.858103" stroke-width="20"></path>
                </g>
              </svg>
          Gururaj
        </a>
          </div>
        </div>
      </div>

    )
  }
}