import React from "react";

const NewsletterSignup = () => (
  <div className="newsletter-signup">
    <div className="newsletter-signup__wrapper">
      <div className="newsletter-signup__title">
        <h2>Newsletter Signup</h2>
      </div>

      <div id="mc_embed_signup" className="newsletter-signup__form">
        <form
          action="//tulsaux.us16.list-manage.com/subscribe/post?u=210a9804a4141712ff6b0b2b8&amp;id=a479465728"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          novalidate
        >
          <div id="mc_embed_signup_scroll">
            <div className="mc-field-group">
              <label for="mce-EMAIL">
                Email Address <span className="asterisk">*</span>
              </label>
              <input
                type="email"
                value=""
                name="EMAIL"
                placeholder="name@example.com"
                className="required email"
                id="mce-EMAIL"
              />
              <input
                type="submit"
                value="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="btn btn--red submit"
              />
            </div>

            <div id="mce-responses" className="clear">
              <div className="response" id="mce-error-response" />
              <div className="response" id="mce-success-response" />
            </div>

            <div aria-hidden="true">
              <input
                type="text"
                name="b_210a9804a4141712ff6b0b2b8_a479465728"
                tabindex="-1"
                value=""
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default NewsletterSignup;
