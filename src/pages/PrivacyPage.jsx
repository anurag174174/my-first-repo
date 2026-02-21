import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";

function PrivacyPolicy() {
  return (
    <>
      <SEOHead
        title="Privacy Policy"
        description="Privacy policy for News of City. How we collect, use, and protect your data."
      />
      <div className="static-page">
        <header className="page-header">
          <h1 className="page-title">Privacy Policy</h1>
          <p className="page-lead">Last updated: February 2025</p>
        </header>

        <div className="static-content">
          <section>
            <h2>1. Introduction</h2>
            <p>
              News of City ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this policy carefully.
            </p>
          </section>

          <section>
            <h2>2. Information We Collect</h2>
            <p>
              We may collect information that you provide directly, such as when you contact us (name, email, message). We may also automatically collect certain information when you visit our Site, including your IP address, browser type, device information, and usage data through cookies and similar technologies.
            </p>
          </section>

          <section>
            <h2>3. How We Use Your Information</h2>
            <p>
              We use the information we collect to operate and improve our Site, respond to your inquiries, send you updates (if you have opted in), analyze trends, and ensure the security of our services. We do not sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h2>4. Cookies and Tracking</h2>
            <p>
              We may use cookies and similar technologies to enhance your experience, remember your preferences, and understand how our Site is used. You can control cookie settings through your browser; disabling cookies may affect some features of the Site.
            </p>
          </section>

          <section>
            <h2>5. Third-Party Services</h2>
            <p>
              Our Site may use third-party services (e.g., analytics, contact forms). These services have their own privacy policies governing how they use your data. We encourage you to review their policies when you interact with such features.
            </p>
          </section>

          <section>
            <h2>6. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2>7. Your Rights</h2>
            <p>
              Depending on your location, you may have rights to access, correct, or delete your personal data, or to object to or restrict certain processing. To exercise these rights, please contact us through our <Link to="/contact">Contact</Link> page.
            </p>
          </section>

          <section>
            <h2>8. Children's Privacy</h2>
            <p>
              Our Site is not directed to children under 13. We do not knowingly collect personal information from children. If you believe we have collected such information, please contact us so we can delete it.
            </p>
          </section>

          <section>
            <h2>9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will post the updated policy on this page and update the "Last updated" date. Your continued use of the Site after changes constitutes acceptance of the revised policy.
            </p>
          </section>

          <section>
            <h2>10. Contact Us</h2>
            <p>
              For questions about this Privacy Policy or our data practices, please visit our <Link to="/contact">Contact</Link> page.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

export default PrivacyPolicy;
