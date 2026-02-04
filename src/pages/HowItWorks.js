import './HowItWorks.css';
import { Link } from 'react-router-dom';

function HowItWorks() {
  return (
    <div className="how-it-works-page">
      {/* Header */}
      <header className="how-it-works-header">
        <Link to="/" className="header-left">FORMERLY SCOTT'S CHEAP FLIGHTS</Link>
        <div className="header-right">LOGIN</div>
      </header>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <h1 className="how-it-works-title">How Going™ Works</h1>
        
        <div className="steps-container">
          {/* Step 1 */}
          <div className="step-card">
            <div className="step-icon">
              <div className="icon-airport">✈️</div>
            </div>
            <h2 className="step-title">Start with your airport.</h2>
            <p className="step-description">
              Choose US departure airports like your biggest airport, closest airport, and maybe even your parent's.
            </p>
          </div>

          {/* Step 2 */}
          <div className="step-card">
            <div className="step-icon">
              <div className="icon-telescope">🔭</div>
            </div>
            <h2 className="step-title">Watch the deals roll in.</h2>
            <p className="step-description">
              We keep a close eye on airfare to over 900 destinations around the world. When the prices drop, you know.
            </p>
          </div>

          {/* Step 3 */}
          <div className="step-card">
            <div className="step-icon">
              <div className="icon-booking">✍️</div>
            </div>
            <h2 className="step-title">Then book it.</h2>
            <p className="step-description">
              With flight details, booking links, and timeline estimates, all that's left for you is to say, "Let's go!"
            </p>
          </div>
        </div>
      </section>

      {/* Background Image Section */}
      <section className="background-image-section">
        <div className="scenic-background"></div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2 className="cta-title">Booked. Going. Gone.</h2>
        <p className="cta-description">
          Most deals are 40-90% off normal prices with great itineraries from the best airlines. If it's not an amazing deal, we won't send it.
        </p>
        <Link to="/">
          <button className="cta-button-purple">
            <span>GET FREE</span>
            <span>FLIGHT</span>
          </button>
        </Link>
      </section>
    </div>
  );
}

export default HowItWorks;
