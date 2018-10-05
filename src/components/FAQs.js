import React from "react";

const FAQs = () => (
  <section>
    <div class="row">
      <div class="col">
        <h2>
          <i class="fas fa-question-circle" /> FAQs
        </h2>
        <ul class="faqs-list">
          <li>
            Do the events cost anything?
            <span>No! They're free and open to the public.</span>
          </li>
          <li>
            I don't know the first thing about user experience. Is this group for me?
            <span>
              Absolutely. This group welcomes new comers and seasoned veterans alike.
            </span>
          </li>
          <li>
            How often do you meet?
            <span>
              We meet the second Tuesday of each month at 36&deg; North Co-working Space from 6 - 8pm.
            </span>
          </li>
          <li>
            What does "user experience" mean?
            <span>
              "The overall experience of a person using a product such as a
              website or computer application, especially in terms of how easy
              or pleasing it is to use."{" "}
              <a
                href="https://www.nngroup.com/articles/definition-user-experience/"
                title="The Definition of User Experience (UX)"
              >
                <em>&ndash; Nielson Norman Group</em>
              </a>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default FAQs;
