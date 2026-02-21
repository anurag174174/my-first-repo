import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";

function Disclaimer() {
  return (
    <>
      <SEOHead
        title="Disclaimer"
        description="Disclaimer for News of City. General information and accuracy of content."
      />
      <div className="static-page">
        <header className="page-header">
          <h1 className="page-title">Disclaimer</h1>
          <p className="page-lead">Important information about our content and services</p>
        </header>

        <div className="static-content">
          <section>
            <h2>General Information</h2>
            <p>
              The information provided on News of City is for general informational purposes only. All content on this website is published in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, or completeness of any information on the Site.
            </p>
          </section>

          <section>
            <h2>Not Professional Advice</h2>
            <p>
              Nothing on this Site constitutes legal, financial, medical, or other professional advice. You should consult a qualified professional for advice specific to your situation. Relying on any information on this Site is solely at your own risk.
            </p>
          </section>

          <section>
            <h2>Accuracy and Updates</h2>
            <p>
              We strive to keep information up to date and correct, but we do not guarantee that the Site is free of errors or that content reflects the most current developments. News and events change rapidly; we are not responsible for any inaccuracies or omissions.
            </p>
          </section>

          <section>
            <h2>External Links</h2>
            <p>
              Our Site may contain links to external websites. We have no control over the content or practices of third-party sites and are not responsible for their privacy policies or accuracy. Inclusion of any link does not imply endorsement.
            </p>
          </section>

          <section>
            <h2>Views and Opinions</h2>
            <p>
              Views and opinions expressed in articles or comments are those of the authors or contributors and do not necessarily reflect the official policy or position of News of City. We are not liable for any views expressed by third parties.
            </p>
          </section>

          <section>
            <h2>Contact</h2>
            <p>
              If you have questions about this Disclaimer, please <Link to="/contact">contact us</Link>.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

export default Disclaimer;
