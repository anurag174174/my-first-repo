import { useState } from "react";
import SEOHead from "../components/SEOHead";

const WEB3FORMS_ACCESS_KEY = "b4351557-c96a-4f15-be84-9d1434dae10b";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const form = e.target;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
        form.reset();
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Failed to send message. Please check your connection and try again.");
    }
  };

  return (
    <>
      <SEOHead
        title="Contact Us"
        description="Get in touch with News of City. Send us your feedback, tips, or questions."
      />
      <div className="static-page contact-page">
        <header className="page-header">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-lead">
            Have a question, tip, or feedback? We'd love to hear from you.
          </p>
        </header>

        <div className="contact-layout">
          <div className="contact-info">
            <p>
              Send us a message using the form, and we'll get back to you as soon as possible.
            </p>
            <p className="contact-note">
              For press inquiries or partnership opportunities, please mention that in your message.
            </p>
          </div>

          <div className="contact-form-wrap">
            {submitted ? (
              <div className="contact-success" role="alert">
                <p>Thank you! Your message has been sent successfully. We'll be in touch soon.</p>
              </div>
            ) : (
              <form
                className="contact-form"
                action="https://api.web3forms.com/submit"
                method="POST"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />

                <div className="form-group">
                  <label htmlFor="contact-name">Name</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    placeholder="Your name"
                    autoComplete="name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email">Email</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    autoComplete="email"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    placeholder="Your message..."
                    rows={5}
                  />
                </div>

                {error && (
                  <div className="contact-error" role="alert">
                    {error}
                  </div>
                )}

                <button type="submit" className="contact-submit">
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
