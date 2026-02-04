import '../App.css';
import { Link } from 'react-router-dom';
import logo1 from '../img/logo1.png';
import logo2 from '../img/logo2.png';
import logo3 from '../img/logo3.png';
import logo4 from '../img/logo4.png';
import logo5 from '../img/logo5.png';


function HomePage() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="header-left">FORMERLY SCOTT'S CHEAP FLIGHTS</div>
        <div className="header-right">LOGIN</div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="hero-section">
          <h1 className="headline">
            <span className="headline-line1">Less overpaying.</span>
            <span className="headline-line2">More traveling.</span>
          </h1>
          <p className="subheadline">
            Meet the travel membership that saves you hundreds on flights.
          </p>
          <Link to="/how-it-works">
            <button className="cta-button">
              <span>GET FREE FLIGHT ALERTS</span>
              <span className="button-icons">
                <span className="airplane-icon">✈</span>
              </span>
            </button>
          </Link>
        </div>
      </main>

      {/* As Seen In Section */}
      <section className="as-seen-in">
        <h2 className="as-seen-in-title">AS SEEN IN</h2>
        <div className="media-logos">
          <div className="logo-item">
            <img src={logo1} alt="Live Kelly and Ryan" className="logo-image" />
          </div>
          <div className="logo-item">
            <img src={logo2} alt="The New York Times" className="logo-image" />
          </div>
          <div className="logo-item">
            <img src={logo3} alt="TODAY" className="logo-image" />
          </div>
          <div className="logo-item logo-gma-item">
            <img src={logo4} alt="Good Morning America" className="logo-image logo-gma" />
          </div>
          <div className="logo-item">
            <img src={logo5} alt="BuzzFeed" className="logo-image" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
