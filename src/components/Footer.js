import React from "react";

const Footer = () => (
  <footer>
    <div className="c-footer__wrapper">
      <div className="c-footer">
        <div className="c-footer__links">
          <ul className="c-footer__social">
            <li>
              <a
                href="https://www.meetup.com/Tulsa-UX-User-Group/"
                target="_blank"
                title="Tulsa UX Meetup"
              >
                <i className="fab fa-meetup" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/tulsaux"
                target="_blank"
                title="Follow @TulsaUX on Twitter"
              >
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/tulsaux"
                target="_blank"
                title="Follow @TulsaUX on Instagram"
              >
                <i className="fab fa-instagram" />
              </a>
            </li>
            <li>
              <a
                href="http://slack.techlahoma.org"
                target="_blank"
                title="Hit us up on Slack"
              >
                <i className="fab fa-slack-hash" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/tulsaux"
                target="_blank"
                title="Hit us up on Slack"
              >
                <i className="fab fa-github" />
              </a>
            </li>
            <li>
              <a
                href="https://medium.com/tulsa-ux"
                target="_blank"
                title="Read our recaps on Medium"
              >
                <i className="fab fa-medium-m" />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/tulsaux"
                target="_blank"
                title="Like us on Facebook"
              >
                <i className="fab fa-facebook" />
              </a>
            </li>
            <li>
              <a
                href="mailto:hello@tulsaux.com"
                target="_blank"
                title="Email us"
              >
                <i className="far fa-envelope" />
              </a>
            </li>
          </ul>
        </div>
        <div className="c-footer__copyright">
          <a href="https://www.techlahoma.org/code-of-conduct/">
            Techlahoma Code of Conduct
          </a>
          <br />
          Copyright &copy; 2018 Copyright Tulsa UX.
          All&nbsp;Rights&nbsp;Reserved.
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
