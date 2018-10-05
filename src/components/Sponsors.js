import React from "react";
import techlahoma from "../assets/media/sponsor-techlahoma.jpg";
import thirtySixDegreesNorth from "../assets/media/sponsor-36n.jpg";
import tekSystems from "../assets/media/sponsor-teksystems.jpg";

const Sponsors = () => (
  <section>
    <div className="row">
      <div className="col">
        <h2>
          <i className="far fa-cogs" /> Sponsors
        </h2>
        <ul className="c-sponsors">
          <li className="c-sponsors__card">
            <div className="c-sponsors__card__logo">
              <img src={techlahoma} alt="Techlahoma logo" />
            </div>
            <a target="_blank" href="https://www.techlahoma.org/">
              Techlahoma
            </a>
            <p>Meetup Sponsor</p>
          </li>
          <li className="c-sponsors__card">
            <div className="c-sponsors__card__logo">
              <img src={thirtySixDegreesNorth} alt="36&deg; North logo" />
            </div>
            <a target="_blank" href="https://36degreesnorth.co">
              36&deg; North Co&#8209;working&nbsp;Space
            </a>
            <p>Event Space Sponsor</p>
          </li>
          <li className="c-sponsors__card">
            <div className="c-sponsors__card__logo">
              <img src={tekSystems} alt="TEKsystems logo" />
            </div>
            <a target="_blank" href="https://www.teksystems.com/">
              TEKsystems Digital
            </a>
            <p>Food/Refreshments Sponsor</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Sponsors;
