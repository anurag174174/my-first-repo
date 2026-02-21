import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";

function Terms() {
  return (
    <>
      <SEOHead
        title="Terms and Conditions"
        description="Terms and conditions for using News of City. Read our rules and policies."
      />
      <div className="static-page">
        <header className="page-header">
          <h1 className="page-title">Terms and Conditions</h1>
          <p className="page-lead">Last updated: February 2025</p>
        </header>

        <div className="static-content">
          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using News of City ("the Site"), you accept and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our website.
            </p>
          </section>

          <section>
            <h2>2. Use of Content</h2>
            <p>
              All content on this website, including articles, images, and other materials, is for informational purposes only. You may not reproduce, distribute, or create derivative works without our prior written permission. Personal, non-commercial use is permitted provided you do not modify the content and retain any copyright notices.
            </p>
          </section>

          <section>
            <h2>3. User Conduct</h2>
            <p>
              You agree to use the Site only for lawful purposes. You must not use the Site in any way that could damage, disable, or impair the Site or interfere with any other party's use of the Site. Prohibited conduct includes posting false information, harassing others, or violating any applicable laws.
            </p>
          </section>

          <section>
            <h2>4. Intellectual Property</h2>
            <p>
              News of City and its logos, design, and content are owned by us or our licensors. Nothing in these terms grants you any right to use our trademarks or branding without written consent.
            </p>
          </section>

          <section>
            <h2>5. Disclaimer of Warranties</h2>
            <p>
              The Site is provided "as is" without warranties of any kind. We do not warrant that the Site will be uninterrupted, error-free, or free of viruses. Your use of the Site is at your sole risk.
            </p>
          </section>

          <section>
            <h2>6. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, News of City shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Site or any content thereon.
            </p>
          </section>

          <section>
            <h2>7. Changes</h2>
            <p>
              We may update these Terms and Conditions from time to time. Continued use of the Site after changes constitutes acceptance of the revised terms. We encourage you to review this page periodically.
            </p>
          </section>

          <section>
            <h2>8. Contact</h2>
            <p>
              For questions about these Terms and Conditions, please visit our <Link to="/contact">Contact</Link> page.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

export default Terms;
