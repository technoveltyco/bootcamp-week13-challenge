import React from "react";

function ReachOut() {
  return (
    <section className="ReachOut">
      <h1 className="Section-header" id="reach-out">
        Get in touch
      </h1>
      <p>
        Let's get this conversation started. Tell me a bit about yourself, and
        I'll get in touch as soon as possible.
      </p>
      <form id="contactForm">
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            className="form-control"
            id="name"
            type="text"
            placeholder="Name"
            data-sb-validations="required"
          />
          <div className="invalid-feedback" data-sb-feedback="name:required">
            Name is required.
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="emailAddress">
            Email Address
          </label>
          <input
            className="form-control"
            id="emailAddress"
            type="email"
            placeholder="Email Address"
            data-sb-validations="required, email"
          />
          <div
            className="invalid-feedback"
            data-sb-feedback="emailAddress:required"
          >
            Email Address is required.
          </div>
          <div
            className="invalid-feedback"
            data-sb-feedback="emailAddress:email"
          >
            Email Address Email is not valid.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            type="text"
            placeholder="Message"
            style={{ height: "10rem" }}
            data-sb-validations="required"
          ></textarea>
          <div className="invalid-feedback" data-sb-feedback="message:required">
            Message is required.
          </div>
        </div>

        <div className="d-none" id="submitSuccessMessage">
          <div className="text-center mb-3">Form submission successful!</div>
        </div>

        <div className="d-none" id="submitErrorMessage">
          <div className="text-center text-danger mb-3">
            Error sending message!
          </div>
        </div>

        <div className="d-grid">
          <button className="Cta-btn btn btn-primary btn-lg" type="submit">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default ReachOut;
