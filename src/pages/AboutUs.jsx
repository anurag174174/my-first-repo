import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";

function AboutUs() {
  return (
    <>
      <SEOHead
        title="About Us"
        description="Learn about News of City. Your trusted source for local news and community updates."
      />
      <div className="static-page">
        <header className="page-header">
          <h1 className="page-title">About Us</h1>
          <p className="page-lead">Your trusted source for local news and community updates</p>
        </header>

        <div className="static-content">
          <section>
            <h2>Who We Are</h2>
            <p>
              News of City is a local news platform dedicated to bringing you timely, accurate, and relevant stories from your city. We cover local developments, politics, sports, culture, and community events so you can stay informed about what matters most in your area.
            </p>
          </section>

          <section>
            <h2>Our Mission</h2>
            <p>
              Our mission is to inform, engage, and connect our community through quality journalism. We believe that access to reliable local news strengthens democracy and helps citizens make better decisions. We are committed to fairness, accuracy, and serving the public interest.
            </p>
          </section>

          <section>
            <h2>What We Cover</h2>
            <p>
              From breaking news and government updates to sports, culture, and human-interest stories, we strive to cover the topics that affect your daily life. We also feature guides and how-to articles to help you with practical matters like applications, permits, and local services.
            </p>
          </section>

          <section>
            <h2>Get in Touch</h2>
            <p>
              We value our readers' feedback and story ideas. Whether you have a tip, a question, or just want to say hello, we'd love to hear from you. Visit our <Link to="/contact">Contact</Link> page to send us a message.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
